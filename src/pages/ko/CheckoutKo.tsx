import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { nanoid } from 'nanoid';
import SEOHead from '@/components/seo/SEOHead';
import { loadTossPayments, TossPaymentsWidgets } from "@tosspayments/tosspayments-sdk";

const PRODUCT = {
  name: 'DF717 AI 자동매매 프로그램 솔루션 (DAP-Premium)',
  price: 5000000,
  description: '연간 구매 (12개월)'
};

// Toss Payments Client Key (Publishable - safe to expose)
const TOSS_CLIENT_KEY = "test_gck_LlDJaYngroeYKAWl5KZK3ezGdRpX";

const CheckoutKo: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guestPassword: ''
  });
  
  const widgetsRef = useRef<TossPaymentsWidgets | null>(null);

  // Check if coming from guest checkout
  const isGuest = searchParams.get('guest') === 'true';
  const guestEmail = searchParams.get('email') || '';

  useEffect(() => {
    if (user) {
      setForm(prev => ({
        ...prev,
        name: user.user_metadata?.full_name || '',
        email: user.email || '',
      }));
    } else if (isGuest && guestEmail) {
      setForm(prev => ({
        ...prev,
        email: guestEmail
      }));
    }
  }, [user, isGuest, guestEmail]);

  // Initialize Toss Payments Widget
  useEffect(() => {
    const initializeWidget = async () => {
      try {
        const customerKey = user?.id || `guest_${nanoid(10)}`;
        
        const tossPayments = await loadTossPayments(TOSS_CLIENT_KEY);
        const widgets = tossPayments.widgets({ customerKey });
        
        widgetsRef.current = widgets;
        
        // Set amount
        await widgets.setAmount({
          currency: "KRW",
          value: PRODUCT.price
        });

        // Render payment methods widget
        await widgets.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT"
        });

        // Render agreement widget
        await widgets.renderAgreement({
          selector: "#agreement",
          variantKey: "AGREEMENT"
        });

        setWidgetReady(true);
      } catch (error) {
        console.error('Failed to initialize payment widget:', error);
        toast({
          variant: 'destructive',
          title: '결제 위젯 로드 실패',
          description: '잠시 후 다시 시도해주세요.'
        });
      }
    };

    initializeWidget();

    return () => {
      // Cleanup on unmount
      widgetsRef.current = null;
    };
  }, [user?.id]);

  const handlePayment = async () => {
    // Validation
    if (!form.name.trim()) {
      toast({ variant: 'destructive', title: '오류', description: '이름을 입력해주세요.' });
      return;
    }
    if (!form.email.trim()) {
      toast({ variant: 'destructive', title: '오류', description: '이메일을 입력해주세요.' });
      return;
    }
    if (!form.phone.trim()) {
      toast({ variant: 'destructive', title: '오류', description: '전화번호를 입력해주세요.' });
      return;
    }
    
    // Guest password validation (only for non-authenticated users)
    if (!user && (!form.guestPassword.trim() || form.guestPassword.length < 6)) {
      toast({ variant: 'destructive', title: '오류', description: '비회원 비밀번호는 6자리 이상이어야 합니다.' });
      return;
    }

    if (!widgetsRef.current) {
      toast({ variant: 'destructive', title: '오류', description: '결제 위젯이 준비되지 않았습니다.' });
      return;
    }

    setLoading(true);

    try {
      const orderId = `DF717-${nanoid(10)}`;
      
      // Hash password for guest users
      let hashedPassword = null;
      if (!user && form.guestPassword) {
        const { data: hashData, error: hashError } = await supabase
          .rpc('hash_password', { password: form.guestPassword });
        if (hashError) throw hashError;
        hashedPassword = hashData;
      }
      
      // Create order in database first
      const { error: orderError } = await supabase
        .from('orders')
        .insert({
          order_id: orderId,
          user_id: user?.id || null,
          customer_name: form.name,
          customer_email: form.email,
          customer_phone: form.phone.replace(/-/g, ''),
          product_type: 'dap-premium',
          amount: PRODUCT.price,
          status: 'pending',
          guest_password: hashedPassword
        });

      if (orderError) {
        throw orderError;
      }

      // Request payment with Toss Payments Widget
      await widgetsRef.current.requestPayment({
        orderId,
        orderName: PRODUCT.name,
        customerName: form.name,
        customerEmail: form.email,
        customerMobilePhone: form.phone.replace(/-/g, ''),
        successUrl: `${window.location.origin}/ko/payment/success`,
        failUrl: `${window.location.origin}/ko/payment/fail`
      });

    } catch (error: any) {
      console.error('Payment error:', error);
      
      // Handle user cancellation
      if (error.code === 'USER_CANCEL') {
        toast({
          title: '결제 취소',
          description: '결제가 취소되었습니다.'
        });
      } else {
        toast({
          variant: 'destructive',
          title: '결제 오류',
          description: error.message || '결제 처리 중 오류가 발생했습니다.'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="결제 | DF717"
        description="DF717 AI 자동매매 솔루션 결제"
        canonical="https://www.df717.ai/ko/checkout"
        lang="ko"
      />
      <div className="min-h-screen bg-muted py-8">
        <div className="max-w-2xl mx-auto px-4">
          <button 
            onClick={() => navigate('/ko/solution')}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            솔루션 페이지로 돌아가기
          </button>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">결제 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Product Summary */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">{PRODUCT.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{PRODUCT.description}</p>
                <p className="text-2xl font-bold text-primary">
                  ₩{PRODUCT.price.toLocaleString()}
                </p>
              </div>

              <Separator />

              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="font-semibold">고객 정보</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="name">이름 *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="이름을 입력하세요"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">이메일 *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="이메일을 입력하세요"
                    className="h-12"
                    readOnly={!!user}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">전화번호 *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="010-0000-0000"
                    className="h-12"
                  />
                </div>

                {/* Guest password field - only shown for non-authenticated users */}
                {!user && (
                  <div className="space-y-2">
                    <Label htmlFor="guestPassword">비회원 비밀번호 * (주문 조회용)</Label>
                    <Input
                      id="guestPassword"
                      type="password"
                      value={form.guestPassword}
                      onChange={(e) => setForm({ ...form, guestPassword: e.target.value })}
                      placeholder="6자리 이상 비밀번호"
                      className="h-12"
                      minLength={6}
                    />
                    <p className="text-xs text-muted-foreground">
                      주문 조회 시 사용할 비밀번호입니다. 꼭 기억해주세요.
                    </p>
                  </div>
                )}
              </div>

              <Separator />

              {/* Payment Widget Container */}
              <div className="space-y-4">
                <h3 className="font-semibold">결제 수단</h3>
                <div id="payment-method" className="min-h-[200px]">
                  {!widgetReady && (
                    <div className="flex items-center justify-center h-[200px] bg-muted/30 rounded-lg">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>

              {/* Agreement Widget Container */}
              <div id="agreement" className="min-h-[50px]" />

              <Separator />

              {/* Features */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">포함 사항</h4>
                <ul className="text-sm space-y-1">
                  {[
                    'AI 기반 자동매매 시스템',
                    'MetaTrader 4, 5 연동',
                    '24/7 시스템 모니터링',
                    '전문가 지원'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment Button */}
              <Button
                onClick={handlePayment}
                disabled={loading || !widgetReady}
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    처리 중...
                  </>
                ) : (
                  `₩${PRODUCT.price.toLocaleString()} 결제하기`
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                결제 버튼을 클릭하면 토스페이먼츠 결제창이 열립니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CheckoutKo;

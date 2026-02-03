import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft, Check, CreditCard, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { nanoid } from 'nanoid';
import SEOHead from '@/components/seo/SEOHead';
import { loadTossPayments, TossPaymentsWidgets, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import { plans, getPlanFromSearchParams, PlanType } from '@/lib/pricing';
import { cn } from '@/lib/utils';

// Toss Payments Client Key (Publishable - safe to expose)
const TOSS_CLIENT_KEY = "test_gck_LlDJaYngroeYKAWl5KZK3ezGdRpX";

const CheckoutKo: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);
  const [planType, setPlanType] = useState<PlanType>(() => getPlanFromSearchParams(searchParams));
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guestPassword: ''
  });
  
  const widgetsRef = useRef<TossPaymentsWidgets | null>(null);
  const tossInstanceRef = useRef<any>(null);

  // Check if coming from guest checkout with verified email
  const isGuest = searchParams.get('guest') === 'true';
  const guestEmail = searchParams.get('email') || '';
  const [verificationChecked, setVerificationChecked] = useState(false);

  const selectedPlan = plans[planType];

  // Gate access: wait for auth to initialize, then allow members directly.
  useEffect(() => {
    // Don't run until auth has finished loading
    if (authLoading) return;

    const checkAccess = async () => {
      // If user is logged in, allow access immediately
      if (user) {
        setVerificationChecked(true);
        setForm(prev => ({
          ...prev,
          name: user.user_metadata?.full_name || '',
          email: user.email || '',
          phone: user.user_metadata?.phone || '',
        }));
        return;
      }

      // Not logged in - check if guest flow
      if (isGuest && guestEmail) {
        // Verify the guest email is registered
        try {
          const { data, error } = await supabase.functions.invoke('guest-verification', {
            body: { action: 'check', email: guestEmail }
          });

          if (!error && data?.verified) {
            setForm(prev => ({ ...prev, email: guestEmail }));
            setVerificationChecked(true);
            return;
          }
        } catch (error) {
          console.error('Guest verification error:', error);
        }
      }

      // No valid access - redirect to login
      toast({
        variant: 'destructive',
        title: '접근 불가',
        description: '로그인하거나 비회원 구매를 진행해주세요.'
      });
      navigate('/ko/login');
    };

    checkAccess();
  }, [authLoading, user, isGuest, guestEmail, navigate, toast]);

  // Initialize Toss Payments - only after verification is complete
  useEffect(() => {
    // Don't initialize until verification is complete
    if (!verificationChecked) return;

    const initializePayment = async () => {
      // Wait a bit for DOM to be ready
      await new Promise(resolve => setTimeout(resolve, 100));
      
      try {
        const customerKey = user?.id || ANONYMOUS;
        const tossPayments = await loadTossPayments(TOSS_CLIENT_KEY);
        tossInstanceRef.current = tossPayments;

        if (planType === 'yearly') {
          // One-time payment: use widgets
          const paymentMethodEl = document.getElementById('payment-method');
          const agreementEl = document.getElementById('agreement');
          
          if (!paymentMethodEl || !agreementEl) {
            console.error('Payment widget container elements not found');
            return;
          }

          const widgets = tossPayments.widgets({ customerKey });
          widgetsRef.current = widgets;
          
          await widgets.setAmount({
            currency: "KRW",
            value: selectedPlan.price
          });

          await widgets.renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT"
          });

          await widgets.renderAgreement({
            selector: "#agreement",
            variantKey: "AGREEMENT"
          });
        }
        // For monthly subscription, we'll use requestBillingAuth directly

        setWidgetReady(true);
      } catch (error) {
        console.error('Failed to initialize payment:', error);
        toast({
          variant: 'destructive',
          title: '결제 초기화 실패',
          description: '잠시 후 다시 시도해주세요.'
        });
      }
    };

    initializePayment();

    return () => {
      widgetsRef.current = null;
      tossInstanceRef.current = null;
    };
  }, [verificationChecked, user?.id, planType, selectedPlan.price, toast]);

  // Update amount when plan changes
  useEffect(() => {
    if (widgetsRef.current && planType === 'yearly') {
      widgetsRef.current.setAmount({
        currency: "KRW",
        value: selectedPlan.price
      });
    }
  }, [planType, selectedPlan.price]);

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

    setLoading(true);

    try {
      const orderId = `DF717-${nanoid(10)}`;
      const customerKey = user?.id || `guest_${nanoid(8)}`;
      
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
          product_type: selectedPlan.productType,
          amount: selectedPlan.price,
          status: 'pending',
          guest_password: hashedPassword
        });

      if (orderError) {
        throw orderError;
      }

      if (planType === 'monthly') {
        // Monthly subscription: request billing key authorization
        if (!tossInstanceRef.current) {
          throw new Error('Toss Payments not initialized');
        }

        const billing = tossInstanceRef.current.billing();
        await billing.requestBillingAuth({
          customerKey,
          method: "CARD",
          successUrl: `${window.location.origin}/ko/payment/billing-success?orderId=${orderId}&amount=${selectedPlan.price}&orderName=${encodeURIComponent(selectedPlan.name)}&customerEmail=${encodeURIComponent(form.email)}&customerName=${encodeURIComponent(form.name)}`,
          failUrl: `${window.location.origin}/ko/payment/fail`
        });
      } else {
        // Yearly: one-time payment with widgets
        if (!widgetsRef.current) {
          throw new Error('Payment widget not initialized');
        }

        await widgetsRef.current.requestPayment({
          orderId,
          orderName: selectedPlan.name,
          customerName: form.name,
          customerEmail: form.email,
          customerMobilePhone: form.phone.replace(/-/g, ''),
          successUrl: `${window.location.origin}/ko/payment/success`,
          failUrl: `${window.location.origin}/ko/payment/fail`
        });
      }

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

  // Show loading until verification is checked
  if (!verificationChecked) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">인증 확인 중...</p>
        </div>
      </div>
    );
  }

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
            이전 페이지로 돌아가기
          </button>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">결제 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Plan Selection Toggle */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">결제 방식 선택</Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPlanType('monthly')}
                    className={cn(
                      "flex flex-col items-center p-4 rounded-lg border-2 transition-all",
                      planType === 'monthly'
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <CreditCard className={cn(
                      "h-6 w-6 mb-2",
                      planType === 'monthly' ? "text-primary" : "text-muted-foreground"
                    )} />
                    <span className={cn(
                      "font-semibold",
                      planType === 'monthly' ? "text-primary" : "text-foreground"
                    )}>월간 결제</span>
                    <span className="text-sm text-muted-foreground">₩500,000/월</span>
                    <span className="text-xs text-muted-foreground mt-1">정기구독</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlanType('yearly')}
                    className={cn(
                      "flex flex-col items-center p-4 rounded-lg border-2 transition-all relative",
                      planType === 'yearly'
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded-full font-semibold">
                      17% 할인
                    </span>
                    <Calendar className={cn(
                      "h-6 w-6 mb-2",
                      planType === 'yearly' ? "text-primary" : "text-muted-foreground"
                    )} />
                    <span className={cn(
                      "font-semibold",
                      planType === 'yearly' ? "text-primary" : "text-foreground"
                    )}>연간 결제</span>
                    <span className="text-sm text-muted-foreground">₩5,000,000/년</span>
                    <span className="text-xs text-muted-foreground mt-1">월 ₩416,667</span>
                  </button>
                </div>
              </div>

              <Separator />

              {/* Product Summary */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">{selectedPlan.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{selectedPlan.description}</p>
                <p className="text-2xl font-bold text-primary">
                  {selectedPlan.displayPrice}
                  <span className="text-sm font-normal text-muted-foreground ml-1">{selectedPlan.period}</span>
                </p>
                {planType === 'monthly' && (
                  <p className="text-xs text-primary mt-2">
                    * 카드 등록 후 매월 자동 결제됩니다
                  </p>
                )}
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

              {/* Payment Widget Container - Only for yearly */}
              {planType === 'yearly' && (
                <>
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
                </>
              )}

              {/* Monthly subscription info */}
              {planType === 'monthly' && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    정기결제 안내
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 결제 버튼 클릭 시 카드 등록 화면으로 이동합니다</li>
                    <li>• 카드 등록 완료 후 첫 결제가 즉시 진행됩니다</li>
                    <li>• 이후 매월 같은 날짜에 자동 결제됩니다</li>
                    <li>• 언제든지 구독 해지가 가능합니다</li>
                  </ul>
                </div>
              )}

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
                disabled={loading || (planType === 'yearly' && !widgetReady)}
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    처리 중...
                  </>
                ) : planType === 'monthly' ? (
                  '카드 등록하고 결제하기'
                ) : (
                  `${selectedPlan.displayPrice} 결제하기`
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                {planType === 'monthly' 
                  ? '결제 버튼을 클릭하면 토스페이먼츠 카드 등록 화면이 열립니다.'
                  : '결제 버튼을 클릭하면 토스페이먼츠 결제창이 열립니다.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CheckoutKo;

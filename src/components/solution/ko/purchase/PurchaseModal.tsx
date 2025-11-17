import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { loadPaymentWidget, PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk';
import { ProductInfo, SUPABASE_URL } from '@/lib/toss';
import { nanoid } from 'nanoid';

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  product: ProductInfo;
  isLoggedIn: boolean;
  userEmail?: string;
  userName?: string;
  userId?: string;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({
  open,
  onClose,
  product,
  isLoggedIn,
  userEmail = '',
  userName = '',
  userId
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [widgetLoading, setWidgetLoading] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance['renderPaymentMethods']> | null>(null);

  const [form, setForm] = useState({
    name: userName,
    email: userEmail,
    phone: ''
  });

  // Initialize payment widget
  useEffect(() => {
    if (!open) return;

    const initializeWidget = async () => {
      try {
        const tossClientKey = import.meta.env.VITE_TOSS_CLIENT_KEY || '';
        const customerKey = userId || `GUEST_${nanoid()}`;
        
        const paymentWidget = await loadPaymentWidget(tossClientKey, customerKey);
        paymentWidgetRef.current = paymentWidget;

        // Render payment methods
        const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
          '#payment-widget',
          { value: product.price },
          { variantKey: 'DEFAULT' }
        );
        paymentMethodsWidgetRef.current = paymentMethodsWidget;

        // Render agreement
        paymentWidget.renderAgreement('#agreement-widget', { variantKey: 'AGREEMENT' });

        setWidgetLoading(false);
      } catch (error) {
        console.error('Payment widget initialization error:', error);
        toast({
          variant: 'destructive',
          title: '결제 위젯 로드 실패',
          description: '결제 위젯을 불러올 수 없습니다.'
        });
        setWidgetLoading(false);
      }
    };

    initializeWidget();

    return () => {
      // Cleanup
      paymentWidgetRef.current = null;
      paymentMethodsWidgetRef.current = null;
    };
  }, [open, product.price, userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      toast({
        variant: 'destructive',
        title: '약관 동의 필요',
        description: '약관에 동의해주세요.'
      });
      return;
    }

    if (!paymentWidgetRef.current) {
      toast({
        variant: 'destructive',
        title: '결제 준비 중',
        description: '잠시 후 다시 시도해주세요.'
      });
      return;
    }

    setLoading(true);

    try {
      // Create payment order
      const response = await fetch(`${SUPABASE_URL}/functions/v1/create-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2dmZndXZxZXl5bXF1aGloa2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMDQ3OTksImV4cCI6MjA2OTY4MDc5OX0.gHv95naHOic2A_00ADJd0pwAtq2nPxdLw0V7XThrWM4'
        },
        body: JSON.stringify({
          productType: product.type,
          customerName: form.name,
          customerEmail: form.email,
          customerPhone: form.phone,
          userId
        })
      });

      if (!response.ok) {
        throw new Error('주문 생성 실패');
      }

      const { orderId: serverOrderId, orderName } = await response.json();

      // Request payment using payment widget
      await paymentWidgetRef.current.requestPayment({
        orderId: serverOrderId,
        orderName: orderName,
        customerName: form.name,
        customerEmail: form.email,
        customerMobilePhone: form.phone,
        successUrl: `${window.location.origin}/ko/payment/success`,
        failUrl: `${window.location.origin}/ko/payment/fail`,
      });
    } catch (error: any) {
      console.error('Payment error:', error);
      toast({
        variant: 'destructive',
        title: '결제 오류',
        description: error.message
      });
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">
            {product.name} 프로그램 구매
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">구매자 정보</h3>
            
          {!isLoggedIn && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">이름 *</Label>
                <Input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-[#232323] border-gray-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">이메일 *</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-[#232323] border-gray-700 text-white"
                />
              </div>
            </>
          )}

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">전화번호 *</Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                placeholder="010-0000-0000"
                className="bg-[#232323] border-gray-700 text-white"
              />
            </div>
          </div>

          {/* Payment Amount */}
          <div className="border-t border-gray-700 pt-4 space-y-2">
            <div className="text-white">
              <p className="font-semibold mb-1">결제 금액</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ₩{product.price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Payment Widget */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">결제 수단</h3>
            {widgetLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
              </div>
            ) : (
              <>
                <div id="payment-widget" className="w-full" />
                <div id="agreement-widget" className="w-full" />
              </>
            )}
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-2 border-t border-gray-700 pt-4">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              className="mt-1"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-300 leading-relaxed cursor-pointer"
            >
              [필수] 구매조건 및 환불정책에 동의합니다.
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading || !agreedToTerms || widgetLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-6 text-lg"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            ₩{product.price.toLocaleString()} 결제하기
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import SEOHead from '@/components/seo/SEOHead';

const BillingSuccessKo: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const processPayment = async () => {
      const authKey = searchParams.get('authKey');
      const customerKey = searchParams.get('customerKey');
      const orderId = searchParams.get('orderId');
      const amount = searchParams.get('amount');
      const orderName = searchParams.get('orderName');
      const customerEmail = searchParams.get('customerEmail');
      const customerName = searchParams.get('customerName');

      if (!authKey || !customerKey || !orderId || !amount) {
        setErrorMessage('필수 정보가 누락되었습니다.');
        setStatus('error');
        return;
      }

      try {
        // Step 1: Issue billing key
        const { data: billingData, error: billingError } = await supabase.functions.invoke('issue-billing-key', {
          body: {
            authKey,
            customerKey,
            orderId,
            customerEmail,
            customerName,
          }
        });

        if (billingError || !billingData?.success) {
          throw new Error(billingData?.error || billingError?.message || '빌링키 발급 실패');
        }

        // Step 2: Execute first payment with billing key
        const { data: paymentData, error: paymentError } = await supabase.functions.invoke('billing-payment', {
          body: {
            billingKey: billingData.billingKey,
            customerKey,
            orderId,
            orderName: decodeURIComponent(orderName || 'DAP-Premium 월간 구독'),
            amount: parseInt(amount),
            customerEmail: customerEmail ? decodeURIComponent(customerEmail) : undefined,
            customerName: customerName ? decodeURIComponent(customerName) : undefined,
          }
        });

        if (paymentError || !paymentData?.success) {
          throw new Error(paymentData?.error || paymentError?.message || '결제 실패');
        }

        setStatus('success');
      } catch (error: any) {
        console.error('Billing payment error:', error);
        setErrorMessage(error.message || '결제 처리 중 오류가 발생했습니다.');
        setStatus('error');
      }
    };

    processPayment();
  }, [searchParams]);

  return (
    <>
      <SEOHead
        title="결제 처리 중 | DF717"
        description="결제 처리 중입니다."
        lang="ko"
      />
      <div className="min-h-screen bg-muted flex items-center justify-center py-8">
        <div className="max-w-md w-full mx-auto px-4">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              {status === 'processing' && (
                <>
                  <Loader2 className="h-16 w-16 animate-spin mx-auto mb-4 text-primary" />
                  <CardTitle className="text-xl">결제 처리 중...</CardTitle>
                </>
              )}
              {status === 'success' && (
                <>
                  <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
                  <CardTitle className="text-xl text-green-600">결제 완료!</CardTitle>
                </>
              )}
              {status === 'error' && (
                <>
                  <XCircle className="h-16 w-16 mx-auto mb-4 text-destructive" />
                  <CardTitle className="text-xl text-destructive">결제 실패</CardTitle>
                </>
              )}
            </CardHeader>
            <CardContent className="text-center space-y-4">
              {status === 'processing' && (
                <p className="text-muted-foreground">
                  카드 등록 및 첫 결제를 처리하고 있습니다.<br />
                  잠시만 기다려주세요...
                </p>
              )}
              {status === 'success' && (
                <>
                  <p className="text-muted-foreground">
                    DAP-Premium 월간 구독이 시작되었습니다.<br />
                    이제 서비스를 이용하실 수 있습니다.
                  </p>
                  <div className="pt-4 space-y-2">
                    <Button 
                      onClick={() => navigate('/ko/solution')}
                      className="w-full"
                    >
                      확인
                    </Button>
                  </div>
                </>
              )}
              {status === 'error' && (
                <>
                  <p className="text-muted-foreground">
                    {errorMessage}
                  </p>
                  <div className="pt-4 space-y-2">
                    <Button 
                      onClick={() => navigate('/ko/checkout?plan=monthly')}
                      className="w-full"
                    >
                      다시 시도하기
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => navigate('/ko/solution')}
                      className="w-full"
                    >
                      솔루션 페이지로 돌아가기
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BillingSuccessKo;

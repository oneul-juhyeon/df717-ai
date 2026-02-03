import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import SEOHead from '@/components/seo/SEOHead';

const PaymentSuccessKo: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const paymentKey = searchParams.get('paymentKey');
  const orderId = searchParams.get('orderId');
  const amount = searchParams.get('amount');

  useEffect(() => {
    const confirmPayment = async () => {
      if (!paymentKey || !orderId || !amount) {
        setStatus('error');
        setErrorMessage('결제 정보가 누락되었습니다.');
        return;
      }

      try {
        // Call confirm-payment edge function
        const { data, error } = await supabase.functions.invoke('confirm-payment', {
          body: {
            paymentKey,
            orderId,
            amount: parseInt(amount, 10)
          }
        });

        if (error) {
          throw error;
        }

        if (data?.success) {
          setStatus('success');
        } else {
          throw new Error(data?.error || '결제 승인에 실패했습니다.');
        }
      } catch (error: any) {
        console.error('Payment confirmation error:', error);
        setStatus('error');
        setErrorMessage(error.message || '결제 승인 중 오류가 발생했습니다.');
      }
    };

    confirmPayment();
  }, [paymentKey, orderId, amount]);

  return (
    <>
      <SEOHead
        title="결제 완료 | DF717"
        description="DF717 결제가 완료되었습니다."
        lang="ko"
      />
      <div className="min-h-screen bg-muted flex items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-lg">
          <CardHeader className="text-center">
            {status === 'loading' && (
              <>
                <Loader2 className="h-16 w-16 animate-spin text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">결제 승인 중...</CardTitle>
              </>
            )}
            {status === 'success' && (
              <>
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-green-600">결제가 완료되었습니다!</CardTitle>
              </>
            )}
            {status === 'error' && (
              <>
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-red-600">결제 승인 실패</CardTitle>
              </>
            )}
          </CardHeader>
          <CardContent className="text-center space-y-4">
            {status === 'loading' && (
              <p className="text-muted-foreground">잠시만 기다려주세요...</p>
            )}
            {status === 'success' && (
              <>
                <p className="text-muted-foreground">
                  DAP-Premium 서비스 이용을 환영합니다.<br />
                  등록하신 이메일로 안내 메일이 발송됩니다.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 text-left">
                  <p className="text-sm text-muted-foreground mb-1">주문번호</p>
                  <p className="font-mono font-semibold">{orderId}</p>
                </div>
                <Button 
                  onClick={() => navigate('/ko/solution')}
                  className="w-full"
                >
                  이전 페이지로 돌아가기
                </Button>
              </>
            )}
            {status === 'error' && (
              <>
                <p className="text-muted-foreground">{errorMessage}</p>
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/ko/checkout')}
                    className="flex-1"
                  >
                    다시 결제하기
                  </Button>
                  <Button 
                    onClick={() => navigate('/ko/solution')}
                    className="flex-1"
                  >
                    돌아가기
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PaymentSuccessKo;

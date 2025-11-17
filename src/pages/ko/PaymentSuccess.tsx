import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SUPABASE_URL } from '@/lib/toss';

const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [confirming, setConfirming] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const confirmPayment = async () => {
      const orderId = searchParams.get('orderId');
      const paymentKey = searchParams.get('paymentKey');
      const amount = searchParams.get('amount');

      try {
        const response = await fetch(`${SUPABASE_URL}/functions/v1/confirm-payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2dmZndXZxZXl5bXF1aGloa2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMDQ3OTksImV4cCI6MjA2OTY4MDc5OX0.gHv95naHOic2A_00ADJd0pwAtq2nPxdLw0V7XThrWM4'
          },
          body: JSON.stringify({ orderId, paymentKey, amount: Number(amount) })
        });

        if (!response.ok) {
          throw new Error('결제 승인 실패');
        }

        setConfirming(false);
      } catch (err: any) {
        setError(err.message);
        setConfirming(false);
      }
    };

    confirmPayment();
  }, [searchParams]);

  if (confirming) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">결제 처리 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">✕</div>
          <h1 className="text-3xl font-bold text-white mb-4">결제 처리 실패</h1>
          <p className="text-gray-300 mb-8">{error}</p>
          <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Link to="/ko/solution">돌아가기</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">결제 완료!</h1>
        <p className="text-gray-300 mb-8">
          DF717 프로그램 구매가 완료되었습니다.<br />
          등록하신 이메일로 설치 안내가 발송됩니다.
        </p>
        <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600">
          <Link to="/ko/solution">홈으로 돌아가기</Link>
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
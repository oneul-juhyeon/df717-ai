import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PaymentFail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const message = searchParams.get('message') || '결제가 취소되었습니다.';

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">결제 실패</h1>
        <p className="text-gray-300 mb-8">{message}</p>
        <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600">
          <Link to="/ko/solution">다시 시도하기</Link>
        </Button>
      </div>
    </div>
  );
};

export default PaymentFail;
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';

const PaymentFailKo: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const errorCode = searchParams.get('code');
  const errorMessage = searchParams.get('message');
  const orderId = searchParams.get('orderId');

  return (
    <>
      <SEOHead
        title="결제 실패 | DF717"
        description="DF717 결제에 실패했습니다."
        lang="ko"
      />
      <div className="min-h-screen bg-muted flex items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-lg">
          <CardHeader className="text-center">
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-xl text-red-600">결제에 실패했습니다</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              {errorMessage || '결제 처리 중 오류가 발생했습니다.'}
            </p>
            
            {errorCode && (
              <div className="bg-muted/50 rounded-lg p-4 text-left">
                <p className="text-sm text-muted-foreground mb-1">오류 코드</p>
                <p className="font-mono text-sm">{errorCode}</p>
              </div>
            )}

            {orderId && (
              <div className="bg-muted/50 rounded-lg p-4 text-left">
                <p className="text-sm text-muted-foreground mb-1">주문번호</p>
                <p className="font-mono text-sm">{orderId}</p>
              </div>
            )}

            <div className="flex gap-3 pt-4">
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
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PaymentFailKo;

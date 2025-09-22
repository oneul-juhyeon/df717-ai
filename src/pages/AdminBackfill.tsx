import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const AdminBackfill: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleBackfill = async () => {
    setIsLoading(true);
    setResults([]);

    try {
      const { data, error } = await supabase.functions.invoke('backfill-user-accounts');

      if (error) {
        console.error('Backfill failed:', error);
        toast({
          title: "백필 실패",
          description: "백필 처리 중 오류가 발생했습니다.",
          variant: "destructive",
        });
        return;
      }

      console.log('Backfill results:', data);
      setResults(data.results || []);
      
      toast({
        title: "백필 완료",
        description: data.message,
      });

    } catch (error) {
      console.error('Backfill error:', error);
      toast({
        title: "백필 오류",
        description: "백필 요청 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>텔레그램 백필 복구</CardTitle>
          <CardDescription>
            텔레그램에 남은 10건의 계정 데이터를 데이터베이스에 복구합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleBackfill} 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? '복구 중...' : '텔레그램 데이터 복구 시작'}
          </Button>

          {results.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">복구 결과</h3>
              <div className="space-y-2">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      result.success 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-mono">{result.account_id}</span>
                      <span className={`text-sm ${
                        result.success ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {result.success ? '성공' : '실패'}
                      </span>
                    </div>
                    {result.error && (
                      <p className="text-sm text-red-600 mt-1">{result.error}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBackfill;
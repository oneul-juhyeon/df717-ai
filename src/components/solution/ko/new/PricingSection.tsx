import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onPurchaseClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onPurchaseClick }) => {
  const features = [
    'AI 기반 자동매매 시스템',
    'MetaTrader 4, 5 연동',
    '실시간 리스크 관리',
    '24/7 시스템 모니터링',
    '전문가 지원 (이메일/채팅)',
    '성과 분석 대시보드',
    '월간 성과 리포트',
    '1:1 전담 매니저',
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            가격 안내
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            합리적인 가격으로 프리미엄 AI 자동매매 서비스를 경험하세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <Card className="shadow-2xl border-2 border-primary relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
              추천
            </div>
            
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  DAP-Premium
                </h3>
                <p className="text-muted-foreground mb-6">
                  연간 구독
                </p>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">₩5,000,000</span>
                  <span className="text-muted-foreground">/년</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  12개월 할부 시 월 ₩416,667
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={onPurchaseClick}
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90"
              >
                구매하기
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                구매 후 즉시 서비스 이용 가능
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

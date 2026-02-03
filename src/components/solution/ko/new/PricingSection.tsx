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
    <section id="pricing" className="py-20 md:py-[120px] bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-4 leading-[1.2]">
            가격 안내
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-[640px] mx-auto leading-[1.6]">
            합리적인 가격으로 프리미엄 AI 자동매매 서비스를 경험하세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="max-w-[480px] mx-auto"
        >
          <Card className="shadow-2xl border-2 border-primary relative overflow-hidden rounded-2xl">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold rounded-bl-xl">
              추천
            </div>
            
            <CardContent className="p-8 lg:p-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-foreground mb-2 leading-[1.3]">
                  DAP-Premium
                </h3>
                <p className="text-muted-foreground mb-8 leading-[1.5]">
                  연간 구매
                </p>
                
                <div className="flex items-baseline justify-center gap-3 flex-wrap">
                  <span className="text-xl text-muted-foreground line-through">₩8,000,000</span>
                  <span className="text-[44px] md:text-[52px] font-bold text-foreground tracking-tight">₩5,000,000</span>
                  <span className="text-muted-foreground text-base">/년</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-[1.5]">
                  12개월 할부 시 월 ₩416,667
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-base leading-[1.5]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={onPurchaseClick}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 rounded-lg"
              >
                구매하기
              </Button>

              <p className="text-sm text-center text-muted-foreground mt-5 leading-[1.5]">
                구매 후 즉시 서비스 이용 가능
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

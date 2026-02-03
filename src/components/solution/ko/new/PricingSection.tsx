import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type PlanType = 'monthly' | 'yearly';

interface PricingSectionProps {
  onPurchaseClick: (planType: PlanType) => void;
}

const plans = {
  monthly: {
    label: '월간 결제',
    price: 500000,
    displayPrice: '₩500,000',
    period: '/월',
    description: '매월 자동 결제',
    badge: null,
    highlight: false,
  },
  yearly: {
    label: '연간 결제',
    price: 5000000,
    displayPrice: '₩416,667',
    period: '/월',
    description: '12개월 할부 시',
    badge: '추천',
    highlight: true,
  },
};

export const PricingSection: React.FC<PricingSectionProps> = ({ onPurchaseClick }) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('yearly');

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

        {/* Plan Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex rounded-full bg-muted p-1.5">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                selectedPlan === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              월간 결제
            </button>
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 relative',
                selectedPlan === 'yearly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              연간 결제
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                37% 할인
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="max-w-[480px] mx-auto"
        >
          <Card className={cn(
            "shadow-2xl relative overflow-hidden rounded-2xl transition-all duration-300",
            selectedPlan === 'yearly' ? 'border-2 border-primary' : 'border border-border'
          )}>
            {/* Badge */}
            {plans[selectedPlan].badge && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold rounded-bl-xl">
                {plans[selectedPlan].badge}
              </div>
            )}
            
            <CardContent className="p-8 lg:p-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-foreground mb-2 leading-[1.3]">
                  DAP-Premium
                </h3>
                <p className="text-muted-foreground mb-8 leading-[1.5]">
                  {plans[selectedPlan].label}
                </p>
                
                <div className="flex flex-col items-center">
                  {selectedPlan === 'yearly' ? (
                    <span className="text-lg text-muted-foreground line-through mb-2">₩8,000,000</span>
                  ) : (
                    <span className="text-lg text-muted-foreground line-through mb-2">₩800,000</span>
                  )}
                  <div className="flex items-baseline gap-3">
                    <span className="text-[32px] md:text-[40px] font-bold text-primary">37%</span>
                    <span className="text-[44px] md:text-[52px] font-bold text-foreground tracking-tight">
                      {plans[selectedPlan].displayPrice}
                    </span>
                    <span className="text-muted-foreground text-base">{plans[selectedPlan].period}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-[1.5]">
                  {plans[selectedPlan].description}
                </p>
                {selectedPlan === 'monthly' && (
                  <p className="text-xs text-primary mt-2">
                    * 카드 등록 후 매월 자동 결제됩니다
                  </p>
                )}
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
                onClick={() => onPurchaseClick(selectedPlan)}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 rounded-lg"
              >
                {selectedPlan === 'monthly' ? '월간 구독 시작하기' : '연간 구매하기'}
              </Button>

              <p className="text-sm text-center text-muted-foreground mt-5 leading-[1.5]">
                {selectedPlan === 'monthly' 
                  ? '언제든지 구독 해지 가능' 
                  : '구매 후 즉시 서비스 이용 가능'}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Service Details Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mt-12 max-w-[900px] mx-auto"
        >
          <Card className="shadow-lg border-0 bg-muted/50">
            <CardContent className="p-8 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-6 leading-[1.3]">
                서비스 제공기간
              </h4>
              <ul className="space-y-3 inline-block text-left">
                <li className="flex items-center gap-3 text-muted-foreground leading-[1.6]">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>구매 즉시 이용 가능</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground leading-[1.6]">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>월간: 1개월 / 연간: 12개월</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground leading-[1.6]">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>자동 갱신 (해지 가능)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-muted/50">
            <CardContent className="p-8 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-6 leading-[1.3]">
                포함 사항
              </h4>
              <ul className="space-y-3 inline-block text-left">
                <li className="flex items-center gap-3 text-muted-foreground leading-[1.6]">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>프리미엄 AI 매매 알고리즘</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground leading-[1.6]">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>무제한 거래 실행</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground leading-[1.6]">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>실시간 알림 서비스</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground leading-[1.6]">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>월간 성과 리포트</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground leading-[1.6]">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>1:1 전담 매니저 배정</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

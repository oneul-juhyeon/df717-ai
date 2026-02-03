import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Shield, Clock, Zap, BarChart3, Users } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'AI 기반 투자 전략',
      description: '머신러닝 알고리즘이 시장 패턴을 분석하여 최적의 매매 시점을 포착합니다.'
    },
    {
      icon: Shield,
      title: '리스크 관리',
      description: '자동 손절매, 이익실현 기능으로 안전한 투자 환경을 제공합니다.'
    },
    {
      icon: Clock,
      title: '24시간 자동매매',
      description: '시장이 열려있는 동안 쉬지 않고 최적의 기회를 포착합니다.'
    },
    {
      icon: Zap,
      title: '빠른 체결 속도',
      description: '밀리초 단위의 빠른 주문 실행으로 슬리피지를 최소화합니다.'
    },
    {
      icon: BarChart3,
      title: '실시간 모니터링',
      description: '대시보드에서 실시간으로 포지션과 수익률을 확인할 수 있습니다.'
    },
    {
      icon: Users,
      title: '전문가 지원',
      description: '경험 많은 트레이더와 기술팀이 항상 지원합니다.'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-[120px] bg-muted/30">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-4 leading-[1.2]">
            주요 기능
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-[640px] mx-auto leading-[1.6]">
            DF717만의 차별화된 기술력으로 안정적인 수익을 추구합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full shadow-md border-0 hover:shadow-xl transition-shadow duration-300 bg-background">
                <CardContent className="p-8 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-[1.3]">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-[1.6] flex-1">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

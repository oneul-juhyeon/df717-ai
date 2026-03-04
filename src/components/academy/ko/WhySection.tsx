import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, ShieldCheck, Users } from 'lucide-react';

const cards = [
  {
    icon: Brain,
    title: '원리 중심 교육',
    description: '단순 매매 기법이 아닌 시장의 구조와 원리를 이해하여 스스로 판단할 수 있는 트레이더로 성장합니다.',
  },
  {
    icon: ShieldCheck,
    title: '리스크 관리 우선',
    description: '수익보다 중요한 것은 자산을 지키는 것. 체계적인 리스크 관리 전략을 핵심으로 가르칩니다.',
  },
  {
    icon: Users,
    title: '1:1 맞춤 멘토링',
    description: '수강생 개개인의 수준과 목표에 맞춘 1:1 멘토링으로 실질적인 성장을 이끕니다.',
  },
];

export const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-background">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            왜 DF 트레이딩 아카데미인가?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            검증된 전문가의 체계적인 교육으로, 지속 가능한 트레이딩 역량을 갖추세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <card.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

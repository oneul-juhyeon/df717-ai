import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, ShieldCheck, Handshake } from 'lucide-react';

const cards = [
  {
    icon: BarChart3,
    title: '원리 중심 교육',
    description: '프로그램 사용법이 아닌, 금융 시장과 가격 움직임의 본질적 구조를 가르칩니다.',
  },
  {
    icon: ShieldCheck,
    title: '리스크 관리 우선',
    description: '수익보다 손실을 먼저 제어하는 법. 장기 생존하는 트레이더의 핵심 역량입니다.',
  },
  {
    icon: Handshake,
    title: '1:1 멘토링 지원',
    description: '강사와 수강생이 직접 소통하며, 3개월간 개인 맞춤 피드백을 받습니다.',
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
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            왜 DF 트레이딩 아카데미인가?
          </h2>
          <div className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed space-y-4">
            <p>
              많은 사람들이 트레이딩을 시작할 때 특정 프로그램이나 신호에 의존해
              수익을 얻는 방법부터 찾습니다.
            </p>
            <p>
              하지만 시장의 원리를 이해하지 못한 채 결과만 따라가는 방식은
              장기적으로 안정적인 트레이딩 역량을 갖추기 어렵습니다.
            </p>
            <p className="text-foreground font-semibold">
              DF 트레이딩 아카데미는 다릅니다.
            </p>
          </div>
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

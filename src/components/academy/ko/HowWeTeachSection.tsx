import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, MapPin, Video, MessageCircle } from 'lucide-react';

const points = [
  { icon: MapPin, text: '대면 교육 — 서울 강남 교육센터에서 직접 만나 실습 중심 수업' },
  { icon: Video, text: '화상 교육 — 지방·해외 거주자를 위한 1:1 화상 수업 지원' },
  { icon: Monitor, text: '실시간 차트 실습 — 이론과 실전을 동시에 경험하는 라이브 트레이딩' },
  { icon: MessageCircle, text: '수강 후 지속 케어 — 수료 후에도 질의응답 및 멘토링 지원' },
];

export const HowWeTeachSection: React.FC = () => {
  return (
    <section id="how" className="py-20 md:py-28 bg-background">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              어떻게 가르치나요?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              수강생의 환경과 수준에 맞춰 유연하게 교육 방식을 제공합니다.
            </p>
            <ul className="space-y-5">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground leading-relaxed">{point.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-border/50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-10 w-10 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">대면 + 화상</p>
                <p className="text-muted-foreground">수강생 맞춤형 교육 방식</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

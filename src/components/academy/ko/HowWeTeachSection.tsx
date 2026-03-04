import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Users, CheckCircle } from 'lucide-react';

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
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              단순 온라인 강의가 아닙니다
            </h2>
            <p className="text-primary font-medium text-lg mb-6">
              강사와 수강생이 직접 소통하는 교육 환경
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              DF 트레이딩 아카데미는 일방향 영상 시청 방식이 아닙니다.
              대면 교육과 화상 교육 방식으로 진행되며,
              강사가 수강생의 질문과 상황에 맞춰 직접 피드백합니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">대면 교육</span>
                  <span className="text-muted-foreground ml-2">— 직접 만나 집중적으로 학습</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">화상 교육</span>
                  <span className="text-muted-foreground ml-2">— 원격으로도 동일한 품질의 수업 제공</span>
                </div>
              </div>
            </div>
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
                <div className="flex justify-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Monitor className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">대면 + 화상</p>
                <p className="text-muted-foreground">강사와 직접 소통하는 교육</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

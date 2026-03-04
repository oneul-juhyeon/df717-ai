import React from 'react';
import { motion } from 'framer-motion';
import instructorImg from '@/assets/instructor-park.png';

const career = [
  '前 삼성증권 / 유안타증권 근무',
  '해외선물 실전 트레이딩 15년+',
  'CME, ICE 등 글로벌 거래소 파생상품 전문',
  '기술적 분석 및 리스크 관리 전문가',
  '다수의 개인/기관 투자자 교육 이력',
  'DF717 트레이딩 전략 자문',
  '트레이딩 심리 코칭 및 멘토링',
];

export const InstructorSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">강사 소개</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={instructorImg}
                alt="박주현 강사"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">박주현</h3>
            <p className="text-primary font-medium mb-6">수석 트레이딩 강사</p>
            <ul className="space-y-3">
              {career.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import instructorImg from '@/assets/instructor-park.png';

const career = [
  'AI 자동투자 핀테크 기업 (주)DF717 사업개발 총괄',
  '국내 최대규모 AI 커뮤니티 지피터스 운영진',
  '트릴리온 사업가 커뮤니티, AI 재테크 커뮤니티 운영',
  'AI로 누구나 쉽게 일하게 돕는 @make_it_2asy 채널 운영',
  'SK, 부산교육청 등 기업/기관 대상 AI 활용 강의 다수',
  '前 한국전력공사 9년 경력 (변전 자동화, AI 분야 사내 직무 마이스터)',
  '前 AI 자동화 쇼핑몰 리브제이 운영',
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
            <p className="text-primary font-medium mb-6">DF717 사업개발 총괄 · 트레이딩 강사</p>
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

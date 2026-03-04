import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const BottomCTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            첫 번째 수업이 트레이딩을 바라보는 시각을 바꿉니다.
          </p>
          <Button
            size="lg"
            className="text-base px-10 py-6 bg-primary hover:bg-primary/90"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            수강 신청하기
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen } from 'lucide-react';

export const AcademyHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="max-w-content mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
            DF 트레이딩 아카데미
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            트레이딩의 본질을 배우는
            <br />
            <span className="text-primary">가장 확실한 방법</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            단순한 기법이 아닌, 시장의 원리와 리스크 관리를 중심으로
            <br className="hidden md:block" />
            체계적인 트레이딩 교육을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              수강 신청하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-slate-500 text-white hover:bg-white/10"
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              커리큘럼 보기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

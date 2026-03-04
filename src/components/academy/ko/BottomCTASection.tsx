import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const KAKAO_CHANNEL = 'https://pf.kakao.com/_EAuxcn';

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
            트레이딩의 본질을 이해하는 것이 성공적인 투자의 첫 걸음입니다.
            <br className="hidden md:block" />
            DF 트레이딩 아카데미와 함께 시작하세요.
          </p>
          <Button
            size="lg"
            className="text-base px-10 py-6 bg-primary hover:bg-primary/90"
            onClick={() => window.open(KAKAO_CHANNEL, '_blank')}
          >
            무료 상담 신청하기
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

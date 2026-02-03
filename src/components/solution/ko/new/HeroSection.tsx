import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroImage from '@/assets/dap-premium-hero.png';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="DAP-Premium Hero" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-primary font-semibold mb-4 text-lg">
            DF717 AI 자동매매 솔루션
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            DAP-Premium
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-2 font-mono">
            DF717-FXAU-061-J0G
          </p>
          
          <p className="text-lg text-white/70 mb-8 max-w-xl">
            AI 기반 자동매매 시스템으로 24시간 시장을 모니터링하고, 
            최적의 투자 전략을 실행합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={onCTAClick}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold"
            >
              지금 시작하기
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              자세히 보기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

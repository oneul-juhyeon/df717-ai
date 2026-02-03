import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroImage from '@/assets/dap-premium-hero.png';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="DAP-Premium Hero" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[640px]"
        >
          <p className="text-primary font-semibold mb-4 text-base md:text-lg leading-relaxed tracking-wide">
            DF717 AI 자동매매 솔루션
          </p>
          
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold text-white mb-4 leading-[1.1] tracking-tight">
            DAP-Premium
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-3 font-mono tracking-wider">
            DF717-FXAU-061-J0G
          </p>
          
          <p className="text-base md:text-lg text-white/60 mb-10 max-w-[520px] leading-[1.6]">
            AI 기반 자동매매 시스템으로 24시간 시장을 모니터링하고, 
            최적의 투자 전략을 실행합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={onCTAClick}
              className="h-12 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
            >
              지금 시작하기
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-12 px-8 text-base font-semibold border-white/30 text-white hover:bg-white/10 rounded-lg"
            >
              자세히 보기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

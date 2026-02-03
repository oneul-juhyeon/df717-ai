import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroImage from '@/assets/df717-solution-banner.webp';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="DAP-Premium Hero" 
          className="w-full h-full object-cover object-right md:object-center"
        />
      </div>

      {/* Content - Left aligned like Microsoft */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[500px]"
        >
          <h1 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white mb-5 leading-[1.15] tracking-tight text-left">
            DF717 Program Solution
          </h1>
          
          <p className="text-base md:text-lg text-white/80 mb-8 leading-[1.7] max-w-[440px] text-left">
            AI 기반 자동매매 시스템으로 24시간 시장을 모니터링하고, 기관급 투자 전략을 실행하는 DAP-Premium을 소개합니다.
          </p>

          {/* Primary CTA Button */}
          <Button 
            onClick={onCTAClick}
            className="h-11 px-6 text-[15px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm mb-5"
          >
            DAP-Premium 살펴보기
          </Button>

          {/* Secondary Link */}
          <button 
            onClick={onCTAClick}
            className="flex items-center gap-1 text-white hover:underline text-[15px] font-medium transition-colors"
          >
            지금 구매하기
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import myfxbookImg from '@/assets/df717-myfxbook-9years-results.png';
import advancedStatsImg from '@/assets/df717-myfxbook-advanced-statistics.png';
import monthlyAnalyticsImg from '@/assets/df717-myfxbook-analytics-2025-9.png';
export const ProductSection: React.FC = () => {
  return <section id="product" className="py-20 md:py-[120px] bg-muted/30">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 24
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-4 leading-[1.2]">
            왜 DF717일까요?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-[640px] mx-auto leading-[1.6]">
            MyfxBook 인증된 8년간의 검증된 실적을 확인하세요.
          </p>
        </motion.div>

        {/* Section 1 - MyfxBook Results (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Side - Text Content */}
          <motion.div className="w-full lg:w-[40%] space-y-5" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <p className="text-sm uppercase tracking-wider text-primary font-semibold">
              검증된 실적
            </p>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              MyfxBook
            </h3>

            <p className="text-lg text-muted-foreground">
              8년간 <span className="text-primary font-semibold">+187% CAGR</span> (연복리 수익률)
            </p>

            <p className="text-sm text-muted-foreground">
              <span className="text-destructive">*</span>과거 실적이 미래 결과를 보장하지 않습니다.
            </p>

            <Button asChild variant="outline" className="mt-4 gap-2">
              <a href="https://df717.notion.site/df717-live-analytics" target="_blank" rel="noopener noreferrer">
                결과 보기
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div className="w-full lg:w-[60%]" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <img src={myfxbookImg} alt="MyfxBook 결과 - 9년간 +187% CAGR을 달성한 DF717 자동 트레이딩 성과" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>

        {/* Section 2 - Advanced Statistics (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mt-20">
          {/* Right Side - Text Content */}
          <motion.div className="w-full lg:w-[40%] space-y-5" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <p className="text-sm uppercase tracking-wider text-primary font-semibold">
              상세 지표
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">고급 통계</h3>

            <div className="text-lg text-muted-foreground space-y-1">
              <p><span className="text-primary font-semibold">620회</span> 거래</p>
              <p><span className="text-primary font-semibold">92%</span> 승률</p>
              <p><span className="text-primary font-semibold">40.09</span> PF</p>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="text-destructive">*</span>전략 효과성을 입증하는 상세 성과 지표
            </p>
          </motion.div>

          {/* Left Side - Image */}
          <motion.div className="w-full lg:w-[60%]" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <img src={advancedStatsImg} alt="MyfxBook 고급 통계 - 620회 거래에서 92% 승률을 보여주는 상세 거래 지표" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>

        {/* Section 3 - Monthly Analytics (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-20">
          {/* Left Side - Text Content */}
          <motion.div className="w-full lg:w-[40%] space-y-5" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <p className="text-sm uppercase tracking-wider text-primary font-semibold">
              성과 추적
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">실시간 운용 성과</h3>

            <div className="text-lg text-muted-foreground space-y-1">
              <p>4주간 수익률 <span className="text-primary font-semibold">30.94%</span></p>
              <p>주간 평균 수익률 <span className="text-primary font-semibold">7.61%</span></p>
              <p>최대 낙폭(Max DD) <span className="text-primary font-semibold">3.06%</span></p>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="text-destructive">*</span>2025년 11월 17일 ~ 12월 12일 기준
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div className="w-full lg:w-[60%]" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <img src={monthlyAnalyticsImg} alt="MyfxBook 월간 분석 - 2025년 9월 25.27% 월간 수익과 과거 성과를 보여주는 차트" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

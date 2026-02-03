import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import myfxbookImg from "@/assets/df717-myfxbook-9years-results.png";
import advancedStatsImg from "@/assets/df717-myfxbook-advanced-statistics.png";
import monthlyAnalyticsImg from "@/assets/df717-myfxbook-analytics-2025-9.png";

const SolutionResultsKo: React.FC = () => {
  return (
    <section id="results-section" className="w-full bg-muted/30 py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
            검증된 실적
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            MyfxBook 인증 성과
          </h2>
        </motion.div>

        {/* Section 1 - MyfxBook Results (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Side - Text Content */}
          <motion.div
            className="w-full lg:w-[40%] space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              MyfxBook
            </h3>

            <p className="text-lg text-muted-foreground">
              8년간 <span className="text-primary font-semibold">+187% CAGR</span> (연복리 수익률)
            </p>

            <p className="text-sm text-muted-foreground">
              <span className="text-destructive">*</span>과거 실적이 미래 결과를 보장하지 않습니다.
            </p>

            <Button
              asChild
              variant="outline"
              className="mt-4 gap-2"
            >
              <a
                href="https://df717.notion.site/df717-monitoring-accounts?source"
                target="_blank"
                rel="noopener noreferrer"
              >
                결과 보기
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <img
                src={myfxbookImg}
                alt="MyfxBook 결과 - 9년간 +187% CAGR을 달성한 DF717 자동 트레이딩 성과"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 2 - Advanced Statistics (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mt-20">
          {/* Right Side - Text Content */}
          <motion.div
            className="w-full lg:w-[40%] space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-wider text-primary font-semibold">
              상세 지표
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              고급 통계
            </h3>

            <p className="text-lg text-muted-foreground">
              <span className="text-primary font-semibold">620회</span> 거래, 
              <span className="text-primary font-semibold"> 92%</span> 승률, 
              <span className="text-primary font-semibold"> 40.09</span> 수익 팩터
            </p>

            <p className="text-sm text-muted-foreground">
              <span className="text-destructive">*</span>전략 효과성을 입증하는 상세 성과 지표
            </p>
          </motion.div>

          {/* Left Side - Image */}
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <img
                src={advancedStatsImg}
                alt="MyfxBook 고급 통계 - 620회 거래에서 92% 승률을 보여주는 상세 거래 지표"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 3 - Monthly Analytics (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-20">
          {/* Left Side - Text Content */}
          <motion.div
            className="w-full lg:w-[40%] space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-wider text-primary font-semibold">
              성과 추적
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              월간 분석
            </h3>

            <p className="text-lg text-muted-foreground">
              2025년 9월 <span className="text-primary font-semibold">25.27%</span> 수익
            </p>

            <p className="text-sm text-muted-foreground">
              <span className="text-destructive">*</span>연도별 월간 성과 추적
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <img
                src={monthlyAnalyticsImg}
                alt="MyfxBook 월간 분석 - 2025년 9월 25.27% 월간 수익과 과거 성과를 보여주는 차트"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionResultsKo;
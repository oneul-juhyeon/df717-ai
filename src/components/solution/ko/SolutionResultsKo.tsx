import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import myfxbookImg from "@/assets/df717-myfxbook-9years-results.png";
import advancedStatsImg from "@/assets/df717-myfxbook-advanced-statistics.png";
import monthlyAnalyticsImg from "@/assets/df717-myfxbook-analytics-2025-9.png";
const SolutionResultsKo: React.FC = () => {
  return <section id="results-section" className="w-full bg-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <motion.div className="max-w-7xl mx-auto" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Text Content (40%) */}
          <motion.div className="w-full lg:w-[40%] space-y-6" initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">RESULTS</p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              MyfxBook
            </h2>

            <p className="text-xl text-gray-300 md:text-xl">8년간 +187% CAGR (연복리 수익률)</p>

            <p className="text-sm text-gray-400">
              <span className="text-red-500">*</span>과거 실적이 미래 결과를 보장하지 않습니다.
            </p>

            <motion.a href="https://df717.notion.site/df717-monitoring-accounts?source" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 group" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }}>
              결과 보기
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Right Side - Image (60%) */}
          <motion.div className="w-full lg:w-[60%]" initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:shadow-[0_0_70px_rgba(6,182,212,0.5)] transition-all duration-500">
              <img src={myfxbookImg} alt="MyfxBook 결과 - 9년간 +187% CAGR을 달성한 DF717 자동 트레이딩 성과" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>

        {/* Section 2 - Advanced Statistics (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 mt-24">
          {/* Right Side - Text Content */}
          <motion.div
            className="w-full lg:w-[40%] space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              상세 지표
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              고급 통계
            </h2>

            <p className="text-xl md:text-2xl text-gray-300">
              620회 거래, 92% 승률, 40.09 수익 팩터
            </p>

            <p className="text-sm text-gray-400">
              <span className="text-red-500">*</span>전략 효과성을 입증하는 상세 성과 지표
            </p>
          </motion.div>

          {/* Left Side - Image */}
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:shadow-[0_0_70px_rgba(6,182,212,0.5)] transition-all duration-500">
              <img
                src={advancedStatsImg}
                alt="MyfxBook 고급 통계 - 620회 거래에서 92% 승률을 보여주는 상세 거래 지표"
                className="w-full h-auto object-contain"
                loading="lazy" decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 3 - Monthly Analytics (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-24">
          {/* Left Side - Text Content */}
          <motion.div
            className="w-full lg:w-[40%] space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              성과 추적
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              월간 분석
            </h2>

            <p className="text-xl md:text-2xl text-gray-300">
              2025년 9월 25.27% 수익
            </p>

            <p className="text-sm text-gray-400">
              <span className="text-red-500">*</span>연도별 월간 성과 추적
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:shadow-[0_0_70px_rgba(6,182,212,0.5)] transition-all duration-500">
              <img
                src={monthlyAnalyticsImg}
                alt="MyfxBook 월간 분석 - 2025년 9월 25.27% 월간 수익과 과거 성과를 보여주는 차트"
                className="w-full h-auto object-contain"
                loading="lazy" decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>;
};
export default SolutionResultsKo;
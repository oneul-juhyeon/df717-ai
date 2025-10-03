import React from "react";
import { motion } from "framer-motion";
import { Brain, TrendingUp, Shield, CheckCircle, FileSearch, Users } from "lucide-react";
const features = [{
  icon: Brain,
  title: "AI 엔진 HANNAH",
  description: "실시간으로 시장 데이터를 분석하고 최적화된 전략을 실행하는 고급 AI 기반 트레이딩 엔진입니다."
}, {
  icon: TrendingUp,
  title: "20년 이상의 백테스팅 데이터",
  description: "광범위한 과거 데이터 분석을 통해 신뢰할 수 있는 성능을 보장하는 검증된 실적입니다."
}, {
  icon: Shield,
  title: "실시간 모니터링 및 보안",
  description: "투자를 보호하는 엔터프라이즈급 보안 프로토콜과 함께 24시간 시스템 모니터링을 제공합니다."
}, {
  icon: CheckCircle,
  title: "검증된 시스템 안정성",
  description: "모든 시장 상황에서 일관된 가동 시간과 안정적인 성능을 제공하는 실전 검증된 인프라입니다."
}, {
  icon: FileSearch,
  title: "독자적인 연구 방법론",
  description: "수년간의 금융 시장 분석을 통해 개발된 고유한 정량적 연구 접근 방식입니다."
}, {
  icon: Users,
  title: "최고 수준의 연구 인재",
  description: "트레이딩 알고리즘을 지속적으로 개선하는 전문 퀀트 및 AI 연구원 팀입니다."
}];
const SolutionFeaturesKo: React.FC = () => {
  return <section className="w-full bg-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <motion.div className="max-w-7xl mx-auto" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }}>
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-4xl md:text-5xl font-bold text-white text-center mb-16 lg:text-5xl">왜 DF717을 선택해야 할까요?</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={feature.title} className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
        }}>
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>)}
        </div>
      </motion.div>
    </section>;
};
export default SolutionFeaturesKo;
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, UserCheck, PlayCircle, Calendar, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "상담 신청",
    description: "아래 상담 신청 양식을 작성해주세요",
  },
  {
    number: 2,
    icon: UserCheck,
    title: "담당자 배정",
    description: "전담 매니저가 배정됩니다",
  },
  {
    number: 3,
    icon: PlayCircle,
    title: "무료 상담 및 체험",
    description: "전문가의 안내로 시스템을 체험하세요",
  },
  {
    number: 4,
    icon: Calendar,
    title: "설치 스케줄 예약",
    description: "원하시는 설치 시간을 예약하세요",
  },
  {
    number: 5,
    icon: Rocket,
    title: "자동투자 시작",
    description: "자동 트레이딩 여정을 시작하세요",
  },
];

const SolutionStepsKo: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black to-gray-900 py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          시작 방법
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          간단한 5단계로 시작하세요
        </motion.p>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 via-cyan-500/50 to-cyan-500/20 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/60 transition-all duration-300 h-full flex flex-col items-center text-center group hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  {/* Step Number */}
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rotate-45 border-t-2 border-r-2 border-cyan-500/60" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionStepsKo;

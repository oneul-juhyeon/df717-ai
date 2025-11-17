import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Shield, Award } from 'lucide-react';
import advancedStatsImg from '@/assets/df717-myfxbook-advanced-statistics.png';

export const ProofSectionKo: React.FC = () => {
  const stats = [
    { icon: DollarSign, label: '총 실현 이익', value: '24,890,348원', period: '2025년 2-9월' },
    { icon: TrendingUp, label: '월 평균 수익', value: '310만원', period: '260~510만원' },
    { icon: Award, label: '일 평균 수익', value: '약 10만원', period: '실계좌 검증' },
    { icon: Shield, label: '누적 수익률', value: '+3,438%', period: '8.6년 운용' }
  ];

  return (
    <section className="w-full bg-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            숫자로 증명하는 실적
          </h2>
          <p className="text-xl text-gray-300">
            8.6년간의 실제 거래 데이터
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-all duration-300"
            >
              <stat.icon className="w-10 h-10 text-purple-400 mb-4" />
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.period}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            MyFxBook 8.6년 장기 검증
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
            <div>
              <p className="text-gray-400 mb-2">누적 수익률</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                +3,438%
              </p>
              <p className="text-sm text-gray-500 mt-1">원금 34배</p>
            </div>
            <div>
              <p className="text-gray-400 mb-2">월 평균 수익률</p>
              <p className="text-4xl font-bold text-white">7.7%</p>
            </div>
            <div>
              <p className="text-gray-400 mb-2">승률</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                94.26%
              </p>
            </div>
          </div>
          <img
            src={advancedStatsImg}
            alt="MyFxBook Advanced Statistics"
            className="w-full rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-lg">
            ⚠️ 과거 수익률은 미래 수익을 보장하지 않습니다
          </p>
        </motion.div>
      </div>
    </section>
  );
};
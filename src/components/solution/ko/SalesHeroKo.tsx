import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

export const SalesHeroKo: React.FC = () => {
  const scrollToPurchase = () => {
    const element = document.getElementById('purchase-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px] flex items-center">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            허리 휘는 직장생활 하면서<br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              차트 보며 밤잠 설치고 계신가요?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            이제 AI가 당신 대신<br />
            <span className="text-white font-semibold">24시간 글로벌 시장에서 돈을 벌어옵니다.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12 text-left">
            {[
              '복잡한 차트 공부 없이',
              '위험한 감정 거래 없이',
              '하루 커피 한 잔 값(7,671원)으로',
              '8.6년 실계좌 검증 완료'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 bg-[#1a1a1a] p-4 rounded-lg border border-gray-800"
              >
                <Check className="text-green-500 flex-shrink-0" />
                <span className="text-white">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={scrollToPurchase}
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              지금 시작하기
              <ArrowRight className="ml-2" />
            </Button>

            <p className="text-gray-400 mt-6">
              💼 지금 이 순간에도 프로그램은 일하고 있습니다
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse delay-700" />
    </section>
  );
};
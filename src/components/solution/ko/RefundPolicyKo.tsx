import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, XCircle, Mail } from 'lucide-react';

export const RefundPolicyKo: React.FC = () => {
  return (
    <section className="w-full bg-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            환불 및 취소 정책
          </h2>
          <p className="text-xl text-gray-300">
            투명하고 공정한 환불 정책
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] border border-green-500/30 rounded-lg p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-white">환불 가능 조건</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong className="text-white">프로그램 미설치 시:</strong> 결제 후 7일 이내 100% 환불</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong className="text-white">2개월 무수익 보장:</strong> 프로그램 실행 후 2개월간 수익 미발생 시 100% 환불</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] border border-red-500/30 rounded-lg p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <XCircle className="text-red-500 flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-white">환불 불가 조건</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>프로그램 다운로드 및 설치 완료 후 7일 경과 시</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>고객 과실로 인한 계좌 손실 (권장 설정 미준수 등)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] border border-blue-500/30 rounded-lg p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <Mail className="text-blue-500 flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-white">환불 신청 방법</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">신청 채널</p>
                <ul className="space-y-2">
                  <li>• 이메일: <a href="mailto:refund@df717.ai" className="text-blue-400 hover:underline">refund@df717.ai</a></li>
                  <li>• 카카오톡: <a href="https://pf.kakao.com/_EAuxcn" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@DF717</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">처리 기간</p>
                <p>신청 후 영업일 기준 7일 이내 처리</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" />
              <div className="text-gray-300">
                <p className="font-semibold text-white mb-2">중요 안내</p>
                <p>환불 신청 시 구매 시 등록한 이메일과 주문번호가 필요합니다. 구매 완료 메일을 보관해주세요.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
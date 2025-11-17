import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQSectionKo: React.FC = () => {
  const faqs = [
    {
      question: '정말 수익이 보장되나요?',
      answer: '과거 8.6년간의 실적은 검증되었으나, 금융시장의 특성상 미래 수익을 보장할 수는 없습니다. 다만, 2개월 무수익 시 100% 환불 정책을 통해 위험을 최소화했습니다.'
    },
    {
      question: '초보자도 사용할 수 있나요?',
      answer: '네, 가능합니다. 복잡한 차트 분석이나 투자 지식이 필요 없습니다. 프로그램 설치 후 1:1 지원을 통해 모든 설정을 도와드리며, 이후에는 완전 자동으로 운영됩니다.'
    },
    {
      question: '환불 정책이 어떻게 되나요?',
      answer: '프로그램 미설치 시 7일 이내 100% 환불 가능하며, 설치 후에도 2개월간 수익이 발생하지 않으면 전액 환불해드립니다. 자세한 내용은 하단 환불정책을 참고해주세요.'
    },
    {
      question: '계좌는 어디서 개설하나요?',
      answer: 'Vantage 또는 IC Markets 같은 Tier-1 글로벌 브로커에서 개설하시면 됩니다. 개설 방법과 절차는 구매 후 전담 매니저가 안내해드립니다.'
    },
    {
      question: '최소 투자금은 얼마인가요?',
      answer: '최소 투자 권장액은 500만원입니다. 프로그램은 위험 관리를 위해 계좌 잔고의 1~2% 범위 내에서 거래하도록 설계되어 있습니다.'
    },
    {
      question: '프로그램은 어떻게 작동하나요?',
      answer: '프로그램은 24시간 글로벌 시장을 모니터링하며, AI 알고리즘이 최적의 진입/청산 시점을 자동으로 판단합니다. 사용자는 결과만 확인하시면 됩니다.'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-black to-gray-900 py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-gray-300">
            궁금한 점을 확인하세요
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
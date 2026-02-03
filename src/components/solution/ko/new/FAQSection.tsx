import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: '서비스는 어떻게 시작하나요?',
      answer: '결제 완료 후 이메일로 상세한 설정 가이드를 보내드립니다. 가이드에 따라 MetaTrader 계정을 연동하면 즉시 AI 자동매매가 시작됩니다.'
    },
    {
      question: '최소 투자 금액이 있나요?',
      answer: '권장 최소 투자금은 $1,000입니다. 다만, 리스크 관리를 위해 $5,000 이상을 권장드립니다.'
    },
    {
      question: '수익률은 어느 정도인가요?',
      answer: '시장 상황에 따라 변동될 수 있으며, 과거 실적이 미래 수익을 보장하지 않습니다. 투자에는 원금 손실 위험이 있습니다.'
    },
    {
      question: '환불이 가능한가요?',
      answer: '네, 환불 정책에 따라 환불이 가능합니다. 자세한 내용은 아래 환불 정책을 참조해주세요.'
    },
    {
      question: '고객 지원은 어떻게 받나요?',
      answer: '이메일(contact@df717.ai) 또는 카카오톡 채널을 통해 1:1 상담이 가능합니다. 평일 09:00-18:00 운영됩니다.'
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            궁금한 점이 있으시면 언제든 문의해주세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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

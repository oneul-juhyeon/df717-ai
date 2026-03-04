import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: '트레이딩 경험이 전혀 없어도 수강 가능한가요?',
    a: '네, 가능합니다. 본 과정은 트레이딩 입문자부터 기초를 다시 다지고 싶은 분까지 모두를 대상으로 설계되었습니다.',
  },
  {
    q: '교육은 어디서, 어떻게 진행되나요?',
    a: '대면 교육과 화상 교육 방식으로 운영됩니다. 수강 신청 후 담당 강사와 일정 및 방식을 조율합니다.',
  },
  {
    q: '1:1 멘토링은 어떻게 진행되나요?',
    a: '수강 완료 후 3개월간 담당 강사와 1:1로 진행됩니다. 개인 트레이딩 상황에 맞춘 피드백과 질의응답을 제공합니다.',
  },
  {
    q: 'DF717 프로그램 무료 체험은 무엇인가요?',
    a: 'DF717의 AI 기반 자동 트레이딩 프로그램을 1개월간 무료로 사용해볼 수 있습니다. 교육 내용을 실제 프로그램에서 확인하며 학습 효과를 높일 수 있습니다.',
  },
  {
    q: '수강료 환불 정책은 어떻게 되나요?',
    a: '수강 시작 전 취소 시 전액 환불됩니다. 자세한 사항은 수강 신청 시 안내드립니다.',
  },
];

export const AcademyFAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">자주 묻는 질문</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline font-semibold text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

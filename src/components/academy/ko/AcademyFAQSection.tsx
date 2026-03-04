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
    q: '트레이딩 경험이 전혀 없는데 수강할 수 있나요?',
    a: '네, 기초부터 체계적으로 가르치기 때문에 경험이 없는 분도 충분히 수강 가능합니다. 커리큘럼 1단계부터 시장 구조와 기본 개념을 다룹니다.',
  },
  {
    q: '수업은 어떤 방식으로 진행되나요?',
    a: '서울 강남 교육센터에서 대면 수업 또는 화상(Zoom)으로 진행됩니다. 수강생의 거주 지역과 선호에 따라 자유롭게 선택할 수 있습니다.',
  },
  {
    q: '수강 기간은 어느 정도인가요?',
    a: '기본 과정은 약 4~6주이며, 수강생의 학습 속도와 일정에 따라 유연하게 조정됩니다. 1:1 수업이므로 개인 맞춤형 일정이 가능합니다.',
  },
  {
    q: '수료 후에도 질문할 수 있나요?',
    a: '물론입니다. 수료 후에도 카카오톡 채널을 통해 지속적인 질의응답과 멘토링을 지원합니다.',
  },
  {
    q: '환불 정책은 어떻게 되나요?',
    a: '수업 시작 전 전액 환불 가능하며, 수업 진행 후에는 잔여 횟수에 따라 비례 환불됩니다. 자세한 내용은 상담 시 안내드립니다.',
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

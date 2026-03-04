import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const curriculum = [
  {
    num: '01',
    title: '금융 시장과 가격 움직임의 구조 이해',
    content: '왜 가격이 움직이는지, 시장 참여자들의 심리와 수요-공급 원리를 학습합니다.',
  },
  {
    num: '02',
    title: '트레이딩에서 가장 중요한 리스크 관리 원리',
    content: '손실을 제어하는 포지션 사이징, 손절 전략, 위험 노출 관리법을 다룹니다.',
  },
  {
    num: '03',
    title: '자본 관리와 장기적인 수익 구조 설계',
    content: '단기 수익이 아닌, 지속 가능한 수익 구조를 만드는 자본 배분 전략을 배웁니다.',
  },
  {
    num: '04',
    title: '알고리즘 트레이딩의 개념과 전략적 사고 방식',
    content: 'DF717 알고리즘의 작동 원리와 자동화 트레이딩의 전략적 사고를 이해합니다.',
  },
  {
    num: '05',
    title: '실제 시장에서 검증된 트레이딩 노하우',
    content: '실전 사례와 데이터를 기반으로 검증된 전략과 판단 기준을 공유합니다.',
  },
];

export const CurriculumSection: React.FC = () => {
  return (
    <section id="curriculum" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">커리큘럼</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            금융 시장의 원리부터 실전 트레이딩까지, 단계별로 설계된 체계적인 교육 과정
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {curriculum.map((item) => (
              <AccordionItem
                key={item.num}
                value={item.num}
                className="bg-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      {item.num}
                    </span>
                    <span className="font-semibold text-foreground">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-13">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

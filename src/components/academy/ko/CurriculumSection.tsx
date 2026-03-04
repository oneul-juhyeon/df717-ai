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
    title: '트레이딩 기초와 시장 구조',
    content: '금융 시장의 기본 구조, 주요 상품(Forex, 지수, 원자재) 이해, 차트 읽기의 기초, 호가와 주문 유형 이해를 학습합니다.',
  },
  {
    num: '02',
    title: '기술적 분석과 패턴 인식',
    content: '캔들스틱 패턴, 지지/저항, 추세선, 주요 기술적 지표(이동평균, RSI, MACD) 활용법과 실전 차트 분석 훈련을 진행합니다.',
  },
  {
    num: '03',
    title: '리스크 관리 전략',
    content: '포지션 사이징, 손절/익절 설정, 리스크 대비 수익 비율(R:R), 자금 관리 원칙, 드로다운 관리 등 자산을 지키는 전략을 배웁니다.',
  },
  {
    num: '04',
    title: '매매 전략 수립과 백테스팅',
    content: '나만의 매매 전략 수립, 매매 일지 작성법, 전략 백테스팅 방법, 시뮬레이션 트레이딩을 통한 실전 감각을 익힙니다.',
  },
  {
    num: '05',
    title: '실전 트레이딩과 심리 관리',
    content: '실계좌 운용 가이드, 트레이딩 심리학, 감정 통제 기법, 지속적인 성과 분석과 전략 개선 방법을 다룹니다.',
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
            초보자부터 중급자까지, 단계별로 설계된 체계적인 교육 과정
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

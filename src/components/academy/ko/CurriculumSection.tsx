import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Lesson {
  num: number;
  title: string;
  workshop?: boolean;
}

interface Module {
  id: string;
  title: string;
  lessonCount: number;
  lessons: Lesson[];
}

const curriculum: Module[] = [
  {
    id: '01',
    title: '금융 시장과 가격 움직임의 구조 이해',
    lessonCount: 12,
    lessons: [
      { num: 1, title: '돈을 다루는 세 가지 방법' },
      { num: 2, title: '한국 주식의 한계와 글로벌 시장의 기회' },
      { num: 3, title: '개인투자자에게 외환 시장이 기회인 이유' },
      { num: 4, title: '4가지 글로벌 투자 방법 완벽 비교' },
      { num: 5, title: '나의 현재 자산 진단과 투자 목표 설정', workshop: true },
      { num: 6, title: 'CFD란 무엇인가: 차액거래계약의 구조' },
      { num: 7, title: '레버리지: 기회이자 위험' },
      { num: 8, title: '마진콜·강제청산·스왑 비용 완전 이해' },
      { num: 9, title: 'CFD 손익 계산 실전 마스터' },
      { num: 10, title: '주요 거래 상품과 Forex 필수 용어' },
      { num: 11, title: '시장 세션·경제 지표·브로커 선택' },
      { num: 12, title: 'CFD 손익 계산 + 브로커 비교 실습', workshop: true },
    ],
  },
  {
    id: '02',
    title: '자본 관리와 장기적인 수익 구조 설계 방법',
    lessonCount: 4,
    lessons: [
      { num: 13, title: '자본 배분 전략: 시드머니와 운용 비율' },
      { num: 14, title: '복리의 힘과 함정: 장기 수익 구조의 수학' },
      { num: 15, title: '수익 인출 전략: 언제, 얼마나 빼야 하는가' },
      { num: 16, title: '나의 6개월 운용 수익 계획 만들기', workshop: true },
    ],
  },
  {
    id: '03',
    title: '트레이딩에서 가장 중요한 리스크 관리 원리',
    lessonCount: 8,
    lessons: [
      { num: 17, title: '왜 수익보다 리스크 관리가 먼저인가' },
      { num: 18, title: '기대값(Edge): 트레이딩을 확률로 보기' },
      { num: 19, title: '손절(Stop Loss)의 원리와 올바른 설정법' },
      { num: 20, title: '익절(Take Profit)과 손익비 설계' },
      { num: 21, title: '포지션 사이징: 얼마나 진입할 것인가' },
      { num: 22, title: '드로다운 관리: 손실 구간을 버티는 법' },
      { num: 23, title: '트레이딩 심리: 감정이 계좌를 무너뜨리는 방식' },
      { num: 24, title: '나의 리스크 관리 룰 직접 설계하기', workshop: true },
    ],
  },
  {
    id: '04',
    title: '알고리즘 트레이딩의 개념과 전략적 사고 방식',
    lessonCount: 7,
    lessons: [
      { num: 25, title: '알고리즘 트레이딩이란 무엇인가' },
      { num: 26, title: '전략의 구조: 무엇이 좋은 알고리즘을 만드는가' },
      { num: 27, title: 'MyFXBook 완전 정복: 성과 지표 정확히 읽기' },
      { num: 28, title: '좋은 전략 vs 나쁜 전략: 실전 비교 분석' },
      { num: 29, title: '포트폴리오 분산: 전략을 조합하는 원리' },
      { num: 30, title: '자동화 수익 구조의 이해: 카피트레이딩·PAMM·MAM' },
      { num: 31, title: 'MyFXBook으로 전략 직접 평가하기', workshop: true },
    ],
  },
  {
    id: '05',
    title: '실제 시장에서 검증된 트레이딩 노하우',
    lessonCount: 5,
    lessons: [
      { num: 32, title: '계좌 개설 완전 가이드' },
      { num: 33, title: '카피트레이딩 화면 완전 정복' },
      { num: 34, title: '첫 카피 시작 전 반드시 확인할 것들' },
      { num: 35, title: '실전 데모 계좌 카피트레이딩 실습' },
      { num: 36, title: '나의 운용 계획서 완성 + 수료', workshop: true },
    ],
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
          <p className="text-muted-foreground text-sm mt-2">총 36강 · 5개 모듈</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {curriculum.map((mod) => (
              <AccordionItem
                key={mod.id}
                value={mod.id}
                className="bg-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      {mod.id}
                    </span>
                    <span className="font-semibold text-foreground flex-1 text-left">{mod.title}</span>
                    <span className="flex-shrink-0 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {mod.lessonCount}강
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-13">
                  <ul className="space-y-2">
                    {mod.lessons.map((lesson) => (
                      <li key={lesson.num} className="flex items-start gap-3 text-sm">
                        <span className="flex-shrink-0 w-6 text-right text-muted-foreground font-mono">
                          {lesson.num}.
                        </span>
                        <span className="text-foreground/80">
                          {lesson.title}
                          {lesson.workshop && (
                            <span className="ml-2 inline-block text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium">
                              워크숍
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

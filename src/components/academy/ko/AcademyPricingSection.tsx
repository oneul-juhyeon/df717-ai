import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink } from 'lucide-react';

const KAKAO_CHANNEL = 'https://pf.kakao.com/_EAuxcn';

const benefits = [
  '아카데미 전 과정 수강',
  'DF717 프로그램 1개월 무료 체험',
  '1:1 멘토링 3개월',
  { text: '사업자 마케팅 플랜', sub: '선택 사항 — 상담 시 안내' },
];

export const AcademyPricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">수강 패키지</h2>
          <p className="text-muted-foreground text-lg">
            투자 교육의 가치는 결과로 증명됩니다
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <Card className="border-primary/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60" />
            <CardHeader className="text-center pb-4 pt-8">
              <p className="text-sm font-medium text-primary mb-2">COMPLETE PACKAGE</p>
              <CardTitle className="text-2xl">DF 트레이딩 아카데미 수강권</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <div className="mb-8">
                <span className="text-5xl font-bold text-foreground">₩330,000</span>
                <p className="text-sm text-muted-foreground mt-2">VAT 포함 / 1회 결제</p>
              </div>

              <ul className="text-left space-y-3 mb-8">
                {benefits.map((b, i) => {
                  const isObj = typeof b === 'object';
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        {isObj ? (
                          <>
                            <span className="font-medium">{b.text}</span>
                            <span className="text-muted-foreground text-sm ml-1">({b.sub})</span>
                          </>
                        ) : (
                          b
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Button
                size="lg"
                className="w-full text-base py-6 bg-primary hover:bg-primary/90"
                onClick={() => window.open(KAKAO_CHANNEL, '_blank')}
              >
                수강 신청하기
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                카카오톡 채널을 통해 상담 후 수강 확정
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

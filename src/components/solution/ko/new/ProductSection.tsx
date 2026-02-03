import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Bot, Shield, LineChart, Headphones, RefreshCw, Monitor } from 'lucide-react';

export const ProductSection: React.FC = () => {
  const features = [
    { icon: Bot, text: 'AI 기반 자동매매 시스템' },
    { icon: Monitor, text: 'MetaTrader 4, 5 연동' },
    { icon: Shield, text: '실시간 리스크 관리' },
    { icon: RefreshCw, text: '24/7 시스템 모니터링' },
    { icon: Headphones, text: '전문가 지원 (이메일/채팅)' },
    { icon: LineChart, text: '성과 분석 대시보드' },
  ];

  return (
    <section id="product" className="py-20 md:py-[120px] bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-4 leading-[1.2]">
            상품 소개
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-[640px] mx-auto leading-[1.6]">
            DF717 AI 자동매매 프로그램 솔루션으로 스마트한 투자를 시작하세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Product Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full shadow-lg border-0 bg-card">
              <CardContent className="p-8 lg:p-10 h-full flex flex-col">
                <div className="mb-8">
                  <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                    연간 구독
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-[1.3]">
                    DF717 AI 자동매매 프로그램 솔루션
                  </h3>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[36px] md:text-[42px] font-bold text-foreground tracking-tight">₩5,000,000</span>
                    <span className="text-muted-foreground text-base">/년</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-[1.5]">
                    12개월 할부 시 월 ₩416,667
                  </p>
                </div>

                <div className="space-y-5 flex-1">
                  <h4 className="font-semibold text-foreground text-base">서비스 내용:</h4>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground text-base leading-[1.5]">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 h-full"
          >
            <Card className="shadow-lg border-0 bg-muted/50 flex-1">
              <CardContent className="p-8 lg:p-10 h-full">
                <h4 className="text-lg font-semibold text-foreground mb-6 leading-[1.3]">
                  서비스 제공기간
                </h4>
                <div className="space-y-4">
                  <p className="flex items-center gap-4 text-muted-foreground leading-[1.6]">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>구독 즉시 이용 가능</span>
                  </p>
                  <p className="flex items-center gap-4 text-muted-foreground leading-[1.6]">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>연간: 12개월 (최대 제공기간)</span>
                  </p>
                  <p className="flex items-center gap-4 text-muted-foreground leading-[1.6]">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>자동 갱신 (해지 가능)</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-muted/50 flex-1">
              <CardContent className="p-8 lg:p-10 h-full">
                <h4 className="text-lg font-semibold text-foreground mb-6 leading-[1.3]">
                  포함 사항
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="leading-[1.6]">• 프리미엄 AI 매매 알고리즘</li>
                  <li className="leading-[1.6]">• 무제한 거래 실행</li>
                  <li className="leading-[1.6]">• 실시간 알림 서비스</li>
                  <li className="leading-[1.6]">• 월간 성과 리포트</li>
                  <li className="leading-[1.6]">• 1:1 전담 매니저 배정</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
    <section id="product" className="py-20 md:py-32 bg-background">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            상품 소개
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DF717 AI 자동매매 프로그램 솔루션으로 스마트한 투자를 시작하세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0 bg-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    연간 구독
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    DF717 AI 자동매매 프로그램 솔루션
                  </h3>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">₩5,000,000</span>
                    <span className="text-muted-foreground">/년</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    12개월 할부 시 월 ₩416,667
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">서비스 내용:</h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="shadow-lg border-0 bg-muted/50">
              <CardContent className="p-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  서비스 제공기간
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    구독 즉시 이용 가능
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    연간: 12개월 (최대 제공기간)
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    자동 갱신 (해지 가능)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-muted/50">
              <CardContent className="p-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  포함 사항
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 프리미엄 AI 매매 알고리즘</li>
                  <li>• 무제한 거래 실행</li>
                  <li>• 실시간 알림 서비스</li>
                  <li>• 월간 성과 리포트</li>
                  <li>• 1:1 전담 매니저 배정</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

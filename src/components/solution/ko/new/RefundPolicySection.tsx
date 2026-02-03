import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const RefundPolicySection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            <AccordionItem value="refund-policy" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-5">
                📋 환불 정책 (필독)
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">제22조 (환불)</h4>
                    <p className="mb-4">
                      1. 회원은 회사에 환불을 요구할 수 있습니다. 환불은 회사가 안내하는 정책 및 방법에 따라 진행됩니다.
                    </p>
                  </div>

                  <div>
                    <p className="mb-2">2. 회사는 다음 각 호의 방식으로 환불을 진행합니다.</p>
                    
                    <div className="pl-4 space-y-4">
                      <div>
                        <p className="font-medium text-foreground mb-2">가. 정기 결제 회원:</p>
                        <p className="text-sm">
                          환불은 서비스 이용료 일수를 계산하고 일할 계산으로 진행됩니다. 
                          월 기준은 30일로 월 이용료를 30일로 나눈 금액을 환불합니다. 
                          예를 들어 남은 기간이 24시간이 주부터 15일까지는 남은 일 수에 대한 일할 계산으로 환불 처리됩니다. 
                          16일 이후 30일 이내 사용자는 환불이 불가능합니다.
                        </p>
                        <p className="text-sm mt-2">
                          일할 계산은 카드 수수료와 할인금을 포함한 결제 금액의 20% 금액을 제외한 금액에, 
                          남은 일 수에 대한 일할 계산을 공제 처리됩니다.
                        </p>
                        <p className="text-sm mt-2 bg-muted p-2 rounded font-mono">
                          계산 공식: ((전체금액*0.8/30)*남은 일수
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-foreground mb-2">나. 연간 결제 회원:</p>
                        <p className="text-sm">
                          연 기준은 12개월이고 전액 이용료는 전체 연간결제에 이용료를 12로 나누고 
                          하루라도 이용한 월은 제외하고 남은 금액을 환불합니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p>
                      3. 본 조의 환불 금액 기준은 연간 결제 회원이라 하더라도 정기결제 금액으로 계산 후 진행됩니다. 
                      따라서 환불 시점에 따라 환불금액이 존재하지 않는 경우도 있을 수 있습니다.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { Separator } from '@/components/ui/separator';

export const BusinessFooter: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-16 md:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 leading-[1.3]">DF717</h3>
            <p className="text-white/70 text-base leading-[1.6] max-w-[400px]">
              AI 기반 자동매매 솔루션으로 스마트한 투자를 실현합니다.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-base leading-[1.3]">문의</h4>
            <ul className="space-y-3 text-base text-white/70">
              <li className="leading-[1.5]">이메일: contact@df717.ai</li>
              <li className="leading-[1.5]">전화: 010-2475-7172</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 my-10" />

        {/* Business Information */}
        <div className="text-sm text-white/60 space-y-3">
          <h4 className="font-semibold text-white/80 mb-4 text-base leading-[1.3]">사업자 정보</h4>
          <p className="leading-[1.6]">상호명: 주식회사 디에프717 (DF717 Co. Ltd.)</p>
          <p className="leading-[1.6]">대표자명: 전다슬</p>
          <p className="leading-[1.6]">사업자등록번호: 359-81-02573</p>
          <p className="leading-[1.6]">사업장 주소: 서울특별시 강남구 학동로31길 12, 7층 732호(논현동, 벤쳐캐슬빌딩)</p>
          <p className="leading-[1.6]">대표전화: 010-2475-7172</p>
          <p className="leading-[1.6]">이메일: contact@df717.ai</p>
        </div>

        <Separator className="bg-white/20 my-10" />

        {/* Copyright */}
        <div className="text-center text-sm text-white/50">
          <p className="leading-[1.5]">Copyright © 2025 DF717. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Separator } from '@/components/ui/separator';

export const BusinessFooter: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">DF717</h3>
            <p className="text-white/70 text-sm">
              AI 기반 자동매매 솔루션으로 스마트한 투자를 실현합니다.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">문의</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>이메일: contact@df717.ai</li>
              <li>전화: 010-2475-7172</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 my-8" />

        {/* Business Information */}
        <div className="text-sm text-white/60 space-y-2">
          <h4 className="font-semibold text-white/80 mb-3">사업자 정보</h4>
          <p>상호명: 주식회사 디에프717 (DF717 Co. Ltd.)</p>
          <p>대표자명: 전다슬</p>
          <p>사업자등록번호: 359-81-02573</p>
          <p>사업장 주소: 서울특별시 강남구 학동로31길 12, 7층 732호(논현동, 벤쳐캐슬빌딩)</p>
          <p>대표전화: 010-2475-7172</p>
          <p>이메일: contact@df717.ai</p>
        </div>

        <Separator className="bg-white/20 my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-white/50">
          <p>Copyright © 2025 DF717. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

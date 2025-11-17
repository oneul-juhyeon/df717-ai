import React from 'react';
import { Building2, User, FileText, MapPin, Phone, Mail } from 'lucide-react';

export const BusinessInfoKo: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0a] border-t border-gray-800 py-12 px-6 md:px-10 lg:px-[154px]">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">사업자 정보</h3>
        
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <div className="flex items-start gap-3">
            <Building2 className="text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-500 mb-1">상호명</p>
              <p className="text-white font-semibold">(주)디에프717 / DF717 Inc.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <User className="text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-500 mb-1">대표자</p>
              <p className="text-white font-semibold">김영준</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileText className="text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-500 mb-1">사업자등록번호</p>
              <p className="text-white font-semibold">XXX-XX-XXXXX</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-500 mb-1">사업장 주소</p>
              <p className="text-white font-semibold">서울특별시 강남구</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-500 mb-1">고객센터</p>
              <p className="text-white font-semibold">1588-0717</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-500 mb-1">이메일</p>
              <p className="text-white font-semibold">
                <a href="mailto:contact@df717.ai" className="hover:text-purple-400 transition-colors">
                  contact@df717.ai
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-3">⚠️ 투자 위험 고지</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>* 본 페이지의 수익률은 과거 실적이며 미래 수익을 보장하지 않습니다.</li>
            <li>* CFD 거래는 고위험 투자로 원금 손실 가능성이 있습니다.</li>
            <li>* 투자 결정에 대한 책임은 투자자 본인에게 있습니다.</li>
            <li>* DF717은 투자자문업이 아니며, 본 페이지는 프로그램 소개 목적입니다.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { BarChart } from "lucide-react";

const IsaacComponent: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white">ISAAC</h2>
      <p className="text-xl text-gray-300 mb-8">
        아이작(ISAAC)은 디셈버앤컴퍼니의 AI 간편투자 엔진입니다. 고유의 연구 방법론을 적용한 AI와 머신러닝 기술 집약체입니다.
      </p>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-white">content-isaac</h3>
        <h4 className="text-xl font-semibold mb-6 text-blue-400">Intelligent Strategic<br/>Asset Allocation Core</h4>
        <p className="text-gray-300">Isaac Newton은 일상생활에서 우주를 움직이는 중요한 물리 법칙을 발견 했습니다. 금융시장에서도 IT 기술을 바탕으로 우리 곁의 수많은 데이터를 해석한다면 시장 전체의 움직임을 이해하고 보다 나은 투자 성과를 만들어 낼 수 있다는 철학을 담았습니다.</p>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-white">모델포트폴리오 산출</h3>
        <div className="bg-[#2d2d2d] border border-gray-700 p-6 rounded-lg">
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-3">
                <span className="text-blue-400">1</span>
              </div>
              종목 선정 모듈
            </h4>
            <p className="text-gray-300 pl-11">글로벌 시장 전체의 데이터를 바탕으로 AI/ML 기술을 접목하여 투자 종목을 선정합니다. 투자 유니버스를 대상으로 클러스터링 분석하고, 상승 가능성이 높은 대표 종목들을 선택합니다.</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                <span className="text-indigo-400">2</span>
              </div>
              비중 결정 모듈
            </h4>
            <p className="text-gray-300 pl-11">선정된 종목들을 대상으로 AI 및 금융공학 기술을 사용하여 투자 비중을 결정합니다. 위험지표 기반으로 학습된 비중 결정 모듈을 거쳐, 제한 조건 내에서 가장 안정적인 포트폴리오를 완성합니다.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                <span className="text-purple-400">3</span>
              </div>
              일별 MP 산출
            </h4>
            <p className="text-gray-300 pl-11">아이작은 변화하는 시장 상황에 대응하기 위해, 매일 MP를 산출합니다. 아이작의 실시간 MP를 기반으로, 신규 고객과 기존 고객 모두 자신의 투자성향에 맞는 포트폴리오를 제공 받습니다.</p>
          </div>
        </div>
        <div className="text-sm text-blue-400 mt-2">spec01</div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-white">매매 실행 및 모니터링</h3>
        <div className="bg-[#2d2d2d] border border-gray-700 p-6 rounded-lg">
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-3">
                <span className="text-blue-400">1</span>
              </div>
              자동 매매 모듈
            </h4>
            <p className="text-gray-300 pl-11">PREFACE와 아이작은 결정된 종목 및 비중에 대해 계좌별로 실시간 자동 매매합니다. 고객 간 주문 순서를 차별 없이 관리할 뿐 아니라, AI 기반으로 매매 타이밍을 학습하고 실행합니다.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                <span className="text-indigo-400">2</span>
              </div>
              실시간 모니터링
            </h4>
            <p className="text-gray-300 pl-11">계좌별 매매 상황을 실시간으로 모니터링하며, 발생할 수 있는 문제 상황에 대해 빠르게 대처합니다. 또한, 실시간 잔고 등 계좌 현황을 고객이 확인할 수 있도록 PC/모바일 등으로 정보를 전달합니다.</p>
          </div>
        </div>
        <div className="text-sm text-indigo-400 mt-2">spec02</div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-white">리스크관리</h3>
        <div className="bg-[#2d2d2d] border border-gray-700 p-6 rounded-lg">
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center mr-3">
                <span className="text-blue-400">1</span>
              </div>
              리스크 지표 점검
            </h4>
            <p className="text-gray-300 pl-11">고객 재산의 보호를 위해 리스크 지표에 대한 주기적인 점검을 실시합니다. 개별 상품 및 계좌들의 기존 리스크 지표 수치를 확인, 점검하는 작업과 추가 리스크 지표를 정의하고 발전시키는 연구가 진행됩니다.</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                <span className="text-indigo-400">2</span>
              </div>
              전략 운용 회의
            </h4>
            <p className="text-gray-300 pl-11">리스크관리위원회 등을 통해 각 자산 배분 유형들의 개별 운용 상황 및 이슈를 주기적으로 점검하고, 수익성 향상 및 리스크 관리 방향에 대한 고민합니다.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                <span className="text-purple-400">3</span>
              </div>
              자산 배분 엔진 고도화
            </h4>
            <p className="text-gray-300 pl-11">아이작 엔진과 PREFACE 플랫폼은 끊임없이 고도화되고 있습니다. 유수 인력을 통한 기술 개발 및 리서치를 통해, 더 좋은 자산 배분 운용을 위한 노력이 계속되고 있습니다.</p>
          </div>
        </div>
        <div className="text-sm text-purple-400 mt-2">spec03</div>
      </div>
    </div>
  );
};

export default IsaacComponent;


import React, { useState } from "react";
import CoreCompetence from "./CoreCompetence";
import Df717Component from "./Df717";
import HannahComponent from "./Hannah";

type Tab = {
  id: string;
  title: string;
  component: React.ReactNode;
  isH1?: boolean;
};

const ModernTechnologyTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("core");

  // 각 섹션에 대한 탭 정의 및 제목 레벨 정보 확인
  const tabSections: Tab[] = [
    { id: "core", title: "CORE COMPETENCE", component: <CoreCompetence /> },
    { id: "df717", title: "DF717", component: <Df717Component />, isH1: true },
    { id: "hannah", title: "HANNAH", component: <HannahComponent /> }
  ];

  // Tab 클릭 핸들러 - 직접 콘텐츠 전환
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full">
      {/* 고정된 탭 네비게이션 - 구분선 제거 */}
      <div className="sticky top-0 z-20 w-full mb-12 bg-black/50 backdrop-blur-sm py-5">
        <div className="flex justify-center space-x-2 md:space-x-8 max-w-4xl mx-auto">
          {tabSections.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative px-2 md:px-4 py-2 text-sm md:text-lg font-medium transition-all duration-300 ${
                activeTab === tab.id 
                ? "text-white font-bold" 
                : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.title}
              
              {activeTab === tab.id && (
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white">
                  <div className="absolute -top-[2px] left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 콘텐츠 영역 - 제목 태그를 렌더링하지 않도록 수정 */}
      <div className="mt-8">
        <div className="max-w-4xl mx-auto">
          {tabSections.map((tab) => {
            // 현재 활성화된 탭만 렌더링
            if (activeTab !== tab.id) return null;
            
            // 활성 탭의 경우, 탭 자체의 제목은 표시하지 않고 컴포넌트만 표시
            return (
              <div key={tab.id}>
                {tab.component}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModernTechnologyTabs;

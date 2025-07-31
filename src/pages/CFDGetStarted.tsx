import React from "react";
import CFDProductsSidebar from "@/components/cfd-safety/CFDProductsSidebar";
import Footer from "@/components/common/Footer";
import BaseHeader from "@/components/navigation/BaseHeader";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { getNavigationItems } from "@/components/navigation/navigationItems";
import ChatContainer from "@/components/cfd-getstarted/ChatContainer";
import { useChatStore } from "@/components/cfd-getstarted/chatStore";

const CFDGetStarted: React.FC = () => {
  const { showChat, setShowChat, initializeChat, resetChat } = useChatStore();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleStartChat = () => {
    setShowChat(true);
    initializeChat();
  };

  const handleBackToLanding = () => {
    setShowChat(false);
    resetChat();
  };

  return (
    <div className="w-full min-h-screen bg-black financial-product-layout flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        <BaseHeader 
          navigationItems={getNavigationItems()} 
          scrollToTop={scrollToTop} 
        />
        
        <div className="mt-8 mb-12 flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Left sidebar with CFD labels */}
            <CFDProductsSidebar />
            
            {/* Main content area */}
            <div className="w-full lg:ml-8 text-white">
              <div className="scrollbar-hidden">
                <Breadcrumbs />
                
                {showChat ? (
                  /* Chat Interface */
                  <ChatContainer onBack={handleBackToLanding} />
                ) : (
                  /* Hero Landing Section */
                  <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black rounded-lg p-8">
                    <div className="max-w-2xl mx-auto text-center space-y-8">
                      
                      {/* Logo Section */}
                      <div className="space-y-2 animate-fade-in">
                        <h1 className="text-4xl font-bold text-[#00B7FF]">DF717</h1>
                        <p className="text-sm text-gray-600 uppercase tracking-wider">AI & FINANCE</p>
                      </div>
                      
                      {/* Main Heading */}
                      <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <h2 className="text-5xl font-bold leading-tight">
                          Automate your Investment<br />
                          with <span className="text-[#00B7FF]">DF717</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                          전문 트레이더의 투자 전략을 AI가 24시간 자동으로 실행합니다
                        </p>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                        <button 
                          onClick={handleStartChat}
                          className="bg-[#00B7FF] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#0066CC] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          무료 체험 시작하기
                        </button>
                      </div>
                      
                      {/* Trust Indicators */}
                      <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#00B7FF]">8.3년</div>
                          <div className="text-sm text-gray-600">실계좌 검증</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#00B7FF]">65.9%</div>
                          <div className="text-sm text-gray-600">연평균 수익률</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#00B7FF]">15.8%</div>
                          <div className="text-sm text-gray-600">최대 손실</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CFDGetStarted;
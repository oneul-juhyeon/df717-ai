import React from "react";
import ChatContainer from "@/components/cfd-getstarted/ChatContainer";
import { useChatStore } from "@/components/cfd-getstarted/chatStore";

const CFDGetStarted: React.FC = () => {
  const { showChat, setShowChat, initializeChat, resetChat } = useChatStore();

  const handleStartChat = () => {
    setShowChat(true);
    initializeChat();
  };

  const handleBackToLanding = () => {
    setShowChat(false);
    resetChat();
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 app-layout">
      {showChat ? (
        /* Chat Interface - Full Screen App Style */
        <div className="min-h-screen flex items-center justify-center p-4">
          <ChatContainer onBack={handleBackToLanding} />
        </div>
      ) : (
        /* Hero Landing Section - App Style */
        <div className="min-h-screen flex flex-col">
          {/* Header with back button */}
          <div className="flex items-center justify-between p-6 lg:p-8">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">홈으로 돌아가기</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-12">
              
              {/* Logo Section */}
              <div className="space-y-3 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00B7FF] to-[#0066CC] rounded-3xl mb-4">
                  <span className="text-2xl font-bold text-white">DF</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">DF717</h1>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">AI & FINANCE</p>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                  Automate your Investment<br />
                  with <span className="bg-gradient-to-r from-[#00B7FF] to-[#0066CC] bg-clip-text text-transparent">DF717</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
                  전문 트레이더의 투자 전략을 AI가 24시간 자동으로 실행합니다
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <button 
                  onClick={handleStartChat}
                  className="bg-gradient-to-r from-[#00B7FF] to-[#0066CC] text-white px-12 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  무료 체험 시작하기
                </button>
                <p className="text-sm text-gray-500 mt-3">카드 정보 불필요 • 즉시 체험 가능</p>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 pt-16 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00B7FF] to-[#0066CC] bg-clip-text text-transparent">8.3년</div>
                  <div className="text-sm text-gray-500 font-medium mt-2">실계좌 검증</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00B7FF] to-[#0066CC] bg-clip-text text-transparent">65.9%</div>
                  <div className="text-sm text-gray-500 font-medium mt-2">연평균 수익률</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00B7FF] to-[#0066CC] bg-clip-text text-transparent">15.8%</div>
                  <div className="text-sm text-gray-500 font-medium mt-2">최대 손실</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CFDGetStarted;
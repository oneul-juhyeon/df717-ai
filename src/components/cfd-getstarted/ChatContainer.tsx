import React from "react";
import MessageList from "./MessageList";

interface ChatContainerProps {
  onBack: () => void;
  useChatStoreHook?: any;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  onBack,
  useChatStoreHook
}) => {
  const isKorean = window.location.pathname.includes('/ko/');
  
  const handleLanguageToggle = () => {
    if (isKorean) {
      window.location.href = '/get-started';
    } else {
      window.location.href = '/ko/get-started';
    }
  };

  return <div className="w-full h-screen flex flex-col bg-gray-50" style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Noto Sans KR", sans-serif'
  }}>
      {/* Enhanced header with better back button and mobile alignment */}
      <div className="px-4 py-4 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center flex-1 min-w-0">
            <button onClick={onBack} className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-95 -ml-2 flex-shrink-0" aria-label="뒤로 가기">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="ml-3 text-base font-semibold text-gray-800 leading-none flex items-center h-10" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              {isKorean ? '시작 가이드' : 'DF717 Start Guide'}
            </h1>
          </div>
          <button 
            onClick={handleLanguageToggle}
            className="px-4 h-10 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-full shadow-sm border border-gray-200 transition-all duration-200 active:scale-95 flex-shrink-0 flex items-center justify-center"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            aria-label={isKorean ? "Switch to English" : "한국어로 전환"}
          >
            {isKorean ? 'EN' : 'KO'}
          </button>
        </div>
      </div>
      
      {/* Messages Area - Full height with proper overflow */}
      <div className="flex-1 overflow-hidden">
        <MessageList useChatStore={useChatStoreHook} />
      </div>
    </div>;
};
export default ChatContainer;
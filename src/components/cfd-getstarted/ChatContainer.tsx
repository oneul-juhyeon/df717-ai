import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

interface ChatContainerProps {
  onBack: () => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ onBack }) => {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Chat Header - Mobile-first design */}
      <div className="bg-gradient-to-r from-[#00B7FF] to-[#0066CC] text-white p-4 flex items-center justify-between shadow-lg">
        <button 
          onClick={onBack}
          className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/10 active:scale-95"
          aria-label="뒤로 가기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-center flex-1">
          <h2 className="text-lg font-semibold">AI 자동투자 체험 도우미</h2>
          <div className="flex items-center justify-center space-x-2 mt-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs opacity-90">온라인</span>
          </div>
        </div>
        
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>
      
      {/* Messages Area - Full height with proper overflow */}
      <div className="flex-1 overflow-hidden">
        <MessageList />
      </div>
      
      {/* Input Area - Fixed at bottom */}
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
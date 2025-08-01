import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

interface ChatContainerProps {
  onBack: () => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-[440px] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[700px] flex flex-col border border-gray-100">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-[#00B7FF] to-[#0066CC] text-white p-5 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center flex-1">
          <h2 className="text-lg font-semibold">AI 자동투자 체험 도우미</h2>
          <div className="flex items-center justify-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs opacity-90">온라인</span>
          </div>
        </div>
        <div className="w-8"></div> {/* Spacer for centering */}
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 overflow-hidden">
        <MessageList />
      </div>
      
      {/* Input Area */}
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
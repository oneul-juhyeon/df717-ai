import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

interface ChatContainerProps {
  onBack: () => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ onBack }) => {
  return (
    <div className="max-w-[480px] mx-auto bg-white rounded-lg shadow-xl overflow-hidden min-h-[600px] flex flex-col">
      {/* Chat Header */}
      <div className="bg-[#00B7FF] text-white p-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-center flex-1">AI 자동투자 체험 도우미</h2>
        <div className="w-6"></div> {/* Spacer for centering */}
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
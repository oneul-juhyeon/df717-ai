import React from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

interface ChatContainerProps {
  onBack: () => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ onBack }) => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      {/* Simple back button - minimal design */}
      <div className="p-3 bg-white border-b border-gray-100">
        <button 
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800 transition-colors p-1 rounded-lg hover:bg-gray-100 active:scale-95"
          aria-label="뒤로 가기"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
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
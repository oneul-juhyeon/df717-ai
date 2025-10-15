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
  return <div className="w-full h-screen flex flex-col bg-gray-50" style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Noto Sans KR", sans-serif'
  }}>
      {/* Enhanced header with better back button and mobile alignment */}
      <div className="px-4 py-4 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center">
          <button onClick={onBack} className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-95 -ml-2 flex-shrink-0" aria-label="뒤로 가기">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="ml-3 text-lg font-medium text-gray-800 leading-6 word-break break-words flex-1 text-left font-din">DF717 시작 가이드</h1>
        </div>
      </div>
      
      {/* Messages Area - Full height with proper overflow */}
      <div className="flex-1 overflow-hidden">
        <MessageList useChatStore={useChatStoreHook} />
      </div>
    </div>;
};
export default ChatContainer;
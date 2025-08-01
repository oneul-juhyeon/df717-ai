import React, { useState, useCallback } from "react";
import { useChatStore } from "./chatStore";

const ChatInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addMessage } = useChatStore();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      addMessage({
        id: `user-${Date.now()}`,
        content: inputValue.trim(),
        sender: "user",
        type: "text",
        timestamp: new Date(),
        animate: false
      });
      
      setInputValue("");
    } finally {
      setIsSubmitting(false);
    }
  }, [inputValue, isSubmitting, addMessage]);

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메시지를 입력하세요..."
          disabled={isSubmitting}
          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00B7FF]/20 focus:border-[#00B7FF] transition-all text-base disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isSubmitting}
          className="px-6 py-3 bg-gradient-to-r from-[#00B7FF] to-[#0066CC] text-white rounded-2xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-base transform active:scale-95 flex items-center justify-center min-w-[70px]"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "전송"
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
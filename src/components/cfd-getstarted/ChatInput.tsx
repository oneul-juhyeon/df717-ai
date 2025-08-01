import React, { useState } from "react";
import { useChatStore } from "./chatStore";

const ChatInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { addMessage, currentStep } = useChatStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addMessage({
        id: Date.now().toString(),
        content: inputValue,
        sender: "user",
        type: "text",
        timestamp: new Date(),
        animate: false
      });
      setInputValue("");
    }
  };

  return (
    <div className="p-4 bg-gray-50 border-t border-gray-100">
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className="flex-1 px-5 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00B7FF]/20 focus:border-[#00B7FF] transition-all text-sm"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="px-6 py-3 bg-gradient-to-r from-[#00B7FF] to-[#0066CC] text-white rounded-2xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm transform hover:scale-105"
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
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
    <div className="p-4 border-t border-gray-200 bg-white">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B7FF] focus:border-transparent"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="px-6 py-2 bg-[#00B7FF] text-white rounded-full hover:bg-[#0066CC] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
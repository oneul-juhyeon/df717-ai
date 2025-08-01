import React, { useEffect } from "react";
import ChatContainer from "@/components/cfd-getstarted/ChatContainer";
import { useChatStore } from "@/components/cfd-getstarted/chatStore";

const CFDGetStarted: React.FC = () => {
  const { initializeChat } = useChatStore();

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 app-layout">
      <div className="min-h-screen flex items-center justify-center p-4">
        <ChatContainer onBack={handleBackToHome} />
      </div>
    </div>
  );
};

export default CFDGetStarted;
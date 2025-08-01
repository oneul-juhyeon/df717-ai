import React, { useEffect } from "react";
import ChatContainer from "@/components/cfd-getstarted/ChatContainer";
import { useChatStore } from "@/components/cfd-getstarted/chatStore";

const GetStarted: React.FC = () => {
  const { initializeChat } = useChatStore();

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  return (
    <div className="w-full h-screen overflow-hidden">
      <ChatContainer onBack={handleBackToHome} />
    </div>
  );
};

export default GetStarted;
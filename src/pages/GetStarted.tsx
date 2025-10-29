import React, { useEffect } from "react";
import ChatContainer from "@/components/cfd-getstarted/ChatContainer";
import { useChatStore } from "@/components/cfd-getstarted/chatStore";
import SEOHead from "@/components/seo/SEOHead";

const GetStarted: React.FC = () => {
  const { initializeChat } = useChatStore();

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  return (
    <>
      <SEOHead
        title="Get Started - AI Investment Consultation & Trading Setup"
        description="Start your AI-powered investment journey with DF717. Get personalized consultation, account setup assistance, and begin automated trading with our advanced AI trading system."
        keywords="DF717, AI Investment, Get Started, Trading Setup, Investment Consultation, Automated Trading, AI Trading Platform, CFD Trading Setup"
        canonical="https://df717.ai/get-started"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Get Started with DF717 AI Investment",
          "description": "Start your AI-powered investment journey with personalized consultation and automated trading setup.",
          "url": "https://df717.ai/get-started"
        }}
      />
      <div className="w-full h-screen overflow-hidden">
        <ChatContainer onBack={handleBackToHome} useChatStoreHook={useChatStore} />
      </div>
    </>
  );
};

export default GetStarted;
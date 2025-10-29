import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import CFDTradingHeader from "@/components/cfd-trading/CFDTradingHeader";
import CFDTradingContent from "@/components/cfd-trading/CFDTradingContent";
import CFDProductsSidebar from "@/components/cfd-safety/CFDProductsSidebar";
import Footer from "@/components/common/Footer";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

const CFDTrading: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SEOHead
        title="CFD Trading Guide - Contracts for Difference | DF717"
        description="Comprehensive guide to CFD trading with DF717. Learn about leverage, risk management, and trading strategies for Forex, stocks, indices, and commodities."
        keywords="CFD 거래, 차액결제거래, CFD란, 레버리지, 증거금, 외환 거래, 주식 CFD, 지수 거래, 원자재 거래"
        canonical="https://df717.ai/cfd-trading"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Understanding CFD Trading",
          "description": "Complete guide to CFD trading mechanics, benefits, and strategies",
          "author": {
            "@type": "Organization",
            "name": "DF717"
          },
          "educationalLevel": "Beginner to Advanced"
        }}
      />
      <div className="w-full min-h-screen bg-black financial-product-layout flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        <CFDTradingHeader scrollToTop={scrollToTop} />
        
        <div className="mt-8 mb-12 flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Left sidebar with CFD labels */}
            <CFDProductsSidebar />
            
            {/* Main content area */}
            <div className="w-full lg:ml-8 text-white">
              <div className="scrollbar-hidden">
                <Breadcrumbs />
                <CFDTradingContent />
                <AxiSpaceXCallToAction />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
    </>
  );
};

export default CFDTrading;
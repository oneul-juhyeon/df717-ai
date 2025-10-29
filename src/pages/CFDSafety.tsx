import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import CFDSafetyHeader from "@/components/cfd-safety/CFDSafetyHeader";
import CFDSafetyContent from "@/components/cfd-safety/CFDSafetyContent";
import CFDProductsSidebar from "@/components/cfd-safety/CFDProductsSidebar";
import Footer from "@/components/common/Footer";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

const CFDSafety: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SEOHead
        title="CFD Safety - Secure Trading with DF717"
        description="Learn about CFD trading safety with DF717. Discover how to protect your capital with regulated brokers, proper risk management, and secure trading practices."
        keywords="CFD 안전, CFD 거래, 외환 안전, 브로커 선택, 리스크 관리, ICMarkets, Vantage, ASIC, FCA, 규제 브로커"
        canonical="https://df717.ai/cfd-safety"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "CFD Trading Safety Guide",
          "description": "Comprehensive guide to safe CFD trading practices and broker selection",
          "author": {
            "@type": "Organization",
            "name": "DF717"
          }
        }}
      />
      <div className="w-full min-h-screen bg-black financial-product-layout flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        <CFDSafetyHeader scrollToTop={scrollToTop} />
        
        <div className="mt-8 mb-12 flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Left sidebar with CFD labels */}
            <CFDProductsSidebar />
            
            {/* Main content area */}
            <div className="w-full lg:ml-8 text-white">
              <div className="scrollbar-hidden">
                <Breadcrumbs />
                <CFDSafetyContent />
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

export default CFDSafety;
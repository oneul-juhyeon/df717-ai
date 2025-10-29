import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import AwardWinningServiceHeader from "@/components/award-winning-service/AwardWinningServiceHeader";
import AwardWinningServiceContent from "@/components/award-winning-service/AwardWinningServiceContent";
import CFDProductsSidebar from "@/components/cfd-safety/CFDProductsSidebar";
import Footer from "@/components/common/Footer";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

const AwardWinningService: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SEOHead
        title="Award-Winning Service with Vantage - DF717"
        description="Experience award-winning CFD trading services with Vantage. Comprehensive trading ecosystem, $1M insurance protection, and 24/7 professional support for confident trading."
        keywords="Vantage, 어워드 수상, CFD 트레이딩, 복사 거래, Lloyd's of London, Willis Towers Watson, VFSC, 자금 보호, 24/7 지원"
        canonical="https://df717.ai/award-winning-service"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          "name": "Vantage CFD Trading Platform",
          "description": "Award-winning CFD trading platform with comprehensive protection and support",
          "provider": {
            "@type": "Organization",
            "name": "Vantage"
          },
          "award": "Best CFD Broker",
          "offers": {
            "@type": "Offer",
            "description": "$1 million insurance per account"
          }
        }}
      />
      <div className="w-full min-h-screen bg-black financial-product-layout flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        <AwardWinningServiceHeader scrollToTop={scrollToTop} />
        
        <div className="mt-8 mb-12 flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Left sidebar with CFD labels */}
            <CFDProductsSidebar />
            
            {/* Main content area */}
            <div className="w-full lg:ml-8 text-white">
              <div className="scrollbar-hidden">
                <Breadcrumbs />
                <AwardWinningServiceContent />
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

export default AwardWinningService;
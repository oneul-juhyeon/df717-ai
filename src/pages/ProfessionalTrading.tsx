import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import ProfessionalTradingHeader from "@/components/professional-trading/ProfessionalTradingHeader";
import ProfessionalTradingContent from "@/components/professional-trading/ProfessionalTradingContent";
import CFDProductsSidebar from "@/components/cfd-safety/CFDProductsSidebar";
import Footer from "@/components/common/Footer";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

const ProfessionalTrading: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SEOHead
        title="Professional Trading with ICMarkets - DF717"
        description="Experience professional CFD trading with ICMarkets. Access raw spreads from 0.0 pips, lightning-fast execution, and institutional-grade infrastructure for serious traders."
        keywords="ICMarkets, 프로페셔널 트레이딩, Raw Spread, MetaTrader 4, MetaTrader 5, cTrader, 0.0 pip, 기관급 거래, ASIC, CySEC"
        canonical="https://df717.ai/professional-trading"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          "name": "ICMarkets Professional Trading",
          "description": "Professional CFD trading platform with institutional-grade execution",
          "provider": {
            "@type": "Organization",
            "name": "ICMarkets"
          },
          "feesAndCommissionsSpecification": "Raw spreads from 0.0 pips"
        }}
      />
      <div className="w-full min-h-screen bg-black financial-product-layout flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        <ProfessionalTradingHeader scrollToTop={scrollToTop} />
        
        <div className="mt-8 mb-12 flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Left sidebar with CFD labels */}
            <CFDProductsSidebar />
            
            {/* Main content area */}
            <div className="w-full lg:ml-8 text-white">
              <div className="scrollbar-hidden">
                <Breadcrumbs />
                <ProfessionalTradingContent />
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

export default ProfessionalTrading;
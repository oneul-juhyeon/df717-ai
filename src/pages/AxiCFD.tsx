
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiHero from "@/components/axi/AxiHero";
import AxiEdgeContent from "@/components/axi/AxiEdgeContent";
import AxiFeatureBenefits from "@/components/axi/AxiFeatureBenefits";
import AxiTrustedPartnerSection from "@/components/axi/AxiTrustedPartnerSection";
import AxiBottomFeatures from "@/components/axi/AxiBottomFeatures";
import AxiReadyTrade from "@/components/axi/AxiReadyTrade";

const AxiCFD: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px]">
        <AxiCFDHeader scrollToTop={scrollToTop} />
      </div>
      
      {/* Hero Section */}
      <AxiHero />
      
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] py-10">
        {/* Edge Content Section */}
        <AxiEdgeContent />
        
        {/* Feature Benefits Section */}
        <AxiFeatureBenefits />
        
        {/* Trusted Partner Section */}
        <AxiTrustedPartnerSection />
        
        {/* Bottom Features Section */}
        <AxiBottomFeatures />
      </div>
      
      {/* Ready to trade section */}
      <AxiReadyTrade />
    </main>
  );
};

export default AxiCFD;

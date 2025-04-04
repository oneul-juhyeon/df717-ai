
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiHero from "@/components/axi/AxiHero";
import AxiEdgeSection from "@/components/axi/AxiEdgeSection";
import AxiFeatures from "@/components/axi/AxiFeatures";
import AxiTrustedPartner from "@/components/axi/AxiTrustedPartner";
import AxiBottomFeatures from "@/components/axi/AxiBottomFeatures";
import AxiCallToAction from "@/components/axi/AxiCallToAction";
import AxiAwardWinningService from "@/components/axi/AxiAwardWinningService";

const AxiCFD: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <section className="mt-20 mb-10 w-full">
          <AxiHero />
        </section>
        
        <section id="edge-section" className="mt-20 mb-20 w-full">
          <AxiEdgeSection />
        </section>
        
        <section id="features-section" className="mt-20 mb-20 w-full">
          <AxiFeatures />
        </section>
        
        <section id="trusted-partner-section" className="mt-20 mb-20 w-full">
          <AxiTrustedPartner />
        </section>
        
        <section id="award-winning-section" className="mt-20 mb-20 w-full">
          <AxiAwardWinningService />
        </section>
        
        <section className="mt-20 mb-20 w-full">
          <AxiCallToAction />
        </section>
      </div>
    </main>
  );
};

export default AxiCFD;

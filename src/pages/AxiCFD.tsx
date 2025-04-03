
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiHero from "@/components/axi/AxiHero";
import AxiEdgeSection from "@/components/axi/AxiEdgeSection";
import AxiFeatures from "@/components/axi/AxiFeatures";
import AxiTrustedPartner from "@/components/axi/AxiTrustedPartner";
import AxiBottomFeatures from "@/components/axi/AxiBottomFeatures";
import AxiCallToAction from "@/components/axi/AxiCallToAction";

const AxiCFD: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <section className="mt-20 mb-10">
          <AxiHero />
        </section>
        
        <section className="mt-20 mb-20">
          <AxiEdgeSection />
        </section>
        
        <section className="mt-20 mb-20">
          <AxiFeatures />
        </section>
        
        <section className="mt-20 mb-20">
          <AxiTrustedPartner />
        </section>
        
        <section className="mt-20 mb-20">
          <AxiBottomFeatures />
        </section>
        
        <section className="mt-20 mb-20">
          <AxiCallToAction />
        </section>
      </div>
    </main>
  );
};

export default AxiCFD;

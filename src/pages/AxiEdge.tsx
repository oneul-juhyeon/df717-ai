
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiEdgeHero from "@/components/axi/AxiEdgeHero";
import AxiEdgeContent from "@/components/axi/AxiEdgeContent";
import AxiGivingMore from "@/components/axi/AxiGivingMore";
import AxiTrustedPartner from "@/components/axi/AxiTrustedPartner";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import Footer from "@/components/common/Footer";

const AxiEdge: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-black text-white flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <AxiEdgeHero />
      
        <section className="w-full py-16 md:py-24">
          <AxiEdgeContent />
        </section>
      </div>
      
      <section className="w-full bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[154px]">
          <AxiGivingMore />
        </div>
      </section>
      
      <section className="w-full bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[154px]">
          <AxiTrustedPartner />
        </div>
      </section>
      
      <AxiSpaceXCallToAction />
      
      <Footer />
    </main>
  );
};

export default AxiEdge;

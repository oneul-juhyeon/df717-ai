
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiHero from "@/components/axi/AxiHero";
import AxiEdgeSection from "@/components/axi/AxiEdgeSection";
import AxiCallToAction from "@/components/axi/AxiCallToAction";

const AxiEdge: React.FC = () => {
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
        
        <section className="mt-20 mb-20 w-full">
          <AxiEdgeSection />
        </section>
        
        <section className="mb-20 w-full">
          <AxiCallToAction />
        </section>
      </div>
    </main>
  );
};

export default AxiEdge;

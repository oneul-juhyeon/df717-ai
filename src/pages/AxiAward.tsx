
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiAwardWinningService from "@/components/axi/AxiAwardWinningService";
import AxiReadyTrade from "@/components/axi/AxiReadyTrade";
import AxiHero from "@/components/axi/AxiHero";

const AxiAward: React.FC = () => {
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
        
        <section className="mt-10 mb-16 w-full">
          <div className="mb-10">
            <AxiHero />
          </div>
          <AxiAwardWinningService />
        </section>
      </div>
      
      <AxiReadyTrade />
    </main>
  );
};

export default AxiAward;

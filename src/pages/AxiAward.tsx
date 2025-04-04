
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
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px]">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <section className="mt-10 mb-16 w-full">
          <div className="mb-10">
            <AxiHero />
          </div>
          <AxiAwardWinningService />
        </section>
      </div>
      
      {/* Ready to trade section */}
      <AxiReadyTrade />
    </main>
  );
};

export default AxiAward;

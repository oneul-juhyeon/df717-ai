
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiAwardWinningService from "@/components/axi/AxiAwardWinningService";
import AxiReadyTrade from "@/components/axi/AxiReadyTrade";
import AxiAwardHero from "@/components/axi/AxiAwardHero";
import Footer from "@/components/common/Footer";

const AxiAward: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-black flex flex-col text-white">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] flex-grow">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <section className="mt-10 mb-16 w-full">
          <AxiAwardHero />
          <AxiAwardWinningService />
        </section>
      </div>
      
      {/* Ready to trade section */}
      <AxiReadyTrade />
      
      <Footer />
    </main>
  );
};

export default AxiAward;


import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiAwardWinningService from "@/components/axi/AxiAwardWinningService";
import AxiReadyTrade from "@/components/axi/AxiReadyTrade";

const AxiAward: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col text-white">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px]">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <section className="mt-10 mb-16 w-full">
          <div className="w-full relative overflow-hidden rounded-2xl mb-10">
            <div className="bg-gradient-to-r from-red-600 to-red-500 w-full py-20 px-12 max-sm:py-12 max-sm:px-6">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4 max-sm:text-3xl">Award-Winning Service</h1>
                <p className="text-xl text-white max-w-3xl mx-auto max-sm:text-lg mb-2">
                  Trade with confidence.
                </p>
                <p className="text-xl text-white max-w-3xl mx-auto max-sm:text-lg">
                  With our award-winning service.
                </p>
              </div>
            </div>
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


import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiEdgeHero from "@/components/axi/AxiEdgeHero";
import AxiEdgeContent from "@/components/axi/AxiEdgeContent";
import AxiEdgeSection from "@/components/axi/AxiEdgeSection";
import { Button } from "@/components/ui/button";

const AxiEdge: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] text-white flex flex-col">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px]">
        <AxiCFDHeader scrollToTop={scrollToTop} />
      </div>

      <AxiEdgeHero />
      
      <section className="w-full mx-auto px-4 md:px-10 lg:px-[154px] py-16 md:py-24">
        <AxiEdgeContent />
      </section>
      
      <section className="w-full bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[154px]">
          <AxiEdgeSection />
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="w-full bg-red-600 text-white">
        <div className="container mx-auto px-4 md:px-10 lg:px-[154px] py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to trade your edge?</h2>
          <p className="text-xl mb-8">Start trading with a global, award-winning broker.</p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg">
            OPEN ACCOUNT
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AxiEdge;

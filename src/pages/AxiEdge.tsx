
import React from "react";
import { Link } from "react-router-dom";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiEdgeHero from "@/components/axi/AxiEdgeHero";
import AxiEdgeContent from "@/components/axi/AxiEdgeContent";
import AxiGivingMore from "@/components/axi/AxiGivingMore";
import AxiTrustedPartner from "@/components/axi/AxiTrustedPartner";
import AxiBottomFeatures from "@/components/axi/AxiBottomFeatures";
import { Button } from "@/components/ui/button";
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
      
      <section className="w-full bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[154px]">
          <AxiTrustedPartner />
        </div>
      </section>
      
      <section className="w-full bg-[#161616] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[154px]">
          <AxiBottomFeatures />
        </div>
      </section>
      
      {/* Final Call to Action with Contact Button */}
      <section className="w-full bg-red-600 text-white">
        <div className="container mx-auto px-4 md:px-10 lg:px-[154px] py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to trade your edge?</h2>
          <p className="text-xl mb-8">Start trading with a global, award-winning broker.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-black font-bold px-8 py-6 text-lg">
              CONTACT
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default AxiEdge;

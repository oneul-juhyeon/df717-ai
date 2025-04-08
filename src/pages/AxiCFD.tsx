
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiSpaceXCallToAction from "@/components/axi/AxiSpaceXCallToAction";
import AxiCFDArticleContent from "@/components/axi/cfd/AxiCFDArticleContent";
import Footer from "@/components/common/Footer";

const AxiCFD: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5 flex-grow">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <div className="mt-8">
          <AxiCFDArticleContent />
        </div>
      </div>
      
      <AxiSpaceXCallToAction />
      
      <Footer />
    </main>
  );
};

export default AxiCFD;

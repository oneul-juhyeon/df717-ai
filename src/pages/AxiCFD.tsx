
import React from "react";
import AxiCFDHeader from "@/components/axi/AxiCFDHeader";
import AxiCallToAction from "@/components/axi/AxiCallToAction";
import AxiCFDArticleContent from "@/components/axi/cfd/AxiCFDArticleContent";

const AxiCFD: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#0a0a1e] flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        <AxiCFDHeader scrollToTop={scrollToTop} />
        
        <div className="mt-8">
          <AxiCFDArticleContent />
        </div>
        
        <section className="my-20 w-full">
          <AxiCallToAction />
        </section>
      </div>
    </main>
  );
};

export default AxiCFD;

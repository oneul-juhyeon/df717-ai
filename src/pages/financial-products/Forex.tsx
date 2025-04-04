
import React, { useEffect } from "react";
import ForexHeader from "@/components/forex/ForexHeader";
import AxiCallToAction from "@/components/axi/AxiCallToAction";
import ForexArticleContent from "@/components/forex/ForexArticleContent";

const Forex: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        <ForexHeader scrollToTop={scrollToTop} />
        
        <div className="bg-white text-black rounded-lg mt-8 overflow-hidden">
          <ForexArticleContent />
        </div>
        
        <section className="my-20 w-full">
          <AxiCallToAction />
        </section>
      </div>
    </main>
  );
};

export default Forex;

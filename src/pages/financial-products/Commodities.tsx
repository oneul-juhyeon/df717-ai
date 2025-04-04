
import React, { useEffect } from "react";
import CommoditiesHeader from "@/components/commodities/CommoditiesHeader";
import CommoditiesArticleContent from "@/components/commodities/CommoditiesArticleContent";
import AxiCallToAction from "@/components/axi/AxiCallToAction";

const Commodities: React.FC = () => {
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
    <main className="w-full min-h-screen bg-[#0a0a1e] flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        <CommoditiesHeader scrollToTop={scrollToTop} />
        
        <div className="bg-white text-black rounded-lg mt-8 overflow-hidden">
          <CommoditiesArticleContent />
        </div>
        
        <section className="my-20 w-full">
          <AxiCallToAction />
        </section>
      </div>
    </main>
  );
};

export default Commodities;

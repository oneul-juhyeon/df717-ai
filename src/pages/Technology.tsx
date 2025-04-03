
import React from "react";
import TechnologyHeader from "@/components/technology/TechnologyHeader";
import TechnologyTabs from "@/components/technology/TechnologyTabs";

const Technology: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <TechnologyHeader scrollToTop={scrollToTop} />
        
        <section className="mt-20 mb-20">
          <div className="max-w-6xl mx-auto">
            <TechnologyTabs />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Technology;

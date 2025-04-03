
import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import HomeContent from "@/components/home/HomeContent";

const HomeIntro: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <HomeHeader scrollToTop={scrollToTop} />
        
        <section className="mt-20 mb-20">
          <HomeContent />
        </section>
      </div>
    </main>
  );
};

export default HomeIntro;

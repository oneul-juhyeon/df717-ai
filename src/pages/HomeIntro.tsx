
import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import HeroSection from "@/components/home/HeroSection";
import TextSection from "@/components/home/TextSection";

const HomeIntro: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col font-din">
      <div className="w-full mx-0 px-5 sm:px-10 md:px-[154px]">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>
      
      <div className="flex flex-col">
        <HeroSection />
        <TextSection />
      </div>
    </main>
  );
};

export default HomeIntro;

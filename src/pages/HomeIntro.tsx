
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
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="w-full mx-auto px-[154px] pt-8 pb-12 max-md:px-10 max-sm:px-5">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>
      
      <HeroSection />
      <TextSection />
      {/* ContentSection 컴포넌트가 제거되었습니다 */}
    </main>
  );
};

export default HomeIntro;

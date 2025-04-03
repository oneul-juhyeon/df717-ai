
import React from "react";
import Logo from "@/components/landing/Logo";
import HeroSection from "@/components/landing/HeroSection";

const Index: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <header className="pt-14 max-sm:pt-5">
          <Logo />
        </header>

        <section className="mt-14">
          <HeroSection className="w-full" />
        </section>
      </div>
    </main>
  );
};

export default Index;

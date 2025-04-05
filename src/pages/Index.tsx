
import React from "react";
import Logo from "@/components/landing/Logo";
import HeroSection from "@/components/landing/HeroSection";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <main className="w-full min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source src="/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      <div className="relative z-20 max-w-none mx-auto px-5 sm:px-10 md:px-[154px] flex flex-col min-h-screen">
        <header className="pt-5 sm:pt-8 md:pt-14">
          <Link to="/">
            <Logo />
          </Link>
        </header>

        <section className="mt-6 sm:mt-10 md:mt-14 flex-1 flex items-center">
          <HeroSection className="w-full" />
        </section>
      </div>
    </main>
  );
};

export default Index;

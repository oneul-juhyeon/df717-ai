
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeHeader from "@/components/home/HomeHeader";
import BibleVerseSection from "@/components/home/BibleVerseSection";
import RevCounterSection from "@/components/home/RevCounterSection";
import FinalSection from "@/components/home/FinalSection";
import Footer from "@/components/common/Footer";

const HomeIntro: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="w-full min-h-screen bg-black flex flex-col font-din overflow-x-hidden">
      {/* Header */}
      <div className="w-full mx-0 px-5 sm:px-10 md:px-[154px] z-10">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>

      {/* First Section - Bible Verse with Earth Image */}
      <BibleVerseSection />

      {/* Counter Section */}
      <RevCounterSection />

      {/* Final Section */}
      <FinalSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default HomeIntro;

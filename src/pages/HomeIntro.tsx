
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BibleVerseSection from "@/components/home/BibleVerseSection";
import TextQuoteSection from "@/components/home/TextQuoteSection";
import RevCounterSection from "@/components/home/RevCounterSection";
import FinalSection from "@/components/home/FinalSection";
import Footer from "@/components/common/Footer";
import BaseHeader from "@/components/navigation/BaseHeader";
import { getNavigationItems } from "@/components/navigation/navigationItems";

const HomeIntro: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const navigationItems = getNavigationItems();

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
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] z-10">
        <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} />
      </div>

      {/* First Section - Bible Verse with Earth Image */}
      <BibleVerseSection />

      {/* New Text Quote Section */}
      <TextQuoteSection />

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

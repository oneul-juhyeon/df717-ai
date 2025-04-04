
import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import HomeContent from "@/components/home/HomeContent";
import { motion } from "framer-motion";

const HomeIntro: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>
        
      {/* Hero Section */}
      <section className="w-full bg-black">
        <div className="w-full">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/lovable-uploads/matthew_hd.webp" 
            alt="DF717 Hero" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      
      {/* Text Section */}
      <section className="w-full bg-[#111111] py-24 px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="font-sans text-xl md:text-2xl text-[#EEEEEE] mb-12 leading-relaxed">
            Since thousands of years ago, the Bible has foreshadowed the era of famine at the end.<br/>
            Living in the last era, we are already experiencing global economic hardship.
          </p>
          
          <p className="font-sans text-2xl md:text-3xl font-bold text-[#EEEEEE] leading-relaxed">
            DF717 is an ark of salvation to prepare for famine through financial innovation using AI technology.
          </p>
        </motion.div>
      </section>
      
      {/* Content Section */}
      <div className="w-full mx-auto px-[154px] max-md:px-10 max-sm:px-5 mt-20 mb-20">
        <HomeContent />
      </div>
    </main>
  );
};

export default HomeIntro;

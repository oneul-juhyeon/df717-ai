
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface CompanyHeroProps {
  scrollToValues: () => void;
}

const CompanyHero: React.FC<CompanyHeroProps> = ({ scrollToValues }) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  
  // Animation sequence
  useEffect(() => {
    // Step 1: Show title
    const timer1 = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    // Step 2: Show content after title
    const timer2 = setTimeout(() => {
      setContentVisible(true);
    }, 1000);

    // Step 3: Show arrow after content
    const timer3 = setTimeout(() => {
      setArrowVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden bg-black">
      <div className="z-10 max-w-3xl mx-auto">
        <div className="relative">
          {/* Title Animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: titleVisible ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl mb-8 text-white font-gotham font-bold max-md:text-4xl max-sm:text-3xl"
          >
            About DF717 & Company
          </motion.h1>
          
          {/* Content Animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: contentVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            DF717 designs a better life through technology.<br />
            With sophisticated technologies and reliable data, we lead innovation in the future financial markets.
          </motion.p>
        </div>
      </div>

      {/* Down Arrow - Unicode character "ᐯ" */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: arrowVisible ? [0, 1, 0.5, 1] : 0, 
          y: arrowVisible ? [0, 10, 5, 10] : 0
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        onClick={scrollToValues}
      >
        <div className="text-4xl text-white">ᐯ</div>
      </motion.div>
    </section>
  );
};

export default CompanyHero;

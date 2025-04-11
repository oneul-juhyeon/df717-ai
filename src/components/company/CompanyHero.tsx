
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CompanyHeroProps {
  scrollToValues: () => void;
}

const CompanyHero: React.FC<CompanyHeroProps> = ({
  scrollToValues
}) => {
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
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-24">
      <div className="container max-w-5xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: titleVisible ? 1 : 0, y: titleVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          Our Company
        </motion.h1>
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: contentVisible ? 1 : 0, y: contentVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl text-gray-300 mb-12">
            DF717 is committed to advancing financial innovation through cutting-edge technology and biblical principles.
          </p>
        </motion.div>
        
        <motion.button
          onClick={scrollToValues}
          className="flex items-center justify-center mx-auto mt-8 text-white border border-white px-8 py-3 hover:bg-white/10 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: arrowVisible ? 1 : 0, y: arrowVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          Explore Our Values
        </motion.button>
      </div>
    </section>
  );
};

export default CompanyHero;

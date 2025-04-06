
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-black relative pt-24 pb-16 md:py-32 px-6 flex items-center justify-center min-h-[70vh]">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-din text-xl md:text-2xl lg:text-3xl text-[#EEEEEE] leading-relaxed mb-6 tracking-wide">
          For nation shall rise against nation,<br />
          and kingdom against kingdom.<br />
          There shall be famines, and pestilences,<br />
          and earthquakes in various places.
        </p>
        
        <p className="font-din text-lg md:text-xl text-[#AAAAAA] italic tracking-wide">
          – Matthew 24:7
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;


import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <motion.section 
      className="w-full bg-black relative pt-24 pb-16 md:py-32 px-6 flex items-center justify-center min-h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="max-w-3xl mx-auto text-center z-10">
        <motion.p 
          className="font-din text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-6 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          For nation shall rise against nation,<br />
          and kingdom against kingdom.<br />
          There shall be famines, and pestilences,<br />
          and earthquakes in various places.
        </motion.p>
        
        <motion.p 
          className="font-din text-lg md:text-xl text-gray-400 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          – Matthew 24:7
        </motion.p>
      </div>

      {/* Earth Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.6 }}
      >
        <img 
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_EARTH_high_quality_3cf2cabe8e.jpg" 
          alt="Earth" 
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;

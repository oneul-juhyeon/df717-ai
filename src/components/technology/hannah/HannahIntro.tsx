
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HannahIntro: React.FC = () => {
  const { sectionRef, controls } = useScrollAnimation();

  return (
    <motion.div 
      ref={sectionRef} 
      initial={{
        opacity: 0,
        y: 20
      }} 
      animate={controls}
    >
      <p className="text-gray-300 leading-relaxed mb-30">
        HANNAH is the core AI engine of DF717, developed with proprietary methodology and advanced machine learning.
      </p>
      
      <div className="mb-30 text-white">
        <p className="text-lg mb-30">Hannah is symbolic of patience and answered prayer. Investing demands perseverance through uncertainty. HANNAH responds with trusted strategies and reliable analysis to bring peace and results.</p>
      </div>
    </motion.div>
  );
};

export default HannahIntro;

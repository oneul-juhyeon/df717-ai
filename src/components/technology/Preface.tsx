
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PrefaceComponent = () => {
  const { sectionRef, controls } = useScrollAnimation();

  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-9">DF717</h2>
      
      <motion.div 
        className="space-y-12" 
        initial={{
          opacity: 0
        }} 
        animate={{
          opacity: 1
        }} 
        transition={{
          duration: 0.5
        }}
      >
        <motion.div 
          ref={sectionRef} 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={controls}
        >
          <p className="text-gray-300 leading-relaxed mb-8">
            DF717 is a robot designed to provide simplified AI investment services.
          </p>
          
          <div className="mb-8 text-white">
            <p className="text-lg mb-8">Each customer and account can operate a unique portfolio. The system is stable enough to manage tens of thousands of accounts simultaneously.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrefaceComponent;

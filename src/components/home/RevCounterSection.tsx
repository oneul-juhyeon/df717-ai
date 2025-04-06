
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CharacterReveal from "./CharacterReveal";
import AnimatedCounter from "./AnimatedCounter";

const RevCounterSection: React.FC = () => {
  const counterSectionRef = useRef<HTMLDivElement>(null);
  const isCounterInView = useInView(counterSectionRef, { 
    once: false, // Replay animations when scrolling back into view
    margin: "-100px" // Trigger slightly before the section is fully in view
  });
  
  // Animation duration for the scale + fade-in effect
  const animationDuration = 1.0; // 1 second for the animation
  
  return (
    <section 
      ref={counterSectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black"
    >
      <motion.div 
        className="grid grid-cols-3 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isCounterInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Bible book abbreviation with fade-in + scale animation */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: isCounterInView ? 1 : 0, 
              scale: isCounterInView ? 1 : 1.05 
            }}
            transition={{ duration: animationDuration, ease: "easeOut" }}
            className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white"
          >
            REV
          </motion.div>
        </div>
        
        {/* Number 7 with fade-in + scale animation */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: isCounterInView ? 1 : 0, 
              scale: isCounterInView ? 1 : 1.05 
            }}
            transition={{ duration: animationDuration, ease: "easeOut" }}
            className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white"
          >
            7
          </motion.div>
        </div>
        
        {/* Number 17 with fade-in + scale animation */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: isCounterInView ? 1 : 0, 
              scale: isCounterInView ? 1 : 1.05 
            }}
            transition={{ duration: animationDuration, ease: "easeOut" }}
            className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white"
          >
            17
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default RevCounterSection;

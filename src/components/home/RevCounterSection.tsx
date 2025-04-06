
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CharacterReveal from "./CharacterReveal";
import AnimatedCounter from "./AnimatedCounter";

const RevCounterSection: React.FC = () => {
  const counterSectionRef = useRef<HTMLDivElement>(null);
  const isCounterInView = useInView(counterSectionRef, { 
    once: true,
    margin: "-100px" // Trigger slightly before the section is fully in view
  });
  
  return (
    <section 
      ref={counterSectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black"
    >
      <motion.div 
        className="flex flex-row items-center justify-center gap-6 px-4 sm:gap-10 md:gap-16 lg:gap-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isCounterInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Bible book abbreviation cycling animation */}
        <CharacterReveal text="REV" />
        
        {/* Number 7 with count-up animation - 1.5 seconds duration */}
        <AnimatedCounter target={7} duration={1500} />
        
        {/* Separator */}
        <div className="text-5xl md:text-7xl lg:text-8xl font-din tracking-wider text-white">:</div>
        
        {/* Number 17 with count-up animation - 1.8 seconds duration */}
        <AnimatedCounter target={17} duration={1800} />
      </motion.div>
    </section>
  );
};

export default RevCounterSection;

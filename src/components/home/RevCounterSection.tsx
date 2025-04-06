
import React from "react";
import { motion, useInView } from "framer-motion";
import CharacterReveal from "./CharacterReveal";
import AnimatedCounter from "./AnimatedCounter";

const RevCounterSection: React.FC = () => {
  const counterSectionRef = React.useRef<HTMLDivElement>(null);
  const isCounterInView = useInView(counterSectionRef);
  
  return (
    <section 
      ref={counterSectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black"
    >
      <motion.div 
        className="flex flex-row items-center justify-center gap-6 px-4 sm:gap-10 md:gap-16 lg:gap-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: isCounterInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* REV text with character-by-character animation */}
        <CharacterReveal text="REV" />
        
        {/* Separator */}
        <div className="text-5xl md:text-7xl lg:text-8xl font-din tracking-wider text-white">:</div>
        
        {/* Number 7 with count-up animation */}
        <AnimatedCounter target={7} />
        
        {/* Separator */}
        <div className="text-5xl md:text-7xl lg:text-8xl font-din tracking-wider text-white">:</div>
        
        {/* Number 17 with count-up animation */}
        <AnimatedCounter target={17} />
      </motion.div>
    </section>
  );
};

export default RevCounterSection;

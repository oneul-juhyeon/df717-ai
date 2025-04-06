
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
  
  // Set the same animation duration for all elements
  const animationDuration = 2000; // 2 seconds for all animations
  
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
        {/* Bible book abbreviation with simultaneous animation */}
        <div className="flex justify-center items-center">
          <CharacterReveal 
            text="REV" 
            isInView={isCounterInView} 
            delay={0}
            duration={animationDuration}
          />
        </div>
        
        {/* Number 7 with simultaneous animation */}
        <div className="flex justify-center items-center">
          <AnimatedCounter 
            target={7} 
            duration={animationDuration} 
            startFrom={1} 
            endAt={9} 
            isInView={isCounterInView} 
            delay={0} 
          />
        </div>
        
        {/* Number 17 with simultaneous animation */}
        <div className="flex justify-center items-center">
          <AnimatedCounter 
            target={17} 
            duration={animationDuration} 
            randomize={true} 
            minValue={1} 
            maxValue={30} 
            isInView={isCounterInView} 
            delay={0} 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default RevCounterSection;

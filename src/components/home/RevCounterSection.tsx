
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
  const animationDuration = 2500; // 2.5 seconds for all animations to ensure synchronization
  
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
        {/* Bible book abbreviation with slot machine animation */}
        <div className="flex justify-center items-center">
          <CharacterReveal 
            text="REV" 
            isInView={isCounterInView} 
            delay={0}
            duration={animationDuration}
            slotMachineStyle={true}
          />
        </div>
        
        {/* Number 7 with slot machine animation */}
        <div className="flex justify-center items-center">
          <AnimatedCounter 
            target={7} 
            duration={animationDuration} 
            startFrom={1} 
            endAt={7} 
            isInView={isCounterInView} 
            delay={0}
            slotMachineStyle={true}
          />
        </div>
        
        {/* Number 17 with slot machine animation */}
        <div className="flex justify-center items-center">
          <AnimatedCounter 
            target={17} 
            duration={animationDuration} 
            startFrom={1} 
            endAt={17} 
            isInView={isCounterInView} 
            delay={0}
            slotMachineStyle={true}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default RevCounterSection;

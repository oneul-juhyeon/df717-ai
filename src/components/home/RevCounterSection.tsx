
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
        className="grid grid-cols-3 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isCounterInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Bible book abbreviation cycling animation - fixed position */}
        <div className="flex justify-center items-center">
          <CharacterReveal text="REV" />
        </div>
        
        {/* Number 7 with count-up animation - 1.5 seconds duration */}
        <div className="flex justify-center items-center">
          <AnimatedCounter target={7} duration={1500} startFrom={1} endAt={9} />
        </div>
        
        {/* Number 17 with count-up animation - 1.8 seconds duration */}
        <div className="flex justify-center items-center">
          <AnimatedCounter target={17} duration={1800} randomize={true} minValue={1} maxValue={30} />
        </div>
      </motion.div>
    </section>
  );
};

export default RevCounterSection;

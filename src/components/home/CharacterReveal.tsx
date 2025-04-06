
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Bible book abbreviation cycling component with smooth transitions
const CharacterReveal = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    // Bible book abbreviations to cycle through
    const bibleBooks = [
      "GEN", "EXO", "LEV", "NUM", "DEU", "JOS", "JUD", "RUT", 
      "EZR", "NEH", "EST", "JOB", "PSA", "PRO", "ECC", "ISA", "REV"
    ];
    
    let currentIndex = 0;
    
    // Start cycling through abbreviations
    const interval = setInterval(() => {
      setDisplayedText(bibleBooks[currentIndex]);
      currentIndex++;
      
      // Stop when we reach "REV" (the last item)
      if (currentIndex >= bibleBooks.length) {
        clearInterval(interval);
      }
    }, 100); // Change every 0.1 seconds
    
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div 
      ref={containerRef}
      className="flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText && (
        <motion.div
          key={displayedText}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.08 }}
          className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white inline-block font-mono"
        >
          {displayedText}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CharacterReveal;

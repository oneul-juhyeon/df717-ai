
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Bible book abbreviation cycling component with smooth transitions
const CharacterReveal = ({ text, isInView }: { text: string; isInView: boolean }) => {
  const [displayedText, setDisplayedText] = useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isInView) {
      setDisplayedText(""); // Reset the text when out of view
      return;
    }
    
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
  }, [isInView]); // Depend on isInView to restart animation

  return (
    <motion.div 
      ref={containerRef}
      className="flex items-center justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {displayedText && (
          <motion.div
            key={displayedText}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white inline-block font-mono fixed-width-text"
            style={{ 
              fontFamily: "monospace", // Ensuring fixed width for all characters
              minWidth: "3ch", // Fixed width for 3 characters
              display: "flex",
              justifyContent: "center"
            }}
          >
            {displayedText}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CharacterReveal;

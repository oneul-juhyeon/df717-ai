
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Bible book abbreviation cycling component with slow, cinematic transitions
const CharacterReveal = ({ 
  text, 
  isInView,
  delay = 0 
}: { 
  text: string; 
  isInView: boolean;
  delay?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isInView) {
      setDisplayedText(""); // Reset the text when out of view
      return;
    }
    
    // Reduced set of Bible book abbreviations (key steps only)
    const bibleBooks = [
      "GEN", "EXO", "PSA", "ISA", "MAT", "JOH", "REV"
    ];
    
    let currentIndex = 0;
    let mainTimer: NodeJS.Timeout;
    
    // Delay the start of the animation sequence
    const initialDelay = setTimeout(() => {
      // Start cycling through abbreviations at a slower pace
      mainTimer = setInterval(() => {
        setDisplayedText(bibleBooks[currentIndex]);
        currentIndex++;
        
        // Stop when we reach "REV" (the last item)
        if (currentIndex >= bibleBooks.length) {
          clearInterval(mainTimer);
        }
      }, 400); // Slower pace - 0.4 seconds between changes
    }, delay);
    
    return () => {
      clearTimeout(initialDelay);
      clearInterval(mainTimer);
    };
  }, [isInView, delay]); // Depend on isInView to restart animation

  return (
    <motion.div 
      ref={containerRef}
      className="flex items-center justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="wait">
        {displayedText && (
          <motion.div
            key={displayedText}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
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

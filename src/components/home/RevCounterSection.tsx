
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const RevCounterSection: React.FC = () => {
  const counterSectionRef = useRef<HTMLDivElement>(null);
  const isCounterInView = useInView(counterSectionRef, { 
    once: false, // Replay animations when scrolling back into view
    margin: "-100px" // Trigger slightly before the section is fully in view
  });
  
  // Animation duration for the scale + fade-in effect
  const animationDuration = 1.0; // 1 second for the animation
  
  // State for the current Bible book abbreviation and number counters
  const [currentBook, setCurrentBook] = useState("REV");
  const [count7, setCount7] = useState(0);
  const [count17, setCount17] = useState(0);
  
  // Bible abbreviation and number counter animations
  useEffect(() => {
    if (!isCounterInView) {
      setCurrentBook("REV"); // Reset to REV when out of view
      setCount7(0);
      setCount17(0);
      return;
    }
    
    const bibleBooks = ["GEN", "EXO", "LEV", "NUM", "DEU", "JOS", "RUT", "ISA", "REV"];
    let currentIndex = 0;
    
    // Show first book immediately
    setCurrentBook(bibleBooks[currentIndex]);
    
    // Calculate interval to ensure animation completes in ~2 seconds
    // 9 books with ~0.2s per book = ~1.8s total + a bit of buffer
    const interval = 200; // 0.2 seconds
    
    // Start counter animations
    // For number 7, count from 0 to 7
    let count7Value = 0;
    const count7Steps = 7;
    const count7Interval = 1800 / count7Steps; // Complete in ~1.8s
    
    // For number 17, count from 0 to 17
    let count17Value = 0;
    const count17Steps = 17;
    const count17Interval = 1800 / count17Steps; // Complete in ~1.8s
    
    // Bible book cycling
    const bookTimer = setInterval(() => {
      currentIndex++;
      
      if (currentIndex < bibleBooks.length) {
        setCurrentBook(bibleBooks[currentIndex]);
      } else {
        // Stop when we reach the end (REV)
        clearInterval(bookTimer);
      }
    }, interval);
    
    // Number 7 counter
    const timer7 = setInterval(() => {
      count7Value++;
      setCount7(count7Value);
      
      if (count7Value >= 7) {
        clearInterval(timer7);
      }
    }, count7Interval);
    
    // Number 17 counter
    const timer17 = setInterval(() => {
      count17Value++;
      setCount17(count17Value);
      
      if (count17Value >= 17) {
        clearInterval(timer17);
      }
    }, count17Interval);
    
    return () => {
      clearInterval(bookTimer);
      clearInterval(timer7);
      clearInterval(timer17);
    };
  }, [isCounterInView]);
  
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
        {/* Bible book abbreviation with cycling animation + scale effect */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: isCounterInView ? 1 : 0, 
              scale: isCounterInView ? 1 : 1.05 
            }}
            transition={{ duration: animationDuration, ease: "easeOut" }}
            className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white"
            style={{
              minWidth: "3ch", // Fixed width for 3 characters
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {currentBook}
          </motion.div>
        </div>
        
        {/* Number 7 with counting animation + fade-in + scale */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: isCounterInView ? 1 : 0, 
              scale: isCounterInView ? 1 : 1.05 
            }}
            transition={{ duration: animationDuration, ease: "easeOut" }}
            className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white"
            style={{
              minWidth: "2ch", // Fixed width for up to 2 digits
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {count7}
          </motion.div>
        </div>
        
        {/* Number 17 with counting animation + fade-in + scale */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: isCounterInView ? 1 : 0, 
              scale: isCounterInView ? 1 : 1.05 
            }}
            transition={{ duration: animationDuration, ease: "easeOut" }}
            className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white"
            style={{
              minWidth: "2ch", // Fixed width for up to 2 digits
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {count17}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default RevCounterSection;


import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Character by character animation component with scramble effect
const CharacterReveal = ({ text }: { text: string }) => {
  const [decodedText, setDecodedText] = useState<string[]>(Array(text.length).fill(''));
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  
  // Characters to use for the scramble effect
  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
  
  useEffect(() => {
    if (!isInView) return;
    
    // Clone the current state to mutate
    const textArray = [...decodedText];
    
    // For each character in the target text
    text.split('').forEach((targetChar, charIndex) => {
      let iterations = 0;
      
      // Delay start based on character position
      const startDelay = charIndex * 300; // Stagger starting times
      
      // Set timeout for this character's animation to begin
      setTimeout(() => {
        // Interval for the scrambling effect
        const interval = setInterval(() => {
          // Update this single character
          textArray[charIndex] = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          setDecodedText([...textArray]);
          
          iterations++;
          
          // Gradually increasing chance to stop and show final character
          // The more iterations, the higher chance to resolve
          if (iterations > 5 && Math.random() > 0.7) {
            clearInterval(interval);
            textArray[charIndex] = targetChar;
            setDecodedText([...textArray]);
          }
        }, 50); // Speed of character changes
        
        // Ensure it stops and shows the correct character eventually
        setTimeout(() => {
          clearInterval(interval);
          textArray[charIndex] = targetChar;
          setDecodedText([...textArray]);
        }, 1200); // Maximum animation time per character
        
      }, startDelay);
    });
  }, [isInView, text]);

  return (
    <motion.div 
      ref={containerRef}
      className="flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {decodedText.map((char, index) => (
        <span
          key={index}
          className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white inline-block"
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
};

export default CharacterReveal;


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Animated counter component with synchronized animation timing
const AnimatedCounter = ({ 
  target, 
  title,
  duration = 2000, 
  startFrom = 0,
  endAt = undefined,
  randomize = false,
  minValue = 0,
  maxValue = 100,
  isInView = false,
  delay = 0 
}: { 
  target: number; 
  title?: string;
  duration?: number;
  startFrom?: number;
  endAt?: number;
  randomize?: boolean;
  minValue?: number;
  maxValue?: number;
  isInView?: boolean;
  delay?: number;
}) => {
  const [count, setCount] = useState<number | null>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let startTimestamp: number;
    let animationFrameId: number;
    let lastCount = startFrom;
    let delayTimer: NodeJS.Timeout;
    
    if (isInView) {
      // Reset counter when coming back into view
      setCount(null); // Set to null initially to trigger fade-in animation
      
      // Delay the start of the animation
      delayTimer = setTimeout(() => {
        setCount(startFrom); // Set the initial value after delay
        
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          
          let newCount;
          
          if (randomize) {
            // Use consistent timing for random values to ensure finishing at the same time
            if (progress < 1) {
              // Gradually approach the target as we get closer to the end
              const directProgress = Math.min(progress * 1.2, 1); // Slightly accelerate to ensure we reach target
              
              if (directProgress < 0.9) {
                newCount = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
              } else {
                // In the final 10% of time, ensure we're moving toward the target
                const remainingProgress = (directProgress - 0.9) / 0.1; 
                newCount = Math.floor(lastCount + (target - lastCount) * remainingProgress);
              }
            } else {
              newCount = target; // Ensure we end exactly at target
            }
          } else {
            // Regular counter logic
            const maxEndValue = endAt !== undefined ? endAt : target;
            const range = maxEndValue - startFrom;
            newCount = Math.floor(startFrom + (progress * range));
            
            // Ensure counter lands exactly on the target value at the end
            if (progress === 1) {
              newCount = target;
            }
          }
          
          if (newCount !== lastCount) {
            setCount(newCount);
            lastCount = newCount;
          }
          
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(step);
          }
        };
        
        animationFrameId = requestAnimationFrame(step);
      }, delay);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (delayTimer) {
        clearTimeout(delayTimer);
      }
    };
  }, [isInView, target, duration, startFrom, endAt, randomize, minValue, maxValue, delay]);

  return (
    <div className="flex flex-col items-center justify-center" ref={counterRef}>
      <motion.div
        className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white font-mono"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={count !== null ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 10 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        key={count} // This ensures a new animation for each count change
        style={{
          fontFamily: "monospace", // Ensuring fixed width for all characters
          minWidth: count !== null && count >= 10 ? "2ch" : "1ch", // Fixed width based on digit count
          display: "flex",
          justifyContent: "center"
        }}
      >
        {count !== null ? count : ""}
      </motion.div>
      {title && (
        <motion.div
          className="text-lg md:text-xl lg:text-2xl text-white opacity-80 mt-2 font-din tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {title}
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedCounter;

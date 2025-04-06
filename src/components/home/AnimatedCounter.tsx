
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Animated counter component with count-up animation
const AnimatedCounter = ({ 
  target, 
  title,
  duration = 1500, // Default duration in ms
  startFrom = 0,
  endAt = undefined,
  randomize = false,
  minValue = 0,
  maxValue = 100
}: { 
  target: number; 
  title?: string;
  duration?: number;
  startFrom?: number;
  endAt?: number;
  randomize?: boolean;
  minValue?: number;
  maxValue?: number;
}) => {
  const [count, setCount] = useState(startFrom);
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    let startTimestamp: number;
    let animationFrameId: number;
    let lastCount = startFrom;
    
    if (isInView) {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        let newCount;
        
        if (randomize) {
          // Random count between minValue and maxValue until reaching the end
          if (progress < 0.85) {
            newCount = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
          } else {
            // Gradually approach the target in the final 15% of time
            const remainingProgress = (progress - 0.85) / 0.15;
            newCount = Math.floor(lastCount + (target - lastCount) * remainingProgress);
          }
        } else {
          // Regular counter logic
          const maxEndValue = endAt !== undefined ? endAt : target;
          const range = maxEndValue - startFrom;
          newCount = Math.floor(startFrom + (progress * range));
          
          // If we've reached the target but not the end of animation,
          // oscillate around the target
          if (progress < 1 && newCount === target && endAt !== undefined) {
            const oscillationPhase = (timestamp % 200) / 200; // 0.2s cycle
            if (oscillationPhase > 0.5) {
              newCount = target + 1 > endAt ? target - 1 : target + 1;
            }
          }
        }
        
        // Ensure we end on the exact target value
        if (progress === 1) {
          newCount = target;
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
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, target, duration, startFrom, endAt, randomize, minValue, maxValue]);

  return (
    <div className="flex flex-col items-center justify-center" ref={counterRef}>
      <motion.div
        className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white font-mono"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        key={count} // This ensures a new animation for each count change
      >
        {count}
      </motion.div>
      {title && (
        <motion.div
          className="text-lg md:text-xl lg:text-2xl text-white opacity-80 mt-2 font-din tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {title}
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedCounter;

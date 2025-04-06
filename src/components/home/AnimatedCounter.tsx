
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Animated counter component with count-up animation
const AnimatedCounter = ({ 
  target, 
  title,
  duration = 1500 // Default duration in ms
}: { 
  target: number; 
  title?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    let startTimestamp: number;
    let animationFrameId: number;
    
    if (isInView) {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        
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
  }, [isInView, target, duration]);

  return (
    <div className="flex flex-col items-center justify-center" ref={counterRef}>
      <motion.div
        className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white font-mono"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
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

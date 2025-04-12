
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const BibleVerseSection: React.FC = () => {
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [authorVisible, setAuthorVisible] = useState(false);
  const [earthImageVisible, setEarthImageVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Use useInView for watching when section scrolls in or out
  const isInView = useInView(quoteRef, { once: false });
  const controls = useAnimation();

  // Animation sequence
  useEffect(() => {
    if (!isInView) {
      // Reset states when out of view
      setAuthorVisible(false);
      setArrowVisible(false);
      return;
    }
    
    // Step 1: Start with black background, then fade in quote
    const timer1 = setTimeout(() => {
      setQuoteVisible(true);
    }, 1000); // Start showing quote after 1s

    // Step 2: Show author attribution after quote is fully visible + 0.1s delay
    const timer2 = setTimeout(() => {
      setAuthorVisible(true);
    }, 1900); // Attribution appears after quote (1s + 0.8s quote fade + 0.1s delay)

    // Step 3: Show Earth image 0.2s after attribution (Image should stay visible)
    if (!earthImageVisible) {
      const timer3 = setTimeout(() => {
        setEarthImageVisible(true);
      }, 2100); // Earth image appears 0.2s after attribution (1900ms + 200ms)
    }

    // Step 4-5: Scroll down and show arrow
    const timer4 = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      setArrowVisible(true);
    }, 3100); // Scroll down and show arrow after image is visible (give extra time for image to fade in)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer4);
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden">
      <div className="z-10 max-w-3xl mx-auto">
        <div ref={quoteRef} className="relative">
          {quoteVisible && (
            <div className="font-din text-sm md:text-base lg:text-xl text-white leading-relaxed mb-2 tracking-wider">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline"
              >
                "For nation will rise against nation, and kingdom against kingdom, and there will be famines and earthquakes in various places."
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: authorVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="inline"
              >
                &nbsp;– Matthew 24:7
              </motion.span>
            </div>
          )}
        </div>
      </div>

      {/* Earth Image with Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: earthImageVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/home-intro1.webp" 
            alt="Earth from space" 
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
          />
          {/* Gradient Overlay - Bottom fade to black */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
            style={{ 
              background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 70%)'
            }}
          ></div>
        </div>
      </motion.div>

      {/* Down Arrow - Unicode character "ᐯ" */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: arrowVisible ? [0, 1, 0.5, 1] : 0, 
          y: arrowVisible ? [0, 10, 5, 10] : 0
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <div className="text-4xl text-white">ᐯ</div>
      </motion.div>
    </section>
  );
};

export default BibleVerseSection;

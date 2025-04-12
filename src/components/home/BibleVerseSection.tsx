
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BibleVerseSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 20]);
  
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Detect scroll for animation triggers
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/home-intro1.webp" 
          alt="Earth from space" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* Content */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <div className="mb-6">
          <p className="text-base text-white font-din tracking-wider leading-relaxed">
            For nation will rise against nation, and kingdom against kingdom,<br />
            and there will be famines and earthquakes in various places.
          </p>
        </div>
        <div>
          <p className="text-base text-white/80 font-din tracking-wider">– Matthew 24:7</p>
        </div>
      </motion.div>
    </section>
  );
};

export default BibleVerseSection;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const BibleVerseSection: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [authorVisible, setAuthorVisible] = useState(false);
  const [earthImageVisible, setEarthImageVisible] = useState(false);

  // Typing animation for the Bible verse
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setTypingComplete(true);
    }, 2000); // Bible verse typing completes after 2s

    const timer2 = setTimeout(() => {
      setAuthorVisible(true);
    }, 2100); // Author appears 0.1s after verse

    const timer3 = setTimeout(() => {
      setEarthImageVisible(true);
    }, 2200); // Earth image appears 0.1s after author

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden">
      <div className="z-10 max-w-3xl mx-auto">
        <motion.p 
          className="font-din text-sm md:text-base lg:text-xl text-white leading-relaxed mb-6 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: typingComplete ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          For nation shall rise against nation,<br />
          and kingdom against kingdom.<br />
          There shall be famines, and pestilences,<br />
          and earthquakes in various places.
        </motion.p>
        
        <motion.p 
          className="font-din text-xs md:text-sm text-gray-400 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: authorVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          – Matthew 24:7
        </motion.p>
      </div>

      {/* Earth Image */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: earthImageVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/lovable-uploads/home-intro1.webp" 
          alt="Earth from space" 
          className="object-cover w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* Down Arrow */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: earthImageVisible ? [0, 1, 0.5, 1] : 0, 
          y: earthImageVisible ? [0, 10, 5, 10] : 0
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <ArrowDown className="h-10 w-10 text-white" />
      </motion.div>
    </section>
  );
};

export default BibleVerseSection;

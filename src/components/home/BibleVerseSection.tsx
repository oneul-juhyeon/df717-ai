
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const BibleVerseSection: React.FC = () => {
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [authorVisible, setAuthorVisible] = useState(false);
  const [earthImageVisible, setEarthImageVisible] = useState(false);

  // Animation sequence for the Bible verse and author
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setQuoteVisible(true);
    }, 700); // Quote appears after 0.7s

    const timer2 = setTimeout(() => {
      setAuthorVisible(true);
    }, 900); // Author appears 0.2s after quote (0.7s + 0.2s = 0.9s)

    const timer3 = setTimeout(() => {
      setEarthImageVisible(true);
    }, 1000); // Earth image appears 0.1s after author

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden">
      <div className="z-10 max-w-3xl mx-auto">
        <div className="relative">
          <motion.p 
            className="font-din text-sm md:text-base lg:text-xl text-white leading-relaxed mb-2 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: quoteVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            "For nation shall rise against nation,<br />
            and kingdom against kingdom.<br />
            There shall be famines, and pestilences,<br />
            and earthquakes in various places.
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: authorVisible ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              &nbsp;– Matthew 24:7"
            </motion.span>
          </motion.p>
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

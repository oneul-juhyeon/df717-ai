
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HomeHeader from "@/components/home/HomeHeader";

// Counter component for the animated counter
const Counter = ({ value, title }: { value: string; title?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {value}
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

const HomeIntro: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [authorVisible, setAuthorVisible] = useState(false);
  const [earthImageVisible, setEarthImageVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const earthSectionRef = useRef<HTMLDivElement>(null);
  const counterSectionRef = useRef<HTMLDivElement>(null);
  const finalSectionRef = useRef<HTMLDivElement>(null);
  const isEarthInView = useInView(earthSectionRef);
  const isCounterInView = useInView(counterSectionRef);
  const isFinalInView = useInView(finalSectionRef);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  // Detect scroll
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
    <main className="w-full min-h-screen bg-black flex flex-col font-din overflow-x-hidden">
      {/* Header */}
      <div className="w-full mx-0 px-5 sm:px-10 md:px-[154px] z-10">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>

      {/* First Section - Bible Verse with Earth Image */}
      <section 
        ref={earthSectionRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden"
      >
        <div className="z-10 max-w-3xl mx-auto">
          <motion.p 
            className="font-din text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-6 tracking-wider"
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
            className="font-din text-lg md:text-xl text-gray-400 tracking-wider"
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
            src="https://sxcontent9668.azureedge.us/cms-assets/assets/MISSION_EARTH_high_quality_3cf2cabe8e.jpg" 
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

      {/* Counter Section */}
      <section 
        ref={counterSectionRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black"
      >
        <motion.div 
          className="flex items-center justify-center gap-10 md:gap-16 lg:gap-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: isCounterInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Counter value="REV" />
          <Counter value="7" />
          <div className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white">:</div>
          <Counter value="17" />
        </motion.div>
      </section>

      {/* Final Section */}
      <section 
        ref={finalSectionRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="/lovable-uploads/home-intro2.png" 
            alt="Space background" 
            className="object-cover w-full h-full"
          />
        </div>

        <div className="z-10 max-w-3xl mx-auto mt-auto pt-[40vh] flex flex-col items-center">
          <motion.p 
            className="font-din text-xl md:text-2xl text-white leading-relaxed mb-10 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            For thousands of years, the Bible has foretold a time of famine in the last days.
            <br /><br />
            Today, as we live in the end times, we are already witnessing global economic hardship.
          </motion.p>
          
          <motion.p 
            className="font-din text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-10 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            DF717 is a modern-day ark of salvation,
            <br />
            using AI-powered financial innovation
            <br />
            to help prepare for the famine to come.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-16"
          >
            <Link 
              to="/company" 
              className="inline-flex items-center border border-white/70 text-white hover:bg-white/10 transition-colors px-8 py-3 tracking-wider font-din text-lg"
            >
              LEARN MORE ABOUT DF717
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomeIntro;

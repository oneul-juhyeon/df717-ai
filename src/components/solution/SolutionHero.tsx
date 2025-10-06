import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/df717-solution-hero.png";
import AnimatedStatsDisplay from "./AnimatedStatsDisplay";

const SolutionHero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-start overflow-hidden pt-24 md:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="DF717 Solution Hero Background" className="w-full h-full object-cover object-bottom" loading="eager" decoding="async" />
        {/* Gradient Overlay - darker at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <motion.div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-12 md:mt-20 flex-shrink-0" initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1,
      delay: 0.3
    }}>
        <motion.h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-bold text-white mb-6 tracking-tight" style={{
          lineHeight: "1.2"
        }} initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.2,
        delay: 0.5
      }}>
          Automate your investment.
          <br />
          Experience the power of DF717.
        </motion.h1>

        <motion.p className="text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed mb-4 italic opacity-90" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.8
      }}>
          40+ years of technical expertise. 9+ years of market-proven results. All yours in just 3 minutes.
          <br />
          Discover the world's first automated investment program with a 100% loss compensation guarantee.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 1
        }}>
          <motion.button onClick={() => scrollToSection('contact-form')} className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }}>
            Buy Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button onClick={() => scrollToSection('results-section')} className="px-8 py-4 border-2 border-white text-white bg-transparent rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 min-w-[180px]" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }}>
            See Results
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Stats Display - Full Width at Bottom */}
      <div className="relative z-10 w-full mt-auto">
        <AnimatedStatsDisplay locale="en" />
      </div>
    </section>;
};
export default SolutionHero;
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/df717-solution-hero.png";

const SolutionHero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="DF717 Solution Hero Background" className="w-full h-full object-cover" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
      </div>

      {/* Content */}
      <motion.div className="relative z-10 text-center px-6 max-w-6xl mx-auto" initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1,
      delay: 0.3
    }}>
        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight" initial={{
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

        <motion.p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-4 italic" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.8
      }} style={{
        textShadow: "0 2px 20px rgba(0, 0, 0, 0.8)"
      }}>40+ years of technical expertise. 9+ years of market-proven results. All yours in just 3 minutes.
Discover the world's first automated investment program with a 100% loss compensation guarantee.</motion.p>

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
          <motion.button onClick={() => scrollToSection('contact-form')} className="group px-8 py-4 bg-white/90 hover:bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }}>
            Buy Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button onClick={() => scrollToSection('results-section')} className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 min-w-[180px]" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }}>
            See Results
          </motion.button>
        </motion.div>
        
      </motion.div>
    </section>;
};
export default SolutionHero;
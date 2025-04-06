
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TextSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-black py-20 md:py-32 px-6 sm:px-8 md:px-12 relative min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/home-intro2.png" 
          alt="Space background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col space-y-24 md:space-y-32 z-10 text-center">
        <motion.div 
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0px)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease"
          }}
          className="text-center"
        >
          <p className="font-din text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed tracking-wider">
            For thousands of years, the Bible has foretold a time of famine in the last days.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Today, as we live in the end times, we are already witnessing global economic hardship.
          </p>
        </motion.div>
        
        <motion.div 
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0px)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s"
          }}
          className="text-center"
        >
          <p className="font-din text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed tracking-wider">
            DF717 is a modern-day ark of salvation,
            <br />
            using AI-powered financial innovation
            <br />
            to help prepare for the famine to come.
          </p>
        </motion.div>

        <motion.div 
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0px)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s"
          }}
          className="text-center"
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
  );
};

export default TextSection;

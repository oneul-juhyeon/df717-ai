
import React, { useRef } from "react";
import { motion } from "framer-motion";

const TextSection: React.FC = () => {
  const textSectionRef = useRef(null);

  return (
    <section className="w-full bg-[#111111] py-20 md:py-32 px-6 sm:px-8 md:px-12 max-sm:mt-0">
      <div className="max-w-4xl mx-auto flex flex-col space-y-24 md:space-y-32">
        <motion.div 
          className="text-center"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: "-100px"
          }}
          transition={{
            duration: 0.7
          }}
        >
          <p className="font-din text-base sm:text-lg md:text-xl lg:text-2xl text-[#EEEEEE] leading-relaxed tracking-wide">
            For thousands of years, the Bible has foretold a time of famine in the last days.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Today, as we live in the end times, we are already witnessing global economic hardship.
          </p>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: "-100px"
          }}
          transition={{
            duration: 0.7,
            delay: 0.2
          }}
        >
          <p className="font-din text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#EEEEEE] leading-relaxed tracking-wide">
            DF717 is a modern-day ark of salvation,
            <br />
            using AI-powered financial innovation
            <br />
            to help prepare for the famine to come.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TextSection;

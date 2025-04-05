
import React, { useRef } from "react";
import { motion } from "framer-motion";

const TextSection: React.FC = () => {
  const textSectionRef = useRef(null);

  return (
    <section className="w-full bg-[#111111] py-24 px-4">
      <motion.div 
        ref={textSectionRef}
        className="max-w-4xl mx-auto text-center"
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
        <p className="font-sans text-xl md:text-2xl text-[#EEEEEE] mb-12 leading-relaxed">
          For thousands of years, the Bible has foretold a time of famine in the last days.<br />
          Today, as we live in the end times, we are already witnessing global economic hardship.
        </p>
        
        <p className="font-sans text-2xl md:text-3xl font-bold text-[#EEEEEE] leading-relaxed">DF717 is a modern-day ark of salvation, using AI-powered financial innovation to help prepare for the famine to come.</p>
      </motion.div>
    </section>
  );
};

export default TextSection;

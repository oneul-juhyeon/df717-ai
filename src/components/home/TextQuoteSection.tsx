
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextQuoteSection: React.FC = () => {
  const quoteRef = useRef(null);
  const isInView = useInView(quoteRef, { once: true, margin: "-100px" });
  
  return (
    <section ref={quoteRef} className="bg-black text-white py-28 md:py-40 px-6 relative overflow-hidden">
      {/* Background overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70 z-0"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
          className="text-center"
        >
          <p className="text-base text-white font-din tracking-wider leading-relaxed">
            Blessed is the one who considers the poor!<br />
            In the day of trouble the LORD delivers him.
          </p>
          <p className="text-base text-white/80 font-din mt-4 tracking-wider">– Psalm 41:1</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TextQuoteSection;


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextQuoteSection: React.FC = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, { once: true });

  return (
    <motion.section 
      ref={quoteRef}
      className="w-full bg-black relative pt-24 pb-16 md:py-32 px-6 flex items-center justify-center min-h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="max-w-3xl mx-auto text-center z-10">
        <motion.p 
          className="font-din text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-6 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          For thousands of years, the Bible has forewarned of times of famine.<br />
          Today, we are witnessing global economic turmoil unfolding before our eyes.<br />
          The poverty crisis is accelerating, and its impact will only grow more devastating over time.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default TextQuoteSection;

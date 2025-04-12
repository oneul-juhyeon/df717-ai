
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextQuoteSection: React.FC = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, {
    once: true,
    margin: "0px 0px -10% 0px"
  });

  return (
    <section
      ref={quoteRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-black px-6 py-16 font-normal text-base"
    >
      <div className="container max-w-3xl mx-auto text-center">
        <motion.p 
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
          className="font-din text-white leading-relaxed tracking-wider text-base"
        >
          For thousands of years, the Bible has forewarned of times of famine.<br />
          Today, we are witnessing global economic turmoil unfolding before our eyes.<br />
          The poverty crisis is accelerating, and its impact will only grow more devastating over time.
        </motion.p>
      </div>
    </section>
  );
};

export default TextQuoteSection;

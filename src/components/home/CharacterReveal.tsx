
import React from "react";
import { motion } from "framer-motion";

// Character by character animation component
const CharacterReveal = ({ text }: { text: string }) => {
  return (
    <motion.div className="flex items-center justify-center">
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          className="text-7xl md:text-8xl lg:text-9xl font-din tracking-wider text-white inline-block"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.05 * index,
            }
          }}
          viewport={{ once: true }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default CharacterReveal;

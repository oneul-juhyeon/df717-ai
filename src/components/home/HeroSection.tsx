
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-black">
      <div className="w-full">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="/lovable-uploads/matthew_hd.webp" 
          alt="DF717 Hero" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;

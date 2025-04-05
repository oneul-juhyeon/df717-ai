
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-black relative pt-24 max-md:pt-16 max-sm:pt-12 max-sm:h-auto md:h-screen">
      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        src="/lovable-uploads/matthew_hd.webp" 
        alt="DF717 Hero" 
        className="w-full md:h-full object-cover max-sm:h-auto"
      />
    </section>
  );
};

export default HeroSection;


import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-screen bg-black relative pt-24 max-md:pt-16 max-sm:pt-12">
      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        src="/lovable-uploads/matthew_hd.webp" 
        alt="DF717 Hero" 
        className="w-full h-full object-cover md:object-cover sm:object-contain max-sm:object-contain absolute inset-0"
      />
    </section>
  );
};

export default HeroSection;


import React from "react";
import { motion } from "framer-motion";
import { Separator } from "../../ui/separator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ModelPortfolioModules: React.FC = () => {
  const { sectionRef, controls } = useScrollAnimation();

  return (
    <motion.div 
      ref={sectionRef} 
      className="mt-30" 
      initial={{
        opacity: 0,
        y: 20
      }} 
      animate={controls}
    >
      <Separator className="mb-30" />
      <h3 className="text-2xl font-bold text-white mb-6">Model Portfolio Modules</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-9">
        <motion.div 
          className="space-y-4.5" 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={controls} 
          transition={{
            delay: 0.1
          }}
        >
          <h4 className="font-bold text-lg">Stock Selection Module</h4>
          <p className="text-sm text-gray-300">AI/ML selects optimal assets using global market data. We use clustering analysis to identify high-potential representatives from the universe.</p>
        </motion.div>
        
        <motion.div 
          className="space-y-4.5" 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={controls} 
          transition={{
            delay: 0.2
          }}
        >
          <h4 className="font-bold text-lg">Allocation Decision Module</h4>
          <p className="text-sm text-gray-300">AI and financial engineering determine the weights of selected assets. A risk-based module finalizes the most stable portfolio within given constraints.</p>
        </motion.div>
        
        <motion.div 
          className="space-y-4.5" 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={controls} 
          transition={{
            delay: 0.3
          }}
        >
          <h4 className="font-bold text-lg">Daily MP Output</h4>
          <p className="text-sm text-gray-300">Hannah generates daily Market Portfolio (MP) suggestions. Partners receive tailored portfolios based on real-time analysis.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ModelPortfolioModules;

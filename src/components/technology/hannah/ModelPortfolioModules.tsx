import React from "react";
import { motion } from "framer-motion";
import { Separator } from "../../ui/separator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const ModelPortfolioModules: React.FC = () => {
  const {
    sectionRef,
    controls
  } = useScrollAnimation();
  return <motion.div ref={sectionRef} className="mt-16" initial={{
    opacity: 0,
    y: 20
  }} animate={controls}>
      <Separator className="mb-16" />
      <h3 className="text-2xl font-bold text-white mb-8">Model Portfolio Modules</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-9">
        <motion.div className="space-y-4.5" initial={{
        opacity: 0,
        y: 20
      }} animate={controls} transition={{
        delay: 0.1
      }}>
          <h4 className="font-bold text-lg">Stock Selection Module</h4>
          <p className="text-sm text-gray-300">AI/ML selects optimal assets using global market data. We use clustering analysis to identify high-potential representatives from the universe.</p>
        </motion.div>
        
        <motion.div className="space-y-4.5" initial={{
        opacity: 0,
        y: 20
      }} animate={controls} transition={{
        delay: 0.2
      }}>
          <h4 className="font-bold text-lg">Allocation Decision Module</h4>
          <p className="text-sm text-gray-300">AI and financial engineering determine the weights of selected assets. A risk-based module finalizes the most stable portfolio within given constraints.</p>
        </motion.div>
        
        <motion.div className="space-y-4.5" initial={{
        opacity: 0,
        y: 20
      }} animate={controls} transition={{
        delay: 0.3
      }}>
          <h4 className="font-bold text-lg">Daily MP Output</h4>
          <p className="text-sm text-gray-300">To adapt to ever-changing market conditions, HANNAH generates a daily MP (Market Perspective). Based on this real-time MP, Partners receive portfolios optimized for the current market environment.</p>
        </motion.div>
      </div>
    </motion.div>;
};
export default ModelPortfolioModules;

import React from "react";
import { motion } from "framer-motion";
import HannahIntro from "./hannah/HannahIntro";
import ModelPortfolioModules from "./hannah/ModelPortfolioModules";
import TradeExecution from "./hannah/TradeExecution";
import RiskManagement from "./hannah/RiskManagement";

const HannahComponent = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-9">HANNAH</h2>
      
      <motion.div 
        className="space-y-16" 
        initial={{
          opacity: 0
        }} 
        animate={{
          opacity: 1
        }} 
        transition={{
          duration: 0.5
        }}
      >
        <HannahIntro />
        <ModelPortfolioModules />
        <TradeExecution />
        <RiskManagement />
      </motion.div>
    </div>
  );
};

export default HannahComponent;


import React from "react";
import { motion } from "framer-motion";
import { Separator } from "../../ui/separator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RiskManagement: React.FC = () => {
  const { sectionRef, controls } = useScrollAnimation();

  return (
    <motion.div 
      ref={sectionRef} 
      className="mt-16" 
      initial={{
        opacity: 0,
        y: 20
      }} 
      animate={controls}
    >
      <Separator className="mb-16" />
      <h3 className="text-2xl font-bold text-white mb-8">Risk Management</h3>
      
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
          <h4 className="font-bold text-lg">Risk Index Monitoring</h4>
          <p className="text-sm text-gray-300">We inspect and refine portfolio/account risk indicators to protect client assets and advance internal metrics.</p>
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
          <h4 className="font-bold text-lg">Strategy Meetings</h4>
          <p className="text-sm text-gray-300">We regularly review asset allocation performance and manage risks via internal committees.</p>
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
          <h4 className="font-bold text-lg">AI Engine Advancement</h4>
          <p className="text-sm text-gray-300">The DF717 robot and HANNAH engine are constantly evolving. R&D efforts continue to enhance asset allocation technologies.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RiskManagement;

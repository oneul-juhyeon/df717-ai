
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "../../ui/separator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TradeExecution: React.FC = () => {
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
      <h3 className="text-2xl font-bold text-white mb-6">Trade Execution & Monitoring</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-9">
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
          <h4 className="font-bold text-lg">Auto-Trading Module</h4>
          <p className="text-sm text-gray-300">DF717 and HANNAH automatically trade selected assets per account. AI adjusts order timing while treating all clients equally.</p>
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
          <h4 className="font-bold text-lg">Real-Time Monitoring</h4>
          <p className="text-sm text-gray-300">We monitor all trades and accounts in real time to prevent issues. Account balance and trade status are updated via PC or mobile.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TradeExecution;

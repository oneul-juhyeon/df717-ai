
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Separator } from "@/components/ui/separator";

const HannahSection: React.FC = () => {
  const { sectionRef, controls } = useScrollAnimation();

  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-9 text-center">HANNAH</h2>
      
      <motion.div 
        className="space-y-12" 
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
        <motion.div 
          ref={sectionRef} 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={controls}
        >
          <p className="text-gray-300 leading-relaxed mb-16 text-center">
            HANNAH is the core AI engine of DF717, developed with proprietary methodology and advanced machine learning.
          </p>
          
          <div className="mb-16 text-white">
            <p className="text-lg mb-16 text-center">Hannah is symbolic of patience and answered prayer. Investing demands perseverance through uncertainty. HANNAH responds with trusted strategies and reliable analysis to bring peace and results.</p>
          </div>
        </motion.div>

        {/* Model Portfolio Modules Section */}
        <motion.div 
          className="mt-16" 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.5,
            delay: 0.1
          }}
        >
          <Separator className="mb-16" />
          <h3 className="text-2xl font-bold text-white mb-8">Model Portfolio Modules</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Stock Selection Module</h4>
              <p className="text-sm text-gray-300">AI/ML selects optimal assets using global market data. We use clustering analysis to identify high-potential representatives from the universe.</p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Allocation Decision Module</h4>
              <p className="text-sm text-gray-300">AI and financial engineering determine the weights of selected assets. A risk-based module finalizes the most stable portfolio within given constraints.</p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Daily MP Output</h4>
              <p className="text-sm text-gray-300">Hannah generates daily Market Portfolio (MP) suggestions. Partners receive tailored portfolios based on real-time analysis.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Trade Execution & Monitoring Section */}
        <motion.div 
          className="mt-16" 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
        >
          <Separator className="mb-16" />
          <h3 className="text-2xl font-bold text-white mb-8">Trade Execution & Monitoring</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Auto-Trading Module</h4>
              <p className="text-sm text-gray-300">DF717 and HANNAH automatically trade selected assets per account. AI adjusts order timing while treating all clients equally.</p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Real-Time Monitoring</h4>
              <p className="text-sm text-gray-300">We monitor all trades and accounts in real time to prevent issues. Account balance and trade status are updated via PC or mobile.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Risk Management Section */}
        <motion.div 
          className="mt-16" 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Separator className="mb-16" />
          <h3 className="text-2xl font-bold text-white mb-8">Risk Management</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Risk Index Monitoring</h4>
              <p className="text-sm text-gray-300">We inspect and refine portfolio/account risk indicators to protect client assets and advance internal metrics.</p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Strategy Meetings</h4>
              <p className="text-sm text-gray-300">We regularly review asset allocation performance and manage risks via internal committees.</p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-lg">AI Engine Advancement</h4>
              <p className="text-sm text-gray-300">The DF717 robot and HANNAH engine are constantly evolving. R&D efforts continue to enhance asset allocation technologies.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HannahSection;


import React from "react";
import { motion } from "framer-motion";

const IsaacComponent = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6">HANNAH</h2>
      
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-gray-300 leading-relaxed mb-8">
            HANNAH is the core AI engine of DF717, developed with proprietary methodology and advanced machine learning.
          </p>
          
          <div className="mb-12 text-white">
            <h3 className="text-xl font-bold mb-3">content-HANNAH</h3>
            <p className="text-lg mb-1"><span className="text-gray-300">Intelligent Strategic Asset Allocation Core</span></p>
            <p className="text-lg mb-8">Hannah is symbolic of patience and answered prayer. Investing demands perseverance through uncertainty. HANNAH responds with trusted strategies and reliable analysis to bring peace and results.</p>
            <div className="w-full h-[1px] bg-[#333333]"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Model Portfolio Modules</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
            <div className="space-y-3">
              <p className="text-sm text-gray-400">1</p>
              <h4 className="font-bold text-lg">Stock Selection Module</h4>
              <p className="text-sm text-gray-300">AI/ML selects optimal assets using global market data. We use clustering analysis to identify high-potential representatives from the universe.</p>
              <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-400">2</p>
              <h4 className="font-bold text-lg">Allocation Decision Module</h4>
              <p className="text-sm text-gray-300">AI and financial engineering determine the weights of selected assets. A risk-based module finalizes the most stable portfolio within given constraints.</p>
              <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-400">3</p>
              <h4 className="font-bold text-lg">Daily MP Output</h4>
              <p className="text-sm text-gray-300">Hannah generates daily Market Portfolio (MP) suggestions. Partners receive tailored portfolios based on real-time analysis.</p>
              <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Trade Execution & Monitoring</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-3">
              <p className="text-sm text-gray-400">1</p>
              <h4 className="font-bold text-lg">Auto-Trading Module</h4>
              <p className="text-sm text-gray-300">DF717 and HANNAH automatically trade selected assets per account. AI adjusts order timing while treating all clients equally.</p>
              <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-400">2</p>
              <h4 className="font-bold text-lg">Real-Time Monitoring</h4>
              <p className="text-sm text-gray-300">We monitor all trades and accounts in real time to prevent issues. Account balance and trade status are updated via PC or mobile.</p>
              <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Risk Management</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
            <div className="space-y-3">
              <p className="text-sm text-gray-400">1</p>
              <h4 className="font-bold text-lg">Risk Index Monitoring</h4>
              <p className="text-sm text-gray-300">We inspect and refine portfolio/account risk indicators to protect client assets and advance internal metrics.</p>
              <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-400">2</p>
              <h4 className="font-bold text-lg">Strategy Meetings</h4>
              <p className="text-sm text-gray-300">We regularly review asset allocation performance and manage risks via internal committees.</p>
              <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-400">3</p>
              <h4 className="font-bold text-lg">AI Engine Advancement</h4>
              <p className="text-sm text-gray-300">The DF717 robot and HANNAH engine are constantly evolving. R&D efforts continue to enhance asset allocation technologies.</p>
              <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IsaacComponent;

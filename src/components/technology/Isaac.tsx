
import React from "react";
import { motion } from "framer-motion";

const IsaacComponent = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-9">HANNAH</h2>
      
      <motion.div 
        className="space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-gray-300 leading-relaxed mb-12">
            HANNAH is the core AI engine of DF717, developed with proprietary methodology and advanced machine learning.
          </p>
          
          <div className="mb-18 text-white">
            <h3 className="text-xl font-bold mb-4.5">content-HANNAH</h3>
            <p className="text-lg mb-1.5"><span className="text-gray-300">Intelligent Strategic Asset Allocation Core</span></p>
            <p className="text-lg mb-12">Hannah is symbolic of patience and answered prayer. Investing demands perseverance through uncertainty. HANNAH responds with trusted strategies and reliable analysis to bring peace and results.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
          <h3 className="text-2xl font-bold text-white mb-6">Model Portfolio Modules</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-9">
            <div className="space-y-4.5">
              <p className="text-sm text-gray-400">1</p>
              <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
              <h4 className="font-bold text-lg">Stock Selection Module</h4>
              <p className="text-sm text-gray-300">AI/ML selects optimal assets using global market data. We use clustering analysis to identify high-potential representatives from the universe.</p>
            </div>
            
            <div className="space-y-4.5">
              <p className="text-sm text-gray-400">2</p>
              <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
              <h4 className="font-bold text-lg">Allocation Decision Module</h4>
              <p className="text-sm text-gray-300">AI and financial engineering determine the weights of selected assets. A risk-based module finalizes the most stable portfolio within given constraints.</p>
            </div>
            
            <div className="space-y-4.5">
              <p className="text-sm text-gray-400">3</p>
              <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
              <h4 className="font-bold text-lg">Daily MP Output</h4>
              <p className="text-sm text-gray-300">Hannah generates daily Market Portfolio (MP) suggestions. Partners receive tailored portfolios based on real-time analysis.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
          <h3 className="text-2xl font-bold text-white mb-6">Trade Execution & Monitoring</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-9">
            <div className="space-y-4.5">
              <p className="text-sm text-gray-400">1</p>
              <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
              <h4 className="font-bold text-lg">Auto-Trading Module</h4>
              <p className="text-sm text-gray-300">DF717 and HANNAH automatically trade selected assets per account. AI adjusts order timing while treating all clients equally.</p>
            </div>
            
            <div className="space-y-4.5">
              <p className="text-sm text-gray-400">2</p>
              <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
              <h4 className="font-bold text-lg">Real-Time Monitoring</h4>
              <p className="text-sm text-gray-300">We monitor all trades and accounts in real time to prevent issues. Account balance and trade status are updated via PC or mobile.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
          <h3 className="text-2xl font-bold text-white mb-6">Risk Management</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-9">
            <div className="space-y-4.5">
              <p className="text-sm text-gray-400">1</p>
              <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
              <h4 className="font-bold text-lg">Risk Index Monitoring</h4>
              <p className="text-sm text-gray-300">We inspect and refine portfolio/account risk indicators to protect client assets and advance internal metrics.</p>
            </div>
            
            <div className="space-y-4.5">
              <p className="text-sm text-gray-400">2</p>
              <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
              <h4 className="font-bold text-lg">Strategy Meetings</h4>
              <p className="text-sm text-gray-300">We regularly review asset allocation performance and manage risks via internal committees.</p>
            </div>
            
            <div className="space-y-4.5">
              <p className="text-sm text-gray-400">3</p>
              <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
              <h4 className="font-bold text-lg">AI Engine Advancement</h4>
              <p className="text-sm text-gray-300">The DF717 robot and HANNAH engine are constantly evolving. R&D efforts continue to enhance asset allocation technologies.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IsaacComponent;

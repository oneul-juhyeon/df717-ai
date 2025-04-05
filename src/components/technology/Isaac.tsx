
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
          <p className="text-gray-300 leading-relaxed">
            HANNAH is the core AI engine of DF717, developed with proprietary methodology and advanced machine learning.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6 my-8"
        >
          <h4 className="text-xl font-bold mb-3 text-white">content-HANNAH</h4>
          <p className="text-gray-300 mb-3">
            <span className="text-red-400 font-bold">Intelligent Strategic<br />Asset Allocation Core</span>
            <br />
            <span className="text-lg">Hannah is symbolic of patience and answered prayer. Investing demands perseverance through uncertainty. HANNAH responds with trusted strategies and reliable analysis to bring peace and results.</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            Model Portfolio Modules
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              className="bg-[#232323] p-4 rounded border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h5 className="font-bold text-red-400">1</h5>
              <h6 className="font-bold text-white mb-1">Stock Selection Module</h6>
              <p className="text-sm text-gray-400">AI/ML selects optimal assets using global market data. We use clustering analysis to identify high-potential representatives from the universe.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#232323] p-4 rounded border border-white/10"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h5 className="font-bold text-red-400">2</h5>
              <h6 className="font-bold text-white mb-1">Allocation Decision Module</h6>
              <p className="text-sm text-gray-400">AI and financial engineering determine the weights of selected assets. A risk-based module finalizes the most stable portfolio within given constraints.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#232323] p-4 rounded border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h5 className="font-bold text-red-400">3</h5>
              <h6 className="font-bold text-white mb-1">Daily MP Output</h6>
              <p className="text-sm text-gray-400">Hannah generates daily Market Portfolio (MP) suggestions. Partners receive tailored portfolios based on real-time analysis.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            Trade Execution & Monitoring
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              className="bg-[#232323] p-4 rounded border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h5 className="font-bold text-red-400">1</h5>
              <h6 className="font-bold text-white mb-1">Auto-Trading Module</h6>
              <p className="text-sm text-gray-400">DF717 and HANNAH automatically trade selected assets per account. AI adjusts order timing while treating all clients equally.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#232323] p-4 rounded border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h5 className="font-bold text-red-400">2</h5>
              <h6 className="font-bold text-white mb-1">Real-Time Monitoring</h6>
              <p className="text-sm text-gray-400">We monitor all trades and accounts in real time to prevent issues. Account balance and trade status are updated via PC or mobile.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            Risk Management
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              className="bg-[#232323] p-4 rounded border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h5 className="font-bold text-red-400">1</h5>
              <h6 className="font-bold text-white mb-1">Risk Index Monitoring</h6>
              <p className="text-sm text-gray-400">We inspect and refine portfolio/account risk indicators to protect client assets and advance internal metrics.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#232323] p-4 rounded border border-white/10"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h5 className="font-bold text-red-400">2</h5>
              <h6 className="font-bold text-white mb-1">Strategy Meetings</h6>
              <p className="text-sm text-gray-400">We regularly review asset allocation performance and manage risks via internal committees.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#232323] p-4 rounded border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <h5 className="font-bold text-red-400">3</h5>
              <h6 className="font-bold text-white mb-1">AI Engine Advancement</h6>
              <p className="text-sm text-gray-400">The DF717 robot and HANNAH engine are constantly evolving. R&D efforts continue to enhance asset allocation technologies.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IsaacComponent;

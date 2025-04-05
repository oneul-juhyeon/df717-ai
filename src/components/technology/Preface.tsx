
import React from "react";
import { motion } from "framer-motion";

const PrefaceComponent = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6">DF717</h2>
      
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
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            DF717
          </h3>
          <p className="text-gray-300 leading-relaxed">
            DF717 is a robot designed to provide simplified AI investment services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6 my-8"
        >
          <h4 className="text-xl font-bold mb-3 text-white">content-DF717</h4>
          <p className="text-gray-300 mb-3">
            <span className="text-red-400 font-bold">DF717 = Destiny Finance 717</span>
            <br />
            <span className="text-lg">All investment uncertainty disturbs our inner peace and undermines true financial shalom. DF717 is a robot that helps investors manage uncertainty with precision and gain peace of mind.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="bg-[#232323] p-4 rounded border border-white/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h5 className="font-bold text-red-400">DF717-Account</h5>
            <p className="text-sm text-gray-400">Each customer and account can operate a unique portfolio. The system is stable enough to manage tens of thousands of accounts simultaneously.</p>
          </motion.div>
          
          <motion.div 
            className="bg-[#232323] p-4 rounded border border-white/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h5 className="font-bold text-red-400">DF717-Container</h5>
            <p className="text-sm text-gray-400">This is the platform where investment logic operates and necessary data is processed. It enables flexible AI-powered investment logic execution.</p>
          </motion.div>
          
          <motion.div 
            className="bg-[#232323] p-4 rounded border border-white/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h5 className="font-bold text-red-400">DF717-Database</h5>
            <p className="text-sm text-gray-400">Processing and cleansing data is essential for strategy operation and simulation. DF717 ensures fast and accurate data handling.</p>
          </motion.div>
          
          <motion.div 
            className="bg-[#232323] p-4 rounded border border-white/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h5 className="font-bold text-red-400">DF717-Web</h5>
            <p className="text-sm text-gray-400">Provides real-time operation monitoring, account status, and transaction updates. Partners can check and give instructions through web or mobile.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrefaceComponent;

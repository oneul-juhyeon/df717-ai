
import React from "react";
import { motion } from "framer-motion";

const PrefaceComponent = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6">DF717</h2>
      
      <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <p className="text-gray-300 leading-relaxed mb-8">
            DF717 is a robot designed to provide simplified AI investment services.
          </p>
          
          <div className="mb-12 text-white">
            <h3 className="text-xl font-bold mb-3">content-DF717</h3>
            <p className="text-lg mb-1"><span className="text-gray-300">DF717 = Destiny Finance 717</span></p>
            <p className="text-lg mb-8">All investment uncertainty disturbs our inner peace and undermines true financial shalom. DF717 is a robot that helps investors manage uncertainty with precision and gain peace of mind.</p>
            <div className="w-full h-[1px] bg-[#333333]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-3">
            <h4 className="font-bold text-lg">DF717-Account</h4>
            <p className="text-gray-300">Each customer and account can operate a unique portfolio. The system is stable enough to manage tens of thousands of accounts simultaneously.</p>
            <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-3">
            <h4 className="font-bold text-lg">DF717-Container</h4>
            <p className="text-gray-300">This is the platform where investment logic operates and necessary data is processed. It enables flexible AI-powered investment logic execution.</p>
            <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="space-y-3">
            <h4 className="font-bold text-lg">DF717-Database</h4>
            <p className="text-gray-300">Processing and cleansing data is essential for strategy operation and simulation. DF717 ensures fast and accurate data handling.</p>
            <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="space-y-3">
            <h4 className="font-bold text-lg">DF717-Web</h4>
            <p className="text-gray-300">Provides real-time operation monitoring, account status, and transaction updates. Partners can check and give instructions through web or mobile.</p>
            <div className="w-full h-[1px] bg-[#333333] mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrefaceComponent;

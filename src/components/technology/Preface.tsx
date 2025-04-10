
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Cog, Container, LineChart, BarChart } from "lucide-react";

const PrefaceComponent = () => {
  // Animation refs and controls for scroll-triggered animations
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const inView1 = useInView(sectionRef1, {
    once: true,
    amount: 0.1
  });
  const inView2 = useInView(sectionRef2, {
    once: true,
    amount: 0.1
  });
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  // Trigger animations when sections come into view
  useEffect(() => {
    if (inView1) controls1.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    });
  }, [inView1, controls1]);
  useEffect(() => {
    if (inView2) controls2.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    });
  }, [inView2, controls2]);

  return (
    <div className="max-w-4xl mx-auto text-white">
      <motion.div 
        className="flex flex-col mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          DF717
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          DF717 is a robot designed to provide simplified AI investment services.
        </motion.p>
      </motion.div>
      
      {/* Full-width divider line below the section description */}
      <motion.div 
        className="w-full h-[1px] bg-[#333333] mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></motion.div>
      
      <motion.div 
        ref={sectionRef2} 
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls2} 
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="mr-4">
                <Cog className="text-white" size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-bold">DF717-Account</h3>
            </div>
            <p className="text-gray-300">Each customer and account can operate a unique portfolio. The system is stable enough to manage tens of thousands of accounts simultaneously.</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls2} 
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="mr-4">
                <Container className="text-white" size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-bold">DF717-Container</h3>
            </div>
            <p className="text-gray-300">This is the platform where investment logic operates and necessary data is processed. It enables flexible AI-powered investment logic execution.</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls2} 
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="mr-4">
                <LineChart className="text-white" size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-bold">DF717-Database</h3>
            </div>
            <p className="text-gray-300">Processing and cleansing data is essential for strategy operation and simulation. DF717 ensures fast and accurate data handling.</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls2} 
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="mr-4">
                <BarChart className="text-white" size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-bold">DF717-Web</h3>
            </div>
            <p className="text-gray-300">Provides real-time operation monitoring, account status, and transaction updates. Partners can check and give instructions through web or mobile.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrefaceComponent;

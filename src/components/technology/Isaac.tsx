import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Separator } from "../ui/separator";

const IsaacComponent = () => {
  // Animation refs and controls for scroll-triggered animations
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const inView1 = useInView(sectionRef1, {
    once: true,
    amount: 0.1
  });
  const inView2 = useInView(sectionRef2, {
    once: true,
    amount: 0.1
  });
  const inView3 = useInView(sectionRef3, {
    once: true,
    amount: 0.1
  });
  const inView4 = useInView(sectionRef4, {
    once: true,
    amount: 0.1
  });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

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
  useEffect(() => {
    if (inView3) controls3.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    });
  }, [inView3, controls3]);
  useEffect(() => {
    if (inView4) controls4.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    });
  }, [inView4, controls4]);
  return <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-9">HANNAH</h2>
      
      <motion.div className="space-y-12" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
        <motion.div ref={sectionRef1} initial={{
        opacity: 0,
        y: 20
      }} animate={controls1}>
          <p className="text-gray-300 leading-relaxed mb-30">
            HANNAH is the core AI engine of DF717, developed with proprietary methodology and advanced machine learning.
          </p>
          
          <div className="mb-30 text-white">
            <p className="text-lg mb-30">Hannah is symbolic of patience and answered prayer. Investing demands perseverance through uncertainty. HANNAH responds with trusted strategies and reliable analysis to bring peace and results.</p>
          </div>
        </motion.div>

        <motion.div ref={sectionRef2} className="mt-30" initial={{
        opacity: 0,
        y: 20
      }} animate={controls2}>
          <Separator className="mb-30" />
          <h3 className="text-2xl font-bold text-white mb-6">Model Portfolio Modules</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-9">
            <motion.div className="space-y-4.5" initial={{
            opacity: 0,
            y: 20
          }} animate={controls2} transition={{
            delay: 0.1
          }}>
              <h4 className="font-bold text-lg">Stock Selection Module</h4>
              <p className="text-sm text-gray-300">AI/ML selects optimal assets using global market data. We use clustering analysis to identify high-potential representatives from the universe.</p>
            </motion.div>
            
            <motion.div className="space-y-4.5" initial={{
            opacity: 0,
            y: 20
          }} animate={controls2} transition={{
            delay: 0.2
          }}>
              <h4 className="font-bold text-lg">Allocation Decision Module</h4>
              <p className="text-sm text-gray-300">AI and financial engineering determine the weights of selected assets. A risk-based module finalizes the most stable portfolio within given constraints.</p>
            </motion.div>
            
            <motion.div className="space-y-4.5" initial={{
            opacity: 0,
            y: 20
          }} animate={controls2} transition={{
            delay: 0.3
          }}>
              <h4 className="font-bold text-lg">Daily MP Output</h4>
              <p className="text-sm text-gray-300">Hannah generates daily Market Portfolio (MP) suggestions. Partners receive tailored portfolios based on real-time analysis.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div ref={sectionRef3} className="mt-30" initial={{
        opacity: 0,
        y: 20
      }} animate={controls3}>
          <Separator className="mb-30" />
          <h3 className="text-2xl font-bold text-white mb-6">Trade Execution & Monitoring</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-9">
            <motion.div className="space-y-4.5" initial={{
            opacity: 0,
            y: 20
          }} animate={controls3} transition={{
            delay: 0.1
          }}>
              <h4 className="font-bold text-lg">Auto-Trading Module</h4>
              <p className="text-sm text-gray-300">DF717 and HANNAH automatically trade selected assets per account. AI adjusts order timing while treating all clients equally.</p>
            </motion.div>
            
            <motion.div className="space-y-4.5" initial={{
            opacity: 0,
            y: 20
          }} animate={controls3} transition={{
            delay: 0.2
          }}>
              <h4 className="font-bold text-lg">Real-Time Monitoring</h4>
              <p className="text-sm text-gray-300">We monitor all trades and accounts in real time to prevent issues. Account balance and trade status are updated via PC or mobile.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div ref={sectionRef4} className="mt-30" initial={{
        opacity: 0,
        y: 20
      }} animate={controls4}>
          <Separator className="mb-30" />
          <h3 className="text-2xl font-bold text-white mb-6">Risk Management</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-9">
            <motion.div className="space-y-4.5" initial={{
            opacity: 0,
            y: 20
          }} animate={controls4} transition={{
            delay: 0.1
          }}>
              <h4 className="font-bold text-lg">Risk Index Monitoring</h4>
              <p className="text-sm text-gray-300">We inspect and refine portfolio/account risk indicators to protect client assets and advance internal metrics.</p>
            </motion.div>
            
            <motion.div className="space-y-4.5" initial={{
            opacity: 0,
            y: 20
          }} animate={controls4} transition={{
            delay: 0.2
          }}>
              <h4 className="font-bold text-lg">Strategy Meetings</h4>
              <p className="text-sm text-gray-300">We regularly review asset allocation performance and manage risks via internal committees.</p>
            </motion.div>
            
            <motion.div className="space-y-4.5" initial={{
            opacity: 0,
            y: 20
          }} animate={controls4} transition={{
            delay: 0.3
          }}>
              <h4 className="font-bold text-lg">AI Engine Advancement</h4>
              <p className="text-sm text-gray-300">The DF717 robot and HANNAH engine are constantly evolving. R&D efforts continue to enhance asset allocation technologies.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>;
};
export default IsaacComponent;

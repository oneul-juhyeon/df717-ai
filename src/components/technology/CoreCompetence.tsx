import React from "react";
import { Brain, GraduationCap, Search, Lock } from "lucide-react";
import { motion } from "framer-motion";
const CoreCompetence: React.FC = () => {
  return <div className="max-w-4xl mx-auto">
      <motion.div className="flex flex-col md:flex-row md:justify-between mb-12" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <motion.h2 className="text-4xl font-bold text-white mb-6 md:mb-0 md:w-1/2 pl-0" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          CORE COMPETENCE
        </motion.h2>
        <motion.p className="text-gray-300 md:w-1/2 text-base" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }}>DF717 is shaping a unique competitive edge by leading financial innovation through its self-developed AI robot(DF717) and the HANNAH engine.</motion.p>
      </motion.div>
      
      {/* Full-width divider line below the section description */}
      <div className="w-full h-[1px] bg-[#333333] mb-24"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mt-12">
        <motion.div className="space-y-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="mr-4">
                <Brain className="text-white" size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-bold">Proprietary AI Investment Engine</h3>
            </div>
            <p className="text-gray-300">We have developed and operate our own AI engine, HANNAH, and the DF717 robot. Their stability has been proven through 10 years of backtesting and live trading.</p>
          </div>
        </motion.div>
        
        <motion.div className="space-y-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="mr-4">
                <GraduationCap className="text-white" size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-bold">Top-Tier Research Talent</h3>
            </div>
            <p className="text-gray-300">We hire only those who pass rigorous HR criteria in terms of integrity, personality, and expertise across various fields.</p>
          </div>
        </motion.div>
        
        <motion.div className="space-y-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }}>
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="mr-4">
                <Search className="text-white" size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-bold">Proprietary Research Methodology</h3>
            </div>
            <p className="text-gray-300">We eliminate errors and future-reference issues during AI development, ensuring continuous validation of all data and research outcomes.</p>
          </div>
        </motion.div>
        
        <motion.div className="space-y-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }}>
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="mr-4">
                <Lock className="text-white" size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-white font-bold">Real-Time Monitoring & Security</h3>
            </div>
            <p className="text-gray-300">Our real-time monitoring system detects and responds to anomalies during operation, preventing order errors and ensuring secure execution.</p>
          </div>
        </motion.div>
      </div>
    </div>;
};
export default CoreCompetence;
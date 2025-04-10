
import React from "react";
import { motion } from "framer-motion";
import { Cog, Container, LineChart, BarChart } from "lucide-react";

const DF717Section: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-9 text-center">DF717</h2>
      
      <motion.div className="space-y-12" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }}>
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }}>
          <p className="text-gray-300 leading-relaxed mb-30 text-center">
            DF717 is a robot designed to provide simplified AI investment services.
          </p>
          
          <div className="mb-30 text-white">
            <p className="text-lg mb-30 text-center">Each customer and account can operate a unique portfolio. The system is stable enough to manage tens of thousands of accounts simultaneously.</p>
          </div>
        </motion.div>

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
                  <Cog className="text-white" size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-white font-bold">DF717-Account</h3>
              </div>
              <p className="text-gray-300">Each customer and account can operate a unique portfolio. The system is stable enough to manage tens of thousands of accounts simultaneously.</p>
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
                  <Container className="text-white" size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-white font-bold">DF717-Container</h3>
              </div>
              <p className="text-gray-300">This is the platform where investment logic operates and necessary data is processed. It enables flexible AI-powered investment logic execution.</p>
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
                  <LineChart className="text-white" size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-white font-bold">DF717-Database</h3>
              </div>
              <p className="text-gray-300">Processing and cleansing data is essential for strategy operation and simulation. DF717 ensures fast and accurate data handling.</p>
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
                  <BarChart className="text-white" size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-white font-bold">DF717-Web</h3>
              </div>
              <p className="text-gray-300">Provides real-time operation monitoring, account status, and transaction updates. Partners can check and give instructions through web or mobile.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DF717Section;

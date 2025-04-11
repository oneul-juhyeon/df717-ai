import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cog, Container, LineChart, BarChart } from "lucide-react";
import { Separator } from "../ui/separator";
const Df717Component = () => {
  const {
    sectionRef,
    controls
  } = useScrollAnimation();
  return <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-9 text-center">DF717</h2>
      
      <motion.div className="space-y-16" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
        <motion.div ref={sectionRef} initial={{
        opacity: 0,
        y: 20
      }} animate={controls}>
          <p className="text-gray-300 leading-relaxed mb-16 text-center">DF717 is a AI robot designed to provide automated investment services.</p>
          
          <Separator className="mb-16" />
          
          <div className="mb-16 text-white">
            
          </div>
        </motion.div>

        {/* Grid section with icons and descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
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
              <p className="text-gray-300">Each client and account is automatically matched with an optimal portfolio based on their investment amount.</p>
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
              <p className="text-gray-300">This is a robot where investment logic is actually executed and necessary data is processed in real time. It implements a data-driven investment approach through an engine, enabling diverse operational strategies.</p>
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
              <p className="text-gray-300">Processing and cleansing data is a critical foundation for both strategy execution and simulation. Through these steps, we ensure accurate and efficient management of diverse datasets.</p>
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
              <p className="text-gray-300">We provide real-time access to trading activity and account status, allowing clients to monitor their asset management through both web and mobile platforms.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>;
};
export default Df717Component;
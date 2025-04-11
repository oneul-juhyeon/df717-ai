import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const HannahIntro: React.FC = () => {
  const {
    sectionRef,
    controls
  } = useScrollAnimation();
  return <motion.div ref={sectionRef} initial={{
    opacity: 0,
    y: 20
  }} animate={controls}>
      <p className="text-gray-300 leading-relaxed mb-16">Hannah is a figure in the Bible known for her perseverance and faithful prayers through hardship — and ultimately, for receiving a powerful answer. We believe that investing, too, requires patience and steady analysis over time. The Hannah Engine embodies this philosophy: with its technical support and long-term commitment, we believe you can receive the answers you’ve been waiting for — just like Hannah.</p>
      
      <div className="mb-16 text-white">
        <p className="text-lg mb-16">Hannah is symbolic of patience and answered prayer. Investing demands perseverance through uncertainty. HANNAH responds with trusted strategies and reliable analysis to bring peace and results.</p>
      </div>
    </motion.div>;
};
export default HannahIntro;
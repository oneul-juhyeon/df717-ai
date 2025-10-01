import React from "react";
import { motion } from "framer-motion";
import { Brain, TrendingUp, Shield, CheckCircle, FileSearch, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Engine HANNAH",
    description: "Advanced AI-powered trading engine that analyzes market data in real-time and executes optimized strategies.",
  },
  {
    icon: TrendingUp,
    title: "20+ Years of Backtesting Data",
    description: "Proven track record with extensive historical data analysis ensuring reliable performance.",
  },
  {
    icon: Shield,
    title: "Real-time Monitoring & Security",
    description: "24/7 system monitoring with enterprise-grade security protocols protecting your investments.",
  },
  {
    icon: CheckCircle,
    title: "Proven System Reliability",
    description: "Battle-tested infrastructure with consistent uptime and stable performance in all market conditions.",
  },
  {
    icon: FileSearch,
    title: "Proprietary Research Methodology",
    description: "Unique quantitative research approach developed through years of financial market analysis.",
  },
  {
    icon: Users,
    title: "Top-tier Research Talent",
    description: "Team of expert quants and AI researchers continuously improving our trading algorithms.",
  },
];

const SolutionFeatures: React.FC = () => {
  return (
    <section className="w-full bg-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why DF717?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)",
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionFeatures;

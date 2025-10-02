import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import myfxbookImg from "@/assets/df717-myfxbook-9years-results.png";

const SolutionResults: React.FC = () => {
  return (
    <section id="results-section" className="w-full bg-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Text Content (40%) */}
          <motion.div
            className="w-full lg:w-[40%] space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
              RESULTS
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              MyfxBook
            </h2>

            <p className="text-xl md:text-2xl text-gray-300">
              Moderate settings +187% CAGR in 9 years
            </p>

            <p className="text-sm text-gray-400">
              <span className="text-red-500">*</span>Past performance does not guarantee future results.
            </p>

            <motion.a
              href="https://df717.notion.site/df717-monitoring-accounts?source"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              See Results
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Right Side - Image (60%) */}
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:shadow-[0_0_70px_rgba(6,182,212,0.5)] transition-all duration-500">
              <img
                src={myfxbookImg}
                alt="MyfxBook Results - DF717 Automated Trading Performance showing +187% CAGR over 9 years"
                className="w-full h-auto object-contain"
                loading="lazy" decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionResults;

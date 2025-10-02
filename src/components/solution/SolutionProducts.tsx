import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dapPlusImage from "@/assets/df717-solution-pro-mockup.png";
import dapPremiumImage from "@/assets/df717-solution-premium-mockup.png";

const products = [{
  name: "DAP-Plus",
  model: "DF717-FXEU-063-O0W",
  image: dapPlusImage,
  features: ["Professional Trading Interface", "Advanced Risk Management", "Real-time Market Analysis", "Multi-asset Support"]
}, {
  name: "DAP-Premium",
  model: "DF717-FXAU-061-J0G",
  image: dapPremiumImage,
  features: ["Premium AI Strategies", "Enhanced Security Features", "Priority Customer Support", "Extended Backtesting Data"]
}];
const SolutionProducts: React.FC = () => {
  return <section className="w-full bg-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <motion.div className="max-w-7xl mx-auto" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }}>
        <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>Our Solutions</motion.h2>

        <motion.p className="text-xl text-gray-300 text-center mb-16" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>솔루션 안내</motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => <motion.div key={product.model} className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(6, 182, 212, 0.25)"
        }}>
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                <motion.img src={product.image} alt={`${product.name} - Automated Trading Solution`} className="w-full h-auto object-contain rounded-2xl" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.4
            }} />
              </div>

              {/* Product Details */}
              <div className="p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {product.name}
                </h3>

                <p className="text-cyan-400 text-sm md:text-base mb-4 font-mono">
                  {product.model}
                </p>

                <p className="text-gray-300 text-lg mb-6">
                  Automated Trading Solution
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => <li key={idx} className="flex items-start text-gray-300">
                      <span className="text-cyan-400 mr-3 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>)}
                </ul>

                {/* Learn More Button */}
                <Link to="/contact">
                  <motion.button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }}>
                    자세히 보기
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>)}
        </div>
      </motion.div>
    </section>;
};
export default SolutionProducts;
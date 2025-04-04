
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeatureSection: React.FC = () => {
  const featureSectionRef = useRef(null);
  
  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12">
      <motion.div 
        ref={featureSectionRef}
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Data Driven, Life Inspired</h2>
        <div className="w-60 h-1 bg-red-600 mx-auto mb-12"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-medium text-white border-l-2 border-red-600 pl-4">Technologies</h3>
          <p className="text-gray-300 leading-relaxed">
            With years of proven experience in the financial market, we are 
            continuously developing cutting-edge technologies to transform the industry.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our proprietary algorithms and machine learning models can identify patterns 
            that humans might miss, giving you a competitive edge in trading.
          </p>
          <motion.div 
            className="pt-4"
            whileHover={{ x: 5 }}
          >
            <Link to="/technology">
              <Button className="bg-transparent hover:bg-red-600 border border-red-600 text-white px-8 py-6 rounded-none transition-all">
                Explore Technology
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-medium text-white border-l-2 border-red-600 pl-4">DF717 & Company</h3>
          <p className="text-gray-300 leading-relaxed">
            We are a team of experts in AI, machine learning, and financial markets, 
            dedicated to bringing innovative solutions to traders worldwide.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to democratize access to sophisticated trading algorithms, 
            making them accessible to both institutions and individual traders.
          </p>
          <motion.div 
            className="pt-4"
            whileHover={{ x: 5 }}
          >
            <Link to="/company">
              <Button className="bg-transparent hover:bg-red-600 border border-red-600 text-white px-8 py-6 rounded-none transition-all">
                About Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureSection;

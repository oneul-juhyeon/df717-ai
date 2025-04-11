
import React, { useEffect } from "react";
import HomeHeader from "@/components/home/HomeHeader";
import Footer from "@/components/common/Footer";
import ProductGrid from "@/components/financial-products/ProductGrid";
import { motion } from "framer-motion";

const FinancialProducts: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="w-full mx-0 px-5 sm:px-10 md:px-[154px] z-10">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>
      
      <section className="mt-20 mb-20 max-w-[1200px] mx-auto px-5 sm:px-10 md:px-[30px] flex-grow flex flex-col items-center">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Financial Products
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.4 // Delay after title appears
            }}
          >
            DF717 leverages AI technology to analyze real-time movements across global financial markets and apply optimized investment strategies tailored to current market conditions.
          </motion.p>
          
          <div className="w-full">
            <ProductGrid />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default FinancialProducts;

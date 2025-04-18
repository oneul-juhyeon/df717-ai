
import React from "react";
import BaseHeader from "@/components/navigation/BaseHeader";
import ProductGrid from "@/components/financial-products/ProductGrid";
import { motion } from "framer-motion";
import { getNavigationItems } from "@/components/navigation/navigationItems";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";

const FinancialProducts: React.FC = () => {
  const navigationItems = getNavigationItems();

  return (
    <FinancialProductLayout
      renderHeader={(scrollToTop) => (
        <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} />
      )}
    >
      <div className="max-w-6xl text-center">
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
            delay: 0.4
          }}
        >
          DF717 leverages AI technology to analyze real-time movements across global financial markets and apply optimized investment strategies tailored to current market conditions.
        </motion.p>
        
        <div className="w-full">
          <ProductGrid />
        </div>
      </div>
    </FinancialProductLayout>
  );
};

export default FinancialProducts;

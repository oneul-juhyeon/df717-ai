import React from "react";
import BaseHeader from "@/components/navigation/BaseHeader";
import ProductGrid from "@/components/financial-products/ProductGrid";
import { motion } from "framer-motion";
import { getNavigationItems } from "@/components/navigation/navigationItems";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

const FinancialProducts: React.FC = () => {
  const navigationItems = getNavigationItems();

  return (
    <>
      <SEOHead
        title="Financial Products - AI-Powered Trading Solutions"
        description="DF717 offers access to a wide range of CFD products including Forex, Shares, Indices, Commodities, Gold, Oil, and Crypto. Trade with AI-driven market analysis and optimized investment strategies."
        canonical="https://df717.ai/financial-products"
        type="website"
      />
      <FinancialProductLayout
        renderHeader={(scrollToTop) => (
          <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} />
        )}
      >
        <div className="flex justify-center w-full">
          <div className="max-w-4xl text-center">
            <Breadcrumbs />
            
            <motion.h1 
              className="text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Financial Products
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 mx-auto max-w-3xl"
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

            {/* Keep SEO Content Block as sr-only but not as h1 */}
            <div className="sr-only">
              DF717 offers access to a wide range of CFD products including Forex, Shares, Indices, Commodities, Gold, Oil, and Crypto.  
              Through real-time AI-driven market analysis, each asset class is evaluated for opportunity, volatility, and risk conditions.  
              The system continuously calibrates investment strategy parameters to ensure efficient execution across asset types.  
              Whether you trade Forex with leverage or hold long-term positions in commodities or equities, DF717 provides automated investment tools powered by precision data.  
              This approach helps traders respond intelligently to market volatility, minimize risk exposure, and seize global opportunities with confidence.
            </div>
            
            <div className="w-full">
              <ProductGrid />
            </div>
          </div>
        </div>
      </FinancialProductLayout>
    </>
  );
};

export default FinancialProducts;

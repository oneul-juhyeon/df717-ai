
import React from "react";
import GoldHeader from "@/components/gold/GoldHeader";
import GoldArticleContent from "@/components/gold/GoldArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import SEOHead from "@/components/seo/SEOHead";

const Gold: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Gold Trading - Precious Metal Investment & Market Analysis"
        description="Learn gold trading strategies, market analysis, and investment techniques for precious metals. Discover how to trade gold with AI-powered market insights and risk management."
        keywords="Gold Trading, Precious Metals, Gold Investment, XAU/USD, Gold Market Analysis, Commodity Trading, Gold CFD, Precious Metal Investment"
        canonical="https://df717.ai/financial-products/gold"
        type="article"
        article={{
          section: "Financial Products",
          tags: ["Gold", "Precious Metals", "Gold Trading", "Investment", "Market Analysis"]
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          "name": "Gold Trading",
          "description": "Gold trading and precious metal investment with AI-powered market analysis.",
          "url": "https://df717.ai/financial-products/gold"
        }}
      />
      <FinancialProductLayout 
        renderHeader={(scrollToTop) => <GoldHeader scrollToTop={scrollToTop} />}
      >
        <GoldArticleContent />
      </FinancialProductLayout>
    </>
  );
};

export default Gold;

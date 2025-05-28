
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
        canonical="https://df717.ai/financial-products/gold"
        type="article"
        article={{
          section: "Financial Products",
          tags: ["Gold", "Precious Metals", "Gold Trading", "Investment", "Market Analysis"]
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

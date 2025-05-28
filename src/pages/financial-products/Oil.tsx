
import React from "react";
import OilHeader from "@/components/oil/OilHeader";
import OilArticleContent from "@/components/oil/OilArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import SEOHead from "@/components/seo/SEOHead";

const Oil: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Oil Trading - Crude Oil & Energy Commodity Analysis"
        description="Discover crude oil trading strategies, market analysis, and risk management techniques for successful energy commodity trading. Trade oil with AI-powered insights."
        canonical="https://df717.ai/financial-products/oil"
        type="article"
        article={{
          section: "Financial Products",
          tags: ["Oil", "Crude Oil", "Energy Trading", "Commodities", "Market Analysis"]
        }}
      />
      <FinancialProductLayout 
        renderHeader={(scrollToTop) => <OilHeader scrollToTop={scrollToTop} />}
      >
        <OilArticleContent />
      </FinancialProductLayout>
    </>
  );
};

export default Oil;

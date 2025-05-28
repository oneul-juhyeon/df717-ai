
import React from "react";
import CommoditiesHeader from "@/components/commodities/CommoditiesHeader";
import CommoditiesArticleContent from "@/components/commodities/CommoditiesArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import SEOHead from "@/components/seo/SEOHead";

const Commodities: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Commodities Trading - Raw Materials & Precious Metals"
        description="Master commodity trading with comprehensive guides on precious metals, energy, agriculture, and raw materials market analysis. Trade commodities with AI-powered market intelligence."
        canonical="https://df717.ai/financial-products/commodities"
        type="article"
        article={{
          section: "Financial Products",
          tags: ["Commodities", "Raw Materials", "Precious Metals", "Energy Trading", "Agriculture"]
        }}
      />
      <FinancialProductLayout 
        renderHeader={(scrollToTop) => <CommoditiesHeader scrollToTop={scrollToTop} />}
      >
        <CommoditiesArticleContent />
      </FinancialProductLayout>
    </>
  );
};

export default Commodities;

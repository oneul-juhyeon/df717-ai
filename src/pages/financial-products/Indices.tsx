
import React from "react";
import IndicesHeader from "@/components/indices/IndicesHeader";
import IndicesArticleContent from "@/components/indices/IndicesArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import SEOHead from "@/components/seo/SEOHead";

const Indices: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Indices Trading - Stock Index & Market Index Analysis"
        description="Explore stock index trading, market diversification strategies, and technical analysis for major global indices like S&P 500, NASDAQ, and more. Trade indices with AI-driven insights."
        canonical="https://df717.ai/financial-products/indices"
        type="article"
        article={{
          section: "Financial Products",
          tags: ["Indices", "Index Trading", "S&P 500", "NASDAQ", "Market Indices"]
        }}
      />
      <FinancialProductLayout 
        renderHeader={(scrollToTop) => <IndicesHeader scrollToTop={scrollToTop} />}
      >
        <IndicesArticleContent />
      </FinancialProductLayout>
    </>
  );
};

export default Indices;


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
        keywords="Indices Trading, Stock Index, S&P 500, NASDAQ, Dow Jones, Market Indices, Index CFD, Index Investment, Stock Market Indices"
        canonical="https://df717.ai/financial-products/indices"
        type="article"
        article={{
          section: "Financial Products",
          tags: ["Indices", "Index Trading", "S&P 500", "NASDAQ", "Market Indices"]
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          "name": "Indices Trading",
          "description": "Stock index trading and market index analysis for major global indices.",
          "url": "https://df717.ai/financial-products/indices"
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

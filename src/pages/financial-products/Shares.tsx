
import React from "react";
import SharesHeader from "@/components/shares/SharesHeader";
import SharesArticleContent from "@/components/shares/SharesArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import SEOHead from "@/components/seo/SEOHead";

const Shares: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Share Trading - Stock Market & Equity Investment Guide"
        description="Learn stock market fundamentals, equity analysis, portfolio management, and proven strategies for successful share trading. Discover how to trade shares with AI-powered market insights."
        canonical="https://df717.ai/financial-products/shares"
        type="article"
        article={{
          section: "Financial Products",
          tags: ["Shares", "Stock Trading", "Equity", "Stock Market", "Investment"]
        }}
      />
      <FinancialProductLayout 
        renderHeader={(scrollToTop) => <SharesHeader scrollToTop={scrollToTop} />}
      >
        <SharesArticleContent />
      </FinancialProductLayout>
    </>
  );
};

export default Shares;

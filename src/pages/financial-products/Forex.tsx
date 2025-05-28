
import React from "react";
import ForexHeader from "@/components/forex/ForexHeader";
import ForexArticleContent from "@/components/forex/ForexArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import SEOHead from "@/components/seo/SEOHead";

const Forex: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Forex Trading - Currency Exchange & FX Market Analysis"
        description="Learn about foreign exchange trading, currency pairs, market mechanics, and proven strategies for successful forex trading in global markets. Trade major, minor, and exotic currency pairs with AI-powered analysis."
        canonical="https://df717.ai/financial-products/forex"
        type="article"
        article={{
          section: "Financial Products",
          tags: ["Forex", "Currency Trading", "FX", "Exchange Rates", "Trading Strategies"]
        }}
      />
      <FinancialProductLayout 
        renderHeader={(scrollToTop) => <ForexHeader scrollToTop={scrollToTop} />}
      >
        <ForexArticleContent />
      </FinancialProductLayout>
    </>
  );
};

export default Forex;

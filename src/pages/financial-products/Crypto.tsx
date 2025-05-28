
import React from "react";
import CryptoHeader from "@/components/crypto/CryptoHeader";
import CryptoArticleContent from "@/components/crypto/CryptoArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import SEOHead from "@/components/seo/SEOHead";

const Crypto: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Crypto Trading - Cryptocurrency & Digital Asset Analysis"
        description="Master cryptocurrency trading with comprehensive guides on Bitcoin, Ethereum, and digital assets. Learn crypto trading strategies with AI-powered market analysis and risk management."
        canonical="https://df717.ai/financial-products/crypto"
        type="article"
        article={{
          section: "Financial Products",
          tags: ["Cryptocurrency", "Bitcoin", "Ethereum", "Digital Assets", "Crypto Trading"]
        }}
      />
      <FinancialProductLayout 
        renderHeader={(scrollToTop) => <CryptoHeader scrollToTop={scrollToTop} />}
      >
        <CryptoArticleContent />
      </FinancialProductLayout>
    </>
  );
};

export default Crypto;

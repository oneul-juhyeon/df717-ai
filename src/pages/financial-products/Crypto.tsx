
import React from "react";
import CryptoHeader from "@/components/crypto/CryptoHeader";
import CryptoArticleContent from "@/components/crypto/CryptoArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";

const Crypto: React.FC = () => {
  return (
    <FinancialProductLayout 
      renderHeader={(scrollToTop) => <CryptoHeader scrollToTop={scrollToTop} />}
    >
      <CryptoArticleContent />
    </FinancialProductLayout>
  );
};

export default Crypto;

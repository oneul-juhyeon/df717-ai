
import React from "react";
import GoldHeader from "@/components/gold/GoldHeader";
import GoldArticleContent from "@/components/gold/GoldArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";

const Gold: React.FC = () => {
  return (
    <FinancialProductLayout 
      renderHeader={(scrollToTop) => <GoldHeader scrollToTop={scrollToTop} />}
    >
      <GoldArticleContent />
    </FinancialProductLayout>
  );
};

export default Gold;

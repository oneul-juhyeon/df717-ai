
import React from "react";
import ForexHeader from "@/components/forex/ForexHeader";
import ForexArticleContent from "@/components/forex/ForexArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";

const Forex: React.FC = () => {
  return (
    <FinancialProductLayout 
      renderHeader={(scrollToTop) => <ForexHeader scrollToTop={scrollToTop} />}
    >
      <ForexArticleContent />
    </FinancialProductLayout>
  );
};

export default Forex;

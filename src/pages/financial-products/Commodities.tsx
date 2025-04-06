
import React from "react";
import CommoditiesHeader from "@/components/commodities/CommoditiesHeader";
import CommoditiesArticleContent from "@/components/commodities/CommoditiesArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";

const Commodities: React.FC = () => {
  return (
    <FinancialProductLayout 
      renderHeader={(scrollToTop) => <CommoditiesHeader scrollToTop={scrollToTop} />}
    >
      <CommoditiesArticleContent />
    </FinancialProductLayout>
  );
};

export default Commodities;

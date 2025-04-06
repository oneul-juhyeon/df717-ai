
import React from "react";
import OilHeader from "@/components/oil/OilHeader";
import OilArticleContent from "@/components/oil/OilArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";

const Oil: React.FC = () => {
  return (
    <FinancialProductLayout 
      title="Oil Trading"
      renderHeader={(scrollToTop) => <OilHeader scrollToTop={scrollToTop} />}
    >
      <OilArticleContent />
    </FinancialProductLayout>
  );
};

export default Oil;

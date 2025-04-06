
import React from "react";
import SharesHeader from "@/components/shares/SharesHeader";
import SharesArticleContent from "@/components/shares/SharesArticleContent";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";

const Shares: React.FC = () => {
  return (
    <FinancialProductLayout 
      renderHeader={(scrollToTop) => <SharesHeader scrollToTop={scrollToTop} />}
    >
      <SharesArticleContent />
    </FinancialProductLayout>
  );
};

export default Shares;

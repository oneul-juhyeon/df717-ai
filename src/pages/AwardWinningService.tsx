import React from "react";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import AwardWinningServiceHeader from "@/components/award-winning-service/AwardWinningServiceHeader";
import AwardWinningServiceContent from "@/components/award-winning-service/AwardWinningServiceContent";

const AwardWinningService: React.FC = () => {
  return (
    <FinancialProductLayout 
      renderHeader={(scrollToTop) => <AwardWinningServiceHeader scrollToTop={scrollToTop} />}
    >
      <AwardWinningServiceContent />
    </FinancialProductLayout>
  );
};

export default AwardWinningService;
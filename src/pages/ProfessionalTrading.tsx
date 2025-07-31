import React from "react";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import ProfessionalTradingHeader from "@/components/professional-trading/ProfessionalTradingHeader";
import ProfessionalTradingContent from "@/components/professional-trading/ProfessionalTradingContent";

const ProfessionalTrading: React.FC = () => {
  return (
    <FinancialProductLayout 
      renderHeader={(scrollToTop) => <ProfessionalTradingHeader scrollToTop={scrollToTop} />}
    >
      <ProfessionalTradingContent />
    </FinancialProductLayout>
  );
};

export default ProfessionalTrading;
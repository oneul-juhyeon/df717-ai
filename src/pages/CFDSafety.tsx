import React from "react";
import FinancialProductLayout from "@/components/financial-products/FinancialProductLayout";
import CFDSafetyHeader from "@/components/cfd-safety/CFDSafetyHeader";
import CFDSafetyContent from "@/components/cfd-safety/CFDSafetyContent";

const CFDSafety: React.FC = () => {
  return (
    <FinancialProductLayout 
      renderHeader={(scrollToTop) => <CFDSafetyHeader scrollToTop={scrollToTop} />}
    >
      <CFDSafetyContent />
    </FinancialProductLayout>
  );
};

export default CFDSafety;
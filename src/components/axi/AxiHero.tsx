
import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";

const AxiHero: React.FC = () => {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left">
          <FinancialProductArticleHeader 
            title="Our Edge"
            subtitle="We give you all the tools and support to unlock your advantage."
          />
        </div>
      </div>
    </div>
  );
};

export default AxiHero;

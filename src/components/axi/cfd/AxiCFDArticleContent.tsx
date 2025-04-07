
import React from "react";
import FinancialProductArticleHeader from "@/components/financial-products/FinancialProductArticleHeader";
import AxiCFDIntro from "./AxiCFDIntro";
import AxiCFDMarketTypes from "./AxiCFDMarketTypes";
import AxiCFDTrading from "./AxiCFDTrading";
import AxiCFDHowToTrade from "./AxiCFDHowToTrade";
import AxiCFDAdvantages from "./AxiCFDAdvantages";
import AxiCFDDisadvantages from "./AxiCFDDisadvantages";
import AxiCFDDifferences from "./AxiCFDDifferences";
import AxiCFDRiskManagement from "./AxiCFDRiskManagement";
import AxiCFDFAQ from "./AxiCFDFAQ";

const AxiCFDArticleContent: React.FC = () => {
  return (
    <article className="mx-auto">
      <div className="max-w-3xl mx-auto text-left">
        <FinancialProductArticleHeader title="What is CFD trading and how to trade CFDs?" />
        
        <div className="prose max-w-none text-white
          prose-headings:font-bold 
          prose-headings:text-white 
          prose-p:text-neutral-200 
          prose-p:leading-relaxed 
          prose-li:text-neutral-200 
          prose-strong:text-white
          prose-table:text-neutral-200
          prose-th:text-white
          prose-td:text-neutral-200
          prose-a:text-blue-400
          prose-a:hover:text-blue-300
          prose-blockquote:border-white
          prose-hr:border-white">
          <AxiCFDIntro />
          <AxiCFDMarketTypes />
          <AxiCFDTrading />
          <AxiCFDHowToTrade />
          <AxiCFDAdvantages />
          <AxiCFDDisadvantages />
          <AxiCFDDifferences />
          <AxiCFDRiskManagement />
          <AxiCFDFAQ />
        </div>
      </div>
    </article>
  );
};

export default AxiCFDArticleContent;

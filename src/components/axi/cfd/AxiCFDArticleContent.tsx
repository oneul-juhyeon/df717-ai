
import React from "react";
import AxiCFDArticleHeader from "./AxiCFDArticleHeader";
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
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-left">
        <AxiCFDArticleHeader />
        <div className="prose max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
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

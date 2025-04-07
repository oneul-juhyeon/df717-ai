
import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";
import CommoditiesWhatAre from "./sections/CommoditiesWhatAre";
import CommoditiesMarket from "./sections/CommoditiesMarket";
import CommoditiesHowItWorks from "./sections/CommoditiesHowItWorks";
import CommoditiesWhy from "./sections/CommoditiesWhy";
import CommoditiesAdvantages from "./sections/CommoditiesAdvantages";
import CommoditiesDisadvantages from "./sections/CommoditiesDisadvantages";
import CommoditiesTrading from "./sections/CommoditiesTrading";
import CommoditiesHowToTrade from "./sections/CommoditiesHowToTrade";
import CommoditiesFAQ from "./sections/CommoditiesFAQ";

const CommoditiesArticleContent: React.FC = () => {
  return (
    <article className="mx-auto">
      <div className="max-w-3xl mx-auto text-left">
        <FinancialProductArticleHeader title="What are Commodities and how to trade Commodities?" />
        
        <div className="prose max-w-none 
          prose-headings:font-bold 
          prose-headings:text-white 
          prose-p:text-gray-300 
          prose-p:leading-relaxed 
          prose-li:text-gray-300 
          prose-strong:text-white
          prose-table:text-gray-300
          prose-th:text-white
          prose-td:text-gray-300
          prose-a:text-blue-400
          prose-a:hover:text-blue-300
          prose-blockquote:border-white
          prose-hr:border-white">
          <CommoditiesWhatAre />
          <CommoditiesMarket />
          <CommoditiesHowItWorks />
          <CommoditiesWhy />
          <CommoditiesAdvantages />
          <CommoditiesDisadvantages />
          <CommoditiesTrading />
          <CommoditiesHowToTrade />
          <CommoditiesFAQ />
        </div>
      </div>
    </article>
  );
};

export default CommoditiesArticleContent;

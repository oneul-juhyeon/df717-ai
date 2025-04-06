
import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";
import GoldWhatIs from "./sections/GoldWhatIs";
import GoldMarket from "./sections/GoldMarket";
import GoldHowItWorks from "./sections/GoldHowItWorks";
import GoldWhy from "./sections/GoldWhy";
import GoldAdvantages from "./sections/GoldAdvantages";
import GoldDisadvantages from "./sections/GoldDisadvantages";
import GoldPriceFactors from "./sections/GoldPriceFactors";
import GoldTrading from "./sections/GoldTrading";
import GoldHowToTrade from "./sections/GoldHowToTrade";
import GoldFAQ from "./sections/GoldFAQ";

const GoldArticleContent: React.FC = () => {
  return (
    <article className="mx-auto">
      <div className="max-w-3xl mx-auto text-left">
        <FinancialProductArticleHeader title="What is Gold trading and how to trade Gold?" />
        
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
          prose-a:hover:text-blue-300">
          <GoldWhatIs />
          <GoldMarket />
          <GoldHowItWorks />
          <GoldWhy />
          <GoldAdvantages />
          <GoldDisadvantages />
          <GoldPriceFactors />
          <GoldTrading />
          <GoldHowToTrade />
          <GoldFAQ />
        </div>
      </div>
    </article>
  );
};

export default GoldArticleContent;

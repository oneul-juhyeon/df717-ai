
import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";
import ForexWhatIs from "./sections/ForexWhatIs";
import ForexMarket from "./sections/ForexMarket";
import ForexHowItWorks from "./sections/ForexHowItWorks";
import ForexAdvantages from "./sections/ForexAdvantages";
import ForexDisadvantages from "./sections/ForexDisadvantages";
import ForexWhyTrade from "./sections/ForexWhyTrade";
import ForexHowToTrade from "./sections/ForexHowToTrade";
import ForexCurrencyPairs from "./sections/ForexCurrencyPairs";
import ForexMarketHours from "./sections/ForexMarketHours";
import ForexTrading from "./sections/ForexTrading";
import ForexPriceMovements from "./sections/ForexPriceMovements";
import ForexTypes from "./sections/ForexTypes";
import ForexDifference from "./sections/ForexDifference";
import ForexStrategy from "./sections/ForexStrategy";
import ForexRiskManagement from "./sections/ForexRiskManagement";
import ForexCharts from "./sections/ForexCharts";
import ForexAnalysis from "./sections/ForexAnalysis";
import ForexRegulation from "./sections/ForexRegulation";
import ForexFAQ from "./sections/ForexFAQ";

const ForexArticleContent: React.FC = () => {
  return (
    <article className="mx-auto">
      <div className="max-w-3xl mx-auto text-left">
        <FinancialProductArticleHeader 
          title="What is Forex trading and how to trade Forex?" 
          subtitle="Learn about foreign exchange trading, currency pairs, market mechanics, and proven strategies for successful forex trading in global markets."
          isMainTitle={true} 
        />
        
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
          prose-a:hover:text-blue-300">
          <ForexWhatIs />
          <ForexMarket />
          <ForexHowItWorks />
          <ForexAdvantages />
          <ForexDisadvantages />
          <ForexWhyTrade />
          <ForexHowToTrade />
          <ForexCurrencyPairs />
          <ForexMarketHours />
          <ForexTrading />
          <ForexPriceMovements />
          <ForexTypes />
          <ForexDifference />
          <ForexStrategy />
          <ForexRiskManagement />
          <ForexCharts />
          <ForexAnalysis />
          <ForexRegulation />
          <ForexFAQ />
        </div>
      </div>
    </article>
  );
};

export default ForexArticleContent;

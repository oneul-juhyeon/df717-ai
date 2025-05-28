
import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";
import IndicesWhatAre from "./sections/IndicesWhatAre";
import IndicesMarket from "./sections/IndicesMarket";
import IndicesHowItWorks from "./sections/IndicesHowItWorks";
import IndicesWhy from "./sections/IndicesWhy";
import IndicesAdvantages from "./sections/IndicesAdvantages";
import IndicesDisadvantages from "./sections/IndicesDisadvantages";
import IndicesTrading from "./sections/IndicesTrading";
import IndicesHowToTrade from "./sections/IndicesHowToTrade";
import IndicesFAQ from "./sections/IndicesFAQ";

const IndicesArticleContent: React.FC = () => {
  return (
    <article className="mx-auto">
      <div className="max-w-3xl mx-auto text-left">
        <FinancialProductArticleHeader 
          title="What are Indices and how to trade Indices?" 
          subtitle="Explore stock index trading, market diversification strategies, and technical analysis for major global indices like S&P 500, NASDAQ, and more."
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
          prose-a:hover:text-blue-300
          prose-blockquote:border-white
          prose-hr:border-white">
          <IndicesWhatAre />
          <IndicesMarket />
          <IndicesHowItWorks />
          <IndicesWhy />
          <IndicesAdvantages />
          <IndicesDisadvantages />
          <IndicesTrading />
          <IndicesHowToTrade />
          <IndicesFAQ />
        </div>
      </div>
    </article>
  );
};

export default IndicesArticleContent;

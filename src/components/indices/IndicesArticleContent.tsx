
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
        <FinancialProductArticleHeader title="What are Indices and how to trade Indices?" isMainTitle={true} />
        
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


import React from "react";
import IndicesArticleHeader from "./IndicesArticleHeader";
import IndicesWhatAre from "./sections/IndicesWhatAre";
import IndicesMarket from "./sections/IndicesMarket";
import IndicesTrading from "./sections/IndicesTrading";
import IndicesHowItWorks from "./sections/IndicesHowItWorks";
import IndicesWhy from "./sections/IndicesWhy";
import IndicesHowToTrade from "./sections/IndicesHowToTrade";
import IndicesAdvantages from "./sections/IndicesAdvantages";
import IndicesDisadvantages from "./sections/IndicesDisadvantages";
import IndicesFAQ from "./sections/IndicesFAQ";

const IndicesArticleContent: React.FC = () => {
  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-left">
        <IndicesArticleHeader />
        <div className="prose max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
          <IndicesWhatAre />
          <IndicesMarket />
          <IndicesTrading />
          <IndicesHowItWorks />
          <IndicesWhy />
          <IndicesHowToTrade />
          <IndicesAdvantages />
          <IndicesDisadvantages />
          <IndicesFAQ />
        </div>
      </div>
    </article>
  );
};

export default IndicesArticleContent;

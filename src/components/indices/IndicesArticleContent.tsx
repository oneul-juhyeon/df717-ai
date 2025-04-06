
import React from "react";
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
    <article className="text-white py-12">
      <div className="max-w-3xl mx-auto text-left">
        <div className="prose max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed">
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

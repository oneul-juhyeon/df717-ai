
import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";
import SharesWhatAre from "./sections/SharesWhatAre";
import SharesMarket from "./sections/SharesMarket";
import SharesTrading from "./sections/SharesTrading";
import SharesWhy from "./sections/SharesWhy";
import SharesAdvantages from "./sections/SharesAdvantages";
import SharesDisadvantages from "./sections/SharesDisadvantages";
import SharesDifference from "./sections/SharesDifference";
import SharesPlatforms from "./sections/SharesPlatforms";
import SharesRiskManagement from "./sections/SharesRiskManagement";
import SharesFAQ from "./sections/SharesFAQ";

const SharesArticleContent: React.FC = () => {
  return (
    <article className="mx-auto">
      <div className="max-w-3xl mx-auto text-left">
        <FinancialProductArticleHeader title="What are Shares and how to trade Shares?" />
        
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
          <SharesWhatAre />
          <SharesMarket />
          <SharesTrading />
          <SharesWhy />
          <SharesAdvantages />
          <SharesDisadvantages />
          <SharesDifference />
          <SharesPlatforms />
          <SharesRiskManagement />
          <SharesFAQ />
        </div>
      </div>
    </article>
  );
};

export default SharesArticleContent;

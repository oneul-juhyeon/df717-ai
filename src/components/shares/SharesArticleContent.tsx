
import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";
import SharesWhatAre from "./sections/SharesWhatAre";
import SharesMarket from "./sections/SharesMarket";
import SharesWhy from "./sections/SharesWhy";
import SharesAdvantages from "./sections/SharesAdvantages";
import SharesDisadvantages from "./sections/SharesDisadvantages";
import SharesTrading from "./sections/SharesTrading";
import SharesPlatforms from "./sections/SharesPlatforms";
import SharesDifference from "./sections/SharesDifference";
import SharesRiskManagement from "./sections/SharesRiskManagement";
import SharesFAQ from "./sections/SharesFAQ";

const SharesArticleContent: React.FC = () => {
  return (
    <article className="mx-auto">
      <div className="max-w-3xl mx-auto text-left">
        <FinancialProductArticleHeader 
          title="What is Share trading and how to trade Shares?" 
          subtitle="Learn stock market fundamentals, equity analysis, portfolio management, and proven strategies for successful share trading."
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
          <SharesWhatAre />
          <SharesMarket />
          <SharesWhy />
          <SharesAdvantages />
          <SharesDisadvantages />
          <SharesTrading />
          <SharesPlatforms />
          <SharesDifference />
          <SharesRiskManagement />
          <SharesFAQ />
        </div>
      </div>
    </article>
  );
};

export default SharesArticleContent;

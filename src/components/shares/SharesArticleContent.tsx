
import React from "react";
import SharesWhatAre from "./sections/SharesWhatAre";
import SharesMarket from "./sections/SharesMarket";
import SharesTrading from "./sections/SharesTrading";
import SharesDifference from "./sections/SharesDifference";
import SharesWhy from "./sections/SharesWhy";
import SharesAdvantages from "./sections/SharesAdvantages";
import SharesDisadvantages from "./sections/SharesDisadvantages";
import SharesPlatforms from "./sections/SharesPlatforms";
import SharesRiskManagement from "./sections/SharesRiskManagement";
import SharesFAQ from "./sections/SharesFAQ";

const SharesArticleContent: React.FC = () => {
  return (
    <article className="text-white py-12">
      <div className="max-w-3xl mx-auto text-left">
        <div className="prose max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed">
          <SharesWhatAre />
          <SharesMarket />
          <SharesTrading />
          <SharesDifference />
          <SharesWhy />
          <SharesAdvantages />
          <SharesDisadvantages />
          <SharesPlatforms />
          <SharesRiskManagement />
          <SharesFAQ />
        </div>
      </div>
    </article>
  );
};

export default SharesArticleContent;

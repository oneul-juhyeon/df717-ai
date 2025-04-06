
import React from "react";
import ForexWhatIs from "./sections/ForexWhatIs";
import ForexMarket from "./sections/ForexMarket";
import ForexTypes from "./sections/ForexTypes";
import ForexPriceMovements from "./sections/ForexPriceMovements";
import ForexMarketHours from "./sections/ForexMarketHours";
import ForexRegulation from "./sections/ForexRegulation";
import ForexCurrencyPairs from "./sections/ForexCurrencyPairs";
import ForexTrading from "./sections/ForexTrading";
import ForexHowItWorks from "./sections/ForexHowItWorks";
import ForexDifference from "./sections/ForexDifference";
import ForexWhyTrade from "./sections/ForexWhyTrade";
import ForexHowToTrade from "./sections/ForexHowToTrade";
import ForexAnalysis from "./sections/ForexAnalysis";
import ForexCharts from "./sections/ForexCharts";
import ForexAdvantages from "./sections/ForexAdvantages";
import ForexDisadvantages from "./sections/ForexDisadvantages";
import ForexStrategy from "./sections/ForexStrategy";
import ForexRiskManagement from "./sections/ForexRiskManagement";
import ForexFAQ from "./sections/ForexFAQ";
import { Separator } from "@/components/ui/separator";

const ForexArticleContent: React.FC = () => {
  return (
    <article className="text-white py-12">
      <div className="max-w-3xl mx-auto text-left">
        <div className="prose max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed">
          <ForexWhatIs />
          <ForexMarket />
          <ForexTypes />
          <ForexPriceMovements />
          <ForexMarketHours />
          <ForexRegulation />
          <ForexCurrencyPairs />
          <ForexTrading />
          <ForexHowItWorks />
          <ForexDifference />
          <ForexWhyTrade />
          <ForexHowToTrade />
          <ForexAnalysis />
          <ForexCharts />
          <ForexAdvantages />
          <ForexDisadvantages />
          <ForexStrategy />
          <ForexRiskManagement />
          <Separator className="my-10" />
          <ForexFAQ />
        </div>
      </div>
    </article>
  );
};

export default ForexArticleContent;

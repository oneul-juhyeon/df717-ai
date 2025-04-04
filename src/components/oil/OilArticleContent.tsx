
import React from "react";
import OilArticleHeader from "./OilArticleHeader";
import OilWhatIs from "./sections/OilWhatIs";
import OilMarket from "./sections/OilMarket";
import OilTrading from "./sections/OilTrading";
import OilTradingWorks from "./sections/OilTradingWorks";
import OilWhyTrade from "./sections/OilWhyTrade";
import OilHowToTrade from "./sections/OilHowToTrade";
import OilAdvantages from "./sections/OilAdvantages";
import OilDisadvantages from "./sections/OilDisadvantages";
import OilTradingStrategies from "./sections/OilTradingStrategies";
import OilFAQ from "./sections/OilFAQ";
import { Separator } from "@/components/ui/separator";

const OilArticleContent: React.FC = () => {
  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-left">
        <OilArticleHeader />
        <div className="prose max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
          <OilWhatIs />
          <OilMarket />
          <OilTrading />
          <OilTradingWorks />
          <OilWhyTrade />
          <OilHowToTrade />
          <OilAdvantages />
          <OilDisadvantages />
          <OilTradingStrategies />
          <Separator className="my-10" />
          <OilFAQ />
        </div>
      </div>
    </article>
  );
};

export default OilArticleContent;

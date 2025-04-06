
import React from "react";
import CommoditiesWhatAre from "./sections/CommoditiesWhatAre";
import CommoditiesMarket from "./sections/CommoditiesMarket";
import CommoditiesTrading from "./sections/CommoditiesTrading";
import CommoditiesHowItWorks from "./sections/CommoditiesHowItWorks";
import CommoditiesWhy from "./sections/CommoditiesWhy";
import CommoditiesHowToTrade from "./sections/CommoditiesHowToTrade";
import CommoditiesAdvantages from "./sections/CommoditiesAdvantages";
import CommoditiesDisadvantages from "./sections/CommoditiesDisadvantages";
import CommoditiesFAQ from "./sections/CommoditiesFAQ";
import { Separator } from "@/components/ui/separator";

const CommoditiesArticleContent: React.FC = () => {
  return (
    <article className="text-white py-12">
      <div className="max-w-3xl mx-auto text-left">
        <div className="prose max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed">
          <CommoditiesWhatAre />
          <CommoditiesMarket />
          <CommoditiesTrading />
          <CommoditiesHowItWorks />
          <CommoditiesWhy />
          <CommoditiesHowToTrade />
          <CommoditiesAdvantages />
          <CommoditiesDisadvantages />
          <Separator className="my-10" />
          <CommoditiesFAQ />
        </div>
      </div>
    </article>
  );
};

export default CommoditiesArticleContent;

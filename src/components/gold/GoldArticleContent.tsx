
import React from "react";
import GoldArticleHeader from "./GoldArticleHeader";
import GoldWhatIs from "./sections/GoldWhatIs";
import GoldMarket from "./sections/GoldMarket";
import GoldPriceFactors from "./sections/GoldPriceFactors";
import GoldTrading from "./sections/GoldTrading";
import GoldHowItWorks from "./sections/GoldHowItWorks";
import GoldWhy from "./sections/GoldWhy";
import GoldHowToTrade from "./sections/GoldHowToTrade";
import GoldAdvantages from "./sections/GoldAdvantages";
import GoldDisadvantages from "./sections/GoldDisadvantages";
import GoldFAQ from "./sections/GoldFAQ";
import { Separator } from "@/components/ui/separator";

const GoldArticleContent: React.FC = () => {
  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-left">
        <GoldArticleHeader />
        <div className="prose max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
          <GoldWhatIs />
          <GoldMarket />
          <GoldPriceFactors />
          <GoldTrading />
          <GoldHowItWorks />
          <GoldWhy />
          <GoldHowToTrade />
          <GoldAdvantages />
          <GoldDisadvantages />
          <Separator className="my-10" />
          <GoldFAQ />
        </div>
      </div>
    </article>
  );
};

export default GoldArticleContent;

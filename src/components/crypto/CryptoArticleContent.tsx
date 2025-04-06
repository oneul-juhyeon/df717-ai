
import React from "react";
import CryptoWhatIs from "./sections/CryptoWhatIs";
import CryptoMarket from "./sections/CryptoMarket";
import CryptoTrading from "./sections/CryptoTrading";
import CryptoTradingWorks from "./sections/CryptoTradingWorks";
import CryptoWhyTrade from "./sections/CryptoWhyTrade";
import CryptoHowToTrade from "./sections/CryptoHowToTrade";
import CryptoAdvantages from "./sections/CryptoAdvantages";
import CryptoDisadvantages from "./sections/CryptoDisadvantages";
import CryptoDifferences from "./sections/CryptoDifferences";
import CryptoFAQ from "./sections/CryptoFAQ";
import { Separator } from "@/components/ui/separator";

const CryptoArticleContent: React.FC = () => {
  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-left">
        <div className="prose max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
          <CryptoWhatIs />
          <CryptoMarket />
          <CryptoTrading />
          <CryptoTradingWorks />
          <CryptoWhyTrade />
          <CryptoHowToTrade />
          <CryptoAdvantages />
          <CryptoDisadvantages />
          <CryptoDifferences />
          <Separator className="my-10" />
          <CryptoFAQ />
        </div>
      </div>
    </article>
  );
};

export default CryptoArticleContent;

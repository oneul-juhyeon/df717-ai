
import React from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";
import CryptoWhatIs from "./sections/CryptoWhatIs";
import CryptoMarket from "./sections/CryptoMarket";
import CryptoTradingWorks from "./sections/CryptoTradingWorks";
import CryptoWhyTrade from "./sections/CryptoWhyTrade";
import CryptoAdvantages from "./sections/CryptoAdvantages";
import CryptoDisadvantages from "./sections/CryptoDisadvantages";
import CryptoDifferences from "./sections/CryptoDifferences";
import CryptoTrading from "./sections/CryptoTrading";
import CryptoHowToTrade from "./sections/CryptoHowToTrade";
import CryptoFAQ from "./sections/CryptoFAQ";

const CryptoArticleContent: React.FC = () => {
  return (
    <article className="mx-auto">
      <div className="max-w-3xl mx-auto text-left">
        <FinancialProductArticleHeader title="What is Crypto trading and how to trade Cryptocurrencies?" />
        
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
          <CryptoWhatIs />
          <CryptoMarket />
          <CryptoTradingWorks />
          <CryptoWhyTrade />
          <CryptoAdvantages />
          <CryptoDisadvantages />
          <CryptoDifferences />
          <CryptoTrading />
          <CryptoHowToTrade />
          <CryptoFAQ />
        </div>
      </div>
    </article>
  );
};

export default CryptoArticleContent;

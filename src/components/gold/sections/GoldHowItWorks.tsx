
import React from "react";

const GoldHowItWorks: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How does gold trading work?</h2>
      <p className="mb-4">
        The gold ticker symbol is XAU. The letter "X" stands for "Index," whereas the letter "AU" stands for "Aurum," 
        the Latin word for gold.
      </p>
      <p className="mb-4">
        Using a ticker simplifies product searches on the MT4 trading platform.
      </p>
      <p className="mb-4">
        The most popular currencies to trade against gold CFDs are the USD, AUD, CHF, EUR, and GBP. The symbol for a 
        gold trade against the US dollar is 'XAUUSD', while the symbol for trading gold futures CFDs is 'GOLD.fs'
      </p>
      <p className="mb-4">
        Bullion spot CFDs are priced using the underlying spot market, whereas futures CFDs are priced using futures contracts.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <strong className="font-semibold">Gold CFDs:</strong> A CFD allows you to trade the real-time price movement of gold 
          without purchasing physical gold. Because CFDs are leveraged products, you only need a modest investment to have full exposure 
          to the underlying trade. It is important to note that the profit or loss is determined based on the whole size of the trade 
          position, so profits and losses are amplified.
        </li>
        <li className="mb-2">
          <strong className="font-semibold">Gold futures:</strong> If you anticipate that the price of gold will rise in the future, 
          you can enter a contract with a seller and agree on a fair price to be paid today. When the actual gold is delivered at the 
          end of the contract, you can sell it for more at a profit.
        </li>
      </ul>
      
      <div className="my-8">
        <img 
          src="/gold6.png" 
          alt="Gold trading platform" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default GoldHowItWorks;

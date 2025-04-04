
import React from "react";

const CommoditiesMarket: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is the commodities market?</h2>
      
      <div className="mb-8">
        <img 
          src="/lovable-uploads/commodities2.png" 
          alt="Commodities Market" 
          className="w-full h-auto rounded-lg shadow-md my-6"
        />
      </div>
      
      <p className="mb-4">
        A commodities market is the place where buyers and investors meet to buy and sell (hard and soft) commodities.
      </p>
      
      <h3 className="text-2xl font-semibold mt-8 mb-4">Commodities are traded on two types of markets:</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          The spot commodities market, also referred to as the physical market, is where goods are bought and sold for immediate delivery
        </li>
        <li className="mb-2">
          Derivatives commodities markets are centralised exchanges where financial products based on various commodities are traded in the form of futures, forwards, and options contracts.
        </li>
      </ul>
      
      <h3 className="text-2xl font-semibold mt-8 mb-4">The major commodity exchanges:</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-4">
          <strong>The Chicago Mercantile Exchange (CME)</strong> was founded in 1898 as the Chicago Butter and Egg Board. It evolved over time to become one of the most important financial exchanges globally. Aside from commodities, it also specialises in interest rates, equities, and currency futures contracts. While more than 90% of the volume traded on the CME is done electronically, the exchange still operates trading on an open-outcry basis, where traders on the trading floor call out orders.
        </li>
        <li className="mb-4">
          <strong>The Tokyo Commodity Exchange (TOCOM)</strong> is Japan´s largest and one of Asia´s largest commodity futures exchanges. It was founded in 1984 due to a merger. TOCOM offers futures contracts for various products, from precious metals and oil to soft commodities.
        </li>
        <li className="mb-4">
          <strong>The London Metal Exchange (LME)</strong> is the most important futures exchange for metal products. It offers financial derivatives for aluminium, copper, zinc, nickel, lead, tin, and more. While most of the trading is done electronically, it is the only exchange in Europe that still uses a physical trading floor where open outcry trading occurs.
        </li>
        <li className="mb-4">
          <strong>The New York Mercantile Exchange (NYMEX)</strong> is a major futures exchange based in New York City and owned by the CME Group. It specialises in energy products such as coal, electricity, crude oil, heating oil, natural gas, and propane.
        </li>
      </ul>
    </section>
  );
};

export default CommoditiesMarket;

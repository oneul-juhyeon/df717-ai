
import React from "react";

const OilDisadvantages: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Disadvantages of trading oil</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong className="font-bold">Risk of losses:</strong> CFD trading carries a high risk of potential losses. When trading with leverage, 
          small adverse price movements can result in significant losses.
        </li>
        <li>
          <strong className="font-bold">Volatility and price fluctuations:</strong> While volatility can present trading opportunities, it also 
          increases the risk of rapid price fluctuations, which can lead to unexpected losses. The continuous monitoring of price movements may be necessary.
        </li>
        <li>
          <strong className="font-bold">Complex market analysis:</strong> Successful oil CFD trading requires thorough market analysis and an understanding 
          of the factors that affect oil prices. Supply and demand dynamics, geopolitical events, and economic indicators can be complex and challenging 
          to analyse for anyone new to trading.
        </li>
        <li>
          <strong className="font-bold">Overnight financing charges:</strong> Holding CFD positions overnight may incur financing charges, also known as 
          swap rates or rollover fees. These charges can eat into profits or increase losses if positions are held for an extended period.
        </li>
        <li>
          <strong className="font-bold">No asset ownership:</strong> The lack of physical ownership of the underlying asset may not appeal to some traders.
        </li>
      </ul>
    </section>
  );
};

export default OilDisadvantages;

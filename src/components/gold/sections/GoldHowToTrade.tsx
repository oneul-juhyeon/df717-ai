
import React from "react";

const GoldHowToTrade: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How to trade gold?</h2>
      <p className="mb-4">
        As with most investments, the trading journey begins with research on the asset and chart analysis to determine volatility 
        and trend direction.
      </p>
      <p className="mb-4">
        Identify historic support and resistance levels; they are crucial indicators for probable price reversal.
      </p>
      
      <div className="my-8">
        <img 
          src="/gold7.png" 
          alt="Gold trading analysis chart" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <p className="mb-4">
        Use fundamental analysis to supplement technical analysis, keeping a close eye on the factors that drive price movement. 
        These include all current events that affect investors and surprise the markets, such as economic and political instability, 
        the strength of the dollar, which is inversely related to gold, interest rates and inflation, and changes in gold production 
        as well as the price of stocks in gold mining companies.
      </p>
      <p className="mb-4">
        When you decide to initiate your trade, predetermine the levels at which you intend to be taking profits, and make sure you 
        have a stop-loss in place in case the trade goes against you. By sticking to your plan, you will be able to keep emotions off 
        the trading floor and improve your decision-making process.
      </p>
    </section>
  );
};

export default GoldHowToTrade;

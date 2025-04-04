
import React from "react";

const CommoditiesWhy: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Why trade commodities?</h2>
      
      <div className="mb-8">
        <img 
          src="/lovable-uploads/commodities5.png" 
          alt="Why Trade Commodities" 
          className="w-full h-auto rounded-lg shadow-md my-6"
        />
      </div>
      
      <p className="mb-6">
        Investors and traders trade commodities for distinct reasons. Some are attracted to the high volatility of certain commodities, which can lead to higher returns. However, the potential for higher returns always comes with higher risk.
      </p>
      
      <p className="mb-6">
        Other market participants see commodities as a hedge against inflation. Gold is among the most popular instruments that investors use to protect themselves against rising inflation.
      </p>
      
      <p className="mb-6">
        Commodities can also help with diversification. Investors who are mostly exposed to stocks and bonds might want to add commodities to their portfolios to reduce their exposure to only two asset classes. Traders might consider adding oil, gold, or copper to their list of trading instruments to expand their horizons or test their strategy on different instruments. This can be useful if the main asset class they are trading is experiencing low volatility or a market environment that is averse to their trading strategy.
      </p>
    </section>
  );
};

export default CommoditiesWhy;


import React from "react";

const OilMarket: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is the oil market?</h2>
      <p className="mb-4">
        The oil market refers to the global network of buyers and sellers involved in the production, refining, distribution, and consumption of oil. 
        It is a complex and highly influential market that significantly impacts the global economy. Major oil-producing countries, oil companies, 
        traders, and consumers are all active participants in this market. The oil market is known for its volatility due to factors like political tensions, 
        natural disasters, decisions made by governing bodies (such as OPEC), and changes in global demand.
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/oil3.png" 
          alt="Global oil market dynamics" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <h3 className="text-2xl font-bold mb-4">What affects oil prices?</h3>
      <p className="mb-4">
        There are many factors that influence the price of oil. As a rule, it's important for anyone trading oil to stay up to date with 
        economic news and market trends to ensure a greater understanding of how prices are affected. Here are some of the main factors 
        affecting oil prices:
      </p>
      <p className="mb-4">
        <strong>State of the economy:</strong> When an economy is performing badly, there is less need for oil, so the price drops. 
        As an economy improves, oil demand recovers, and prices increase.
      </p>
      <p className="mb-4">
        <strong>Strength of the US dollar:</strong> Oil is pegged to and exchanged in US dollars, meaning the value of the USD has a major 
        impact on oil prices; a strengthening dollar can lower prices, and a weak dollar sees them rise.
      </p>
      <p className="mb-4">
        <strong>Market speculation:</strong> Oil prices are set on the futures market, meaning speculation about future events can impact 
        prices. Traders should therefore be aware of news that might affect prices.
      </p>
      <p className="mb-4">
        <strong>New energy sources:</strong> Growth in renewable energy production (i.e., solar and wind) may cause a decline in the 
        dependence on oil, thereby causing prices to fall.
      </p>
      <p className="mb-4">
        <strong>Global oil production:</strong> The Organization of the Petroleum Exporting Countries (OPEC), plus major oil producers like 
        the USA, Canada, and China, are major influences on the oil price and supply. As such, oil prices fall when output increases and 
        rise when output is restricted.
      </p>
      <p className="mb-4">
        <strong>Exogenous shock:</strong> Events like natural disasters, war, and geopolitical instability can severely impact oil prices. 
        When output or supply is reduced due to an unforeseen 'shock' event, panic buying often leads to higher prices.
      </p>
    </section>
  );
};

export default OilMarket;

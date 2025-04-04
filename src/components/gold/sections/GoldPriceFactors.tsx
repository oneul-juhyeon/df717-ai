
import React from "react";

const GoldPriceFactors: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What might affect the price of gold</h2>
      
      <div className="my-8">
        <img 
          src="/gold4.png" 
          alt="Gold price chart and factors" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <ul className="space-y-4">
        <li>
          <strong className="font-semibold">Supply and demand:</strong> Regardless of how popular it is to buy ETFs or trade CFDs and futures, 
          variations in the physical demand and supply of any commodity will cause fluctuations in its price. Demand for gold comes from 
          jewellery and industrial applications, investments, and central banks, while supply comes from mining operations, central bank 
          sales, and precious ore recycling. Even though new gold finds are becoming increasingly rare, mining still accounts for 75% of 
          the supply, and the discovery of new deposits can drive prices lower.
        </li>
        <li>
          <strong className="font-semibold">Geopolitical developments:</strong> The yellow metal is widely seen as a safe haven, and prices 
          tend to climb during times of global concerns, such as political unrest, trade conflicts, and natural disasters, as investors 
          seek refuge in gold.
        </li>
        <li>
          <strong className="font-semibold">Economic uncertainty:</strong> When investors are concerned about rising inflation and declining 
          interest rates, gold tends to appreciate since holding cash becomes less appealing. Other factors influencing gold prices include 
          GDP growth, economic uncertainty, and market volatility.
        </li>
        <li>
          <strong className="font-semibold">Fiscal policy:</strong> As gold is priced in US dollars, the commodity and the currency have an 
          inverse relationship. Expectations and announcements regarding rising interest rates in the United States will strengthen the dollar 
          while putting pressure on gold. Conversely, talk and anticipation of lower rates may cause the US Dollar to fall while gold prices rise.
        </li>
        <li>
          <strong className="font-semibold">Gold benchmark:</strong> The price set by the London Bullion Market Association (LBMA) is the most 
          widely used gold price in the world.
        </li>
        <li>
          <strong className="font-semibold">Investor sentiment:</strong> In addition to the variables mentioned above, market participants' perceptions 
          of gold as an investment can fuel speculative trading and produce short-term volatility.
        </li>
      </ul>
    </section>
  );
};

export default GoldPriceFactors;

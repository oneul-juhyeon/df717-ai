
import React from "react";

const ForexMarket: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What is the forex market?</h2>
      
      {/* Market Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex2.png" 
          alt="The Forex Market" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        The forex trading market is not a physical marketplace. Instead, it is a decentralised global network that operates 24 hours a day, five days a week. In the forex market, traders buy and sell currency pairs based on how much value they have in relation to one another.
      </p>
      
      <p className="mb-4 text-left">
        For example, if you live in the USA and are travelling to Europe, you will use your US dollars (USD) to buy euros (EUR). In the forex market, that transaction is represented by the symbols EUR/USD.
      </p>
      
      <p className="mb-4 text-left">
        Because the forex market operates on a decentralised model with no physical control point or central exchange, no one person or organisation controls it. Instead, electronic transactions take place directly between two parties; this is called an 'over the counter' (OTC) market. You can think of it as a vast digital network where transactions flow freely between banks, financial institutions, and individuals around the world.
      </p>
      
      <p className="mb-4 text-left">
        A wide number of factors influence the value of currencies on the foreign exchange market; inflation, economic growth, consumer confidence in a particular country, unemployment data, and even house prices can all contribute to where a currency sits on the market.
      </p>
      
      <p className="mb-4 text-left">
        To help understand the movements of the forex market, you can refer to a forex economic calendar and see how price changes correlate with events like news releases and the publication of economic data.
      </p>
      
      <p className="mb-4 text-left">
        The global nature of the forex market means it operates 24 hours a day, with the busiest times for transaction volume shifting between major financial centres across different time zones.
      </p>
    </>
  );
};

export default ForexMarket;

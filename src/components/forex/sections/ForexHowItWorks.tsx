
import React from "react";

const ForexHowItWorks: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">How does forex trading work?</h2>
      
      {/* How It Works Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex10.png" 
          alt="How Forex Trading Works" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        Let's look at a simple example to demonstrate how a forex trade works:
      </p>
      
      <p className="mb-4 text-left">
        Suppose you believe the euro (EUR) will strengthen against the US dollar (USD); in other words, you think the value of the EUR will increase relative to the USD.
      </p>
      
      <p className="mb-4 text-left">
        You open a trading account online and decide to buy 10,000 units of the EUR/USD currency pair at the current exchange rate of 1.1000. The total size of your CFD trade position will be:
      </p>
      
      <p className="mb-4 text-left font-semibold">
        10,000 EUR x 1.1000 = $11,000
      </p>
      
      <p className="mb-4 text-left">
        Now that your trade is open, let's say the EUR/USD exchange rate rises to 1.1200 and you decide to close your trade position. At that point, the difference between the opening and closing exchange rates is 0.0200 (1.1200 – 1.1000). You traded 10,000 units, so your profit calculation looks like this:
      </p>
      
      <p className="mb-4 text-left font-semibold">
        0.0200 x 10,000 = $200
      </p>
      
      <p className="mb-4 text-left">
        Because the value of the EUR has gone up, you make a $200 profit.
      </p>
      
      <p className="mb-4 text-left">
        However, if the exchange rate had moved against your prediction, you would have incurred a loss. For example, if the price of EUR went down from 1.1000 to 1.0900 (a 0.0100 difference), your loss would be calculated as follows:
      </p>
      
      <p className="mb-4 text-left font-semibold">
        0.0100 x 10,000 = $100
      </p>
      
      <p className="mb-4 text-left">
        These examples show the difference that small fluctuations in pricing can make, so when trading forex, it's important to only risk what you can afford to lose.
      </p>
    </>
  );
};

export default ForexHowItWorks;

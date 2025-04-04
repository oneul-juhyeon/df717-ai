
import React from "react";

const ForexTrading: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What is forex trading?</h2>
      
      {/* Trading Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex9.png" 
          alt="Forex Trading" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        Forex trading is the act of buying and selling currencies. Just as you exchange physical money using a forex transaction on an overseas holiday, forex trading involves buying one currency while simultaneously selling another. A key difference is that forex trading is done specifically to try to generate profit from the exchange.
      </p>
      
      <p className="mb-4 text-left">
        All forex trades involve two currencies. As the prices of currencies fluctuate in the open market, for example, due to supply and demand factors, traders will speculate that the value of one currency will appreciate or depreciate relative to another. If the trader anticipates the market direction correctly, they can make a profit. If not, they will take a loss. Fundamentally, generating a profit by trading FX is as simple as buying low and selling high, or vice versa.
      </p>
      
      <p className="mb-4 text-left">
        This multi-directional profit-taking is possible because, unlike traditional investing, forex trading does not involve the purchase or ownership of the underlying currencies. Instead, traders only speculate on price changes using a type of derivative called a Contract for Difference (CFD). The major advantage of CFD trading is that traders can potentially generate a profit by speculating on a falling price, unlike stocks or physical assets, where it is only possible to profit if a price increases above the level you paid for it.
      </p>
    </>
  );
};

export default ForexTrading;

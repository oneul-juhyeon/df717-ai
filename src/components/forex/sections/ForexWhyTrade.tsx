
import React from "react";

const ForexWhyTrade: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Why trade forex?</h2>
      
      {/* Why Trade Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex12.png" 
          alt="Why Trade Forex" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        The main reason to trade forex is the potential to generate profits by trading currency pairs.
      </p>
      
      <p className="mb-4 text-left">
        Forex trading is a popular way to start investing with relatively small amounts of capital and combined with the use of leverage, gain exposure to trades of larger value. Additionally, because forex trading is done as a CFD product, traders don't have to worry about the costs involved in taking ownership of an underlying asset; with FX trades, all you are doing is trading the real-time price movements of the underlying asset in the open market. Note that while leveraged trading offers the potential for higher returns, it can also amplify losses.
      </p>
      
      <p className="mb-4 text-left">
        The 24-hour FX markets also offer a lot of convenience and flexibility, allowing you to trade during various hours of the day. This can be particularly beneficial for anyone already in full- or part-time employment, as trading can be done outside of normal work hours.
      </p>
    </>
  );
};

export default ForexWhyTrade;

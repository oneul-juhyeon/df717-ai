
import React from "react";

const SharesDifference: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Differences between traditional stock trading and stock CFDs?</h2>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/shares3.png" 
          alt="Traditional Stocks vs CFDs" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        Both traditional stock trading and stock CFDs are trading options that provide exposure to stock price movements. However, there are some key differences between them.
      </p>
      <p className="mb-4 text-left">
        With traditional stock trading, you take direct ownership of the assets, and you can only profit if the stock goes up in value from the moment you bought it.
      </p>
      <p className="mb-4 text-left">
        With stock CFDs, you can go long (buy) or short (sell) and potentially benefit from either direction of the market.
      </p>
      <p className="mb-4 text-left">
        Since stock CFDs are based on stock price movements rather than ownership, you have the flexibility to speculate whether the price will increase or decrease.
      </p>
      <p className="mb-4 text-left">
        By combining CFDs with leverage, only a small percentage of the value of a trade is required to open the position. In contrast, investing directly in traditional stocks could require a lot more capital. However, note that when trading with leverage, you are subjected to margin requirements. If your total balance falls below the margin requirement, your positions will close automatically with a loss.
      </p>
    </>
  );
};

export default SharesDifference;

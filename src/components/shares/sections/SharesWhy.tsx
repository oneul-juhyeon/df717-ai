
import React from "react";

const SharesWhy: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">How does stock trading work?</h2>
      <p className="mb-4 text-left">
        When trading stock CFDs, you should consider a number of factors, such as regulation (verify that the broker is regulated in your county of residency), risk management, and fees.
      </p>
      <p className="mb-4 text-left">
        First, you will need to pick a broker that offers stock CFDs. Look for a brokerage that offers a wide range of stocks across multiple markets and can ensure competitive and transparent fees.
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/shares4.png" 
          alt="How Stock Trading Works" 
          className="w-full h-auto rounded-lg"
        />
      </div>

      <p className="mb-4 text-left">
        Next, you'll need to open a MetaTrader 4 (MT4) account so that you can use the trading platform to see all the different shares you can trade.
      </p>
      <p className="mb-4 text-left">
        Once you're done with this step, you can access the world of stock CFDs. Now you need to decide which stocks you want to add to your portfolio by either buying or selling.
      </p>
      <p className="mb-4 text-left">
        To answer that question, you will have to analyse the stock price movements and see which ones present the best trading opportunities. To do this, there are two well-known methods of analysis available:
      </p>
      <ul className="list-disc ml-6 mb-4 text-left text-white">
        <li>Fundamental analysis</li>
        <li>Technical analysis</li>
      </ul>
      <p className="mb-4 text-left">
        Applying a combination of these two methods can help you better drill down into short-term or long-term trading opportunities. With stock CFDs, you can trade in both directions: going long if you think the stock price is going to rise and going short if you think the stock price is going to drop. You would not have this flexibility if you owned the underlying asset.
      </p>
      <p className="mb-4 text-left">
        Once you have narrowed down the stocks you want to trade, it's time to set up the right risk management tools. As tempted as you may be to just dive into trading immediately, it's important to realise that trading stock CFDs is risky, and without the necessary risk management tools in place, you stand to lose all your money.
      </p>
      <p className="mb-4 text-left">
        Risk management entails evaluating the likelihood of your trades being correct or incorrect and allocating appropriate risk to them. Determine the lot size of your trade based on the distance between your stop loss and the amount of capital you are willing to risk losing.
      </p>
      <p className="mb-4 text-left">
        At this stage, you would have ideally placed your first trade in the stock market. Most people tend to gravitate towards the US market, but you can also trade popular stocks in the UK as well as well-known European stocks. Diversifying your portfolio is important when you want to start trading stocks, yet stock diversification is often undervalued by traders.
      </p>
    </>
  );
};

export default SharesWhy;

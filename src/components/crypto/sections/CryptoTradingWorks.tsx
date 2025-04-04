
import React from "react";

const CryptoTradingWorks: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How does cryptocurrency trading work?</h2>
      <p className="mb-4">
        There are two ways to profit from cryptocurrencies. The first is using a digital wallet to buy cryptocurrency at the current market rate, like investing in stocks. Once you own the currency, you profit by selling it at a higher price than what you paid.
      </p>
      <p className="mb-4">
        Alternatively, you can trade cryptocurrencies as CFDs. This is the same as trading FX and commodities, where you do not own the 'physical' asset but instead trade on the price movements, meaning you can profit whether the price is going up or down.
      </p>
      <p className="mb-4">
        Because cryptocurrency CFD trading allows you to use leverage, a small amount of capital can give you access to a higher-value trade. For example, $1,000 in your trading account with a leverage of 100:1 allows you to open trades to a value of $100,000. Note that while leverage can generate high returns, it also increases the level of risk.
      </p>
      <p className="mb-4">
        To help understand how crypto CFD trading works, let's use a simple example:
      </p>
      <p className="mb-4">
        You want to trade Bitcoin, which is currently priced at $50,000. You believe that the price will go up, so you decide to go long (buy) on Bitcoin. You then enter a contract with a broker to exchange the difference in price between the current price of $50,000 and the future price at which you will close the trade.
      </p>
      <p className="mb-4">
        Suppose the price does rise, and you close the position when the price of one Bitcoin reaches $60,000. The $10,000 difference in price between when you opened and closed the trade would be your profit. However, you would have suffered a loss if Bitcoin's price fell.
      </p>
      <p className="mb-4">
        Trading CFDs allows you to benefit even when the market price is falling. In that instance, if you believe the price of Bitcoin will fall, you might enter a short (sell) position. If the market price did go down, you would make a profit. But in this situation, you would lose money if the market price rose.
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/crypto3.png" 
          alt="How cryptocurrency trading works" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default CryptoTradingWorks;

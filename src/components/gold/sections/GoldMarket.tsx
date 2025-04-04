
import React from "react";

const GoldMarket: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is the gold market?</h2>
      <p className="mb-4">
        The gold market is a general term that refers to all the channels through which gold or its derivatives are traded 
        globally and across all time zones.
      </p>
      <p className="mb-4">
        This comprises physical markets and markets for investors and speculators such as exchange-traded funds (ETFs), 
        futures and options markets.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Top gold exchanges</h3>
      <p className="mb-4">
        Gold is primarily traded over the counter (OTC) and on exchanges. London is the global centre for the OTC market, 
        where market players trade directly with one another. While this market is less regulated and more flexible, 
        the counterparty risk is potentially higher.
      </p>
      <p className="mb-4">
        Three significant gold trading centres account for more than 90% of worldwide gold trading volumes and play 
        a key role in driving price discovery. These are:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          The London OTC market, which trades 400-ounce bars. It sets the London Bullion Market Association (LBMA) 
          gold price twice a day, the global reference benchmark for gold.
        </li>
        <li className="mb-2">
          The Chicago Mercantile Exchange (CME) Group operates the US futures market (COMEX derivatives exchange). 
          While only a few contracts are physically fulfilled with the delivery of bars, the exchange is becoming 
          increasingly important in the pricing of gold.
        </li>
        <li className="mb-2">
          China is home to the Shanghai Gold Exchange (SGE), the world's largest physical spot exchange, which launched 
          the Shanghai Gold price benchmark in 2016, as well as the bustling Shanghai Futures Market (SHFE).
        </li>
      </ul>
      
      <p className="mb-4">
        Recent indicators indicate a move to the east. Dubai, India, Japan, Singapore, and Hong Kong are among the other 
        secondary markets.
      </p>
      <p className="mb-4">
        Exchanges are regulated platforms with centralised trading. They typically provide a standardised contract, which 
        will not suit every trader as it might limit their flexibility.
      </p>
      
      <div className="my-8">
        <img 
          src="/gold3.png" 
          alt="Gold market trading floor" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Gold market participants</h3>
      <p className="mb-4">
        Due to the popularity and varied usage of gold, the gold market has a diverse range of participants with different objectives.
      </p>
      <p className="mb-4">
        Jewellery manufacturers and industries that use gold, such as the electronics industry, must get their hands on the 
        physical asset; they also enter the futures markets to hedge against unfavourable changes in market value.
      </p>
      <p className="mb-4">
        Customers who wish to invest in gold and own it in the form of bars and coins can do so through a specialised market. 
        Due to gold's quality as a store of value, this group typically prefers to hold onto their gold for the long term, 
        despite short-term swings.
      </p>
      <p className="mb-4">
        Investors of all sizes trade gold to speculate on price swings or diversify their portfolios. Banks and hedge funds, 
        for example, trade gold as part of their risk management strategies.
      </p>
      <p className="mb-4">
        Central banks use physical gold as part of their foreign exchange reserves, as a store of stability for the country's 
        currency, and as a hedge against geopolitical concerns.
      </p>
      <p className="mb-4">
        Short-term speculators and long-term investors are more interested in gold as an investment or speculative vehicle than 
        in physical ownership.
      </p>
      <p className="mb-4">
        Short-term investors can gain exposure to price movements, which are typically accentuated by leverage, without owning 
        the underlying commodity by employing financial derivatives, such as gold futures, options, and exchange-traded funds (ETFs).
      </p>
      
      <h4 className="text-xl font-bold mt-6 mb-2">Speculators typically:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-1">Trade futures contracts, or CFDs.</li>
        <li className="mb-1">Go both long and short.</li>
        <li className="mb-1">
          Hold positions from seconds to months, depending on their profile (e.g., an algorithmic fund may keep the position open 
          for seconds, while a macro hedge fund may keep the position open for months).
        </li>
      </ul>
      
      <p className="mb-4">
        Longer-term investors are lured to the market as well because of gold's long-term appreciation, which has made it the 
        investment of choice for hedging against inflation, currency fluctuations, geopolitical conflicts, and financial market volatility.
      </p>
      
      <h4 className="text-xl font-bold mt-6 mb-2">Investors typically:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-1">Buy actual gold bullion (bars, ingots, and coins) or invest in gold ETFs.</li>
        <li className="mb-1">Hold it for a long time.</li>
        <li className="mb-1">Use it as an inflation hedge and diversify their portfolio.</li>
      </ul>
    </section>
  );
};

export default GoldMarket;

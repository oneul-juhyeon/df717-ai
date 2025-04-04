
import React from "react";

const IndicesHowItWorks: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">How does index trading work?</h2>
      <p className="mb-4 text-left">
        When you trade indices online, there are two main types: index 'cash' CFDs and index 'futures' CFDs. The main difference between the cash market and futures market is that the cash market does not have an expiry date. The futures market, however, has an expiry date, normally known as a 'rollover.' A futures contract is effectively an agreement between the buyer and the seller on the price that must be paid by the buyer at a given future date.
      </p>

      {/* How it Works Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/indices5.png" 
          alt="How Index Trading Works" 
          className="w-full h-auto rounded-lg"
        />
      </div>

      <h3 className="text-2xl font-semibold mt-6 mb-3">There are two main types of indices you can trade:</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-left">
        <li><strong>Index cash CFDs:</strong> Featuring tighter spreads based on spot pricing, cash indices are more suitable for short-term traders. Cash CFD (Contract for Difference) traders tend to avoid holding positions overnight to avoid paying overnight trade charges and will reopen trades the next day.</li>
        <li><strong>Index futures CFDs:</strong> With a contract based on a price for future delivery, Index Futures CFD trades are preferred by traders interested in medium- to long-term trading. This is because this type of trade does not incur overnight funding or swap charges.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">An example of index CFD trading:</h3>
      <p className="mb-4 text-left">
        Let us assume that the FTSE is currently trading at the 6659.97 level.
      </p>
      <p className="mb-4 text-left">
        Your technical indicators suggest an entry signal, with the belief that the market sentiment is positive towards the FTSE, and you decide to purchase one lot. This position size has USD$1 of profit or loss for every point of movement in the price.
      </p>
      <p className="mb-4 text-left">
        Two days later, as you anticipated, the FTSE has pushed higher and is trading at 6701.97. Now, your profit is calculated by subtracting the opening price from the closing price:
      </p>
      <p className="mb-4 text-left font-medium">
        (6701.97 - 6659.97) x USD$1 = USD$42.
      </p>
      <p className="mb-8 text-left">
        Note: In the above example, profit and loss are calculated in the currency of the region that the index is tied to. However, with most brokers, the profit and loss are automatically converted to your chosen account currency in real-time, based on the current exchange rate.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">What is the best time to trade indices?</h3>
      <p className="mb-4 text-left">
        There are certain time periods throughout the trading week where market volumes and prices tend to be more active as the market factors in all the news and events since the previous close. For experienced traders, the interval between 9:30 and 10:30 a.m. ET is one of the best hours of the day, as it offers the biggest moves in the shortest amount of time.
      </p>
      <p className="mb-4 text-left">
        You should also consider that different indices are traded at separate times, depending on the individual exchange. If you are new to trading, you may want to consider avoiding trading during these hours, when high volatility may cause rapid price fluctuations. However, this can also be the ideal time to learn by observing and analysing market behaviour.
      </p>
      <p className="mb-8 text-left">
        The optimum time to trade is simply when the markets open in different time zones. Because index markets do not operate continually like the currency market, you must choose the optimal time to open a trade.
      </p>
    </>
  );
};

export default IndicesHowItWorks;

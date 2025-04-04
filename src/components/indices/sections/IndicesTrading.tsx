
import React from "react";

const IndicesTrading: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What is index trading?</h2>
      <p className="mb-4 text-left">
        Index trading is the buying and selling of a specific stock market index. Traders speculate on the price of an index rising or falling, which then determines whether they will be buying (going long) or selling (going short).
      </p>
      <p className="mb-4 text-left">
        It is important to understand that an index only represents the performance of a group of stocks, and trading indices does not mean you are buying any actual underlying stock to take ownership of. Instead, you are trading the average performance or price movements of the group of stocks. When the price of shares for the companies within an index goes up, the value of the index increases. If the price instead falls, the value of the index will drop.
      </p>
      <p className="mb-4 text-left">
        To understand what index trading is, we need to explore the factors behind the price movement.
      </p>

      {/* Trading Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/indices4.png" 
          alt="Index Trading Illustration" 
          className="w-full h-auto rounded-lg"
        />
      </div>

      <p className="mb-4 text-left">
        The movement of index prices is primarily dependent on external forces. The price will decrease in times of uncertainty that bring weakness to the relevant country's economy. Some factors that can impact the price of an index include:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8 text-left">
        <li><strong>Global news:</strong> Events such as natural disasters, pandemics, political instability, conflicts, and wars can all have a major impact on indices. It could be confined to only one country (e.g., an earthquake in Japan) or it could have a global impact (e.g., a war between two or more countries).</li>
        <li><strong>Economic news:</strong> Economic events and meetings such as central bank rate decisions, non-farm payrolls, trade agreements, and employment indicators can have a major impact on indices. Some could be specific to only one index; for example, UK employment numbers would primarily impact the FTSE 100 (Britain´s main stock index). Other events, such as the meeting of the US central bank, could impact indices all around the world because the USD is the dominant global currency.</li>
        <li><strong>Index reshuffle:</strong> When a company's stock is added or removed from a stock index, it can impact the price of the index. Generally, a reshuffling of the index is beneficial for investors, as it ensures only relevant companies remain part of the index. One example is the once-famous photography company Kodak. It was a part of both the Dow Jones 30 and the S&P 500 for a long time but was eventually dropped from both indices as it continued to struggle, and its market capitalization shrank.</li>
        <li><strong>Company news:</strong> Earnings results, mergers and acquisitions, changes in leadership, and other major company-specific news can all affect the index of which the company is a part. The higher the weight of the company, the more impact the news will have on the index. For example, Apple announcing much better than anticipated earnings numbers would have a positive impact on both the S&P 500 and the NASDAQ 100.</li>
      </ul>
    </>
  );
};

export default IndicesTrading;

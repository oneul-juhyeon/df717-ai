
import React from "react";

const IndicesMarket: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What is the indices market?</h2>
      <p className="mb-4 text-left">
        The indices market is the market where indices and related financial products are traded. This market is made up of top-performing groups of individual indexes from different countries and representing different sectors.
      </p>
      <p className="mb-4 text-left">
        Below is a list of the most popular indices in the world. Many of them include "blue-chip" stocks. Blue-chip companies are typically well-established, considered to be market leaders in their sector, and likely to have a market capitalisation value in the billions of dollars.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8 text-left">
        <li><strong>Dow Jones Industrial Average:</strong> One of the leading US stock indices, consisting of 30 large, US-listed companies.</li>
        <li><strong>S&P 500:</strong> America´s most famous stock index, consisting of the 500 largest companies listed on stock exchanges in the United States.</li>
        <li><strong>EURO STOXX 50:</strong> Represents 50 blue-chip companies listed within the eurozone. It can be seen as the eurozone´s version of the Dow Jones index.</li>
        <li><strong>Nasdaq 100:</strong> One of the world´s most watched indices, consisting mostly of heavyweights in the technology sector. Despite its name, it actually consists of 101 securities issued by the 100 largest non-financial companies listed on NASDAQ.</li>
        <li><strong>FTSE 100:</strong> An index representing the 100 companies listed on the London Stock Exchange with the largest market capitalisation.</li>
        <li><strong>DAX 40:</strong> Germany´s most important stock index, consisting of 40 major blue-chip companies listed on the Frankfurt Stock Exchange.</li>
        <li><strong>CAC 40:</strong> An index representing 40 major blue-chip companies listed on Euronext Paris.</li>
        <li><strong>Nikkei 225:</strong> Japan´s leading stock index. It is a price-weighted index and tracks the performance of 225 large companies listed on the Tokyo Stock Exchange (TSE).</li>
        <li><strong>Hang Seng:</strong> Tracking the performance of 73 large companies listed on the Hong Kong Stock Exchange.</li>
        <li><strong>ASX 200:</strong> A benchmark index for the Australian stock market. It consists of the 200 largest stocks listed on the Australian Securities Exchange, measured by market capitalization.</li>
      </ul>

      {/* Market Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/indices3.png" 
          alt="Global Indices Market" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </>
  );
};

export default IndicesMarket;

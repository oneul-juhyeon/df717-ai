
import React from "react";

const CommoditiesAdvantages: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What are the advantages of trading commodities?</h2>
      
      <div className="mb-8">
        <img 
          src="/lovable-uploads/commodities7.png" 
          alt="Advantages of Trading Commodities" 
          className="w-full h-auto rounded-lg shadow-md my-6"
        />
      </div>
      
      <p className="mb-6">
        Commodities are among the world's top-traded products. Here is why:
      </p>
      
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-6">
          <strong>Liquidity:</strong> The large derivatives market for commodities, consisting of market makers, speculators, hedgers, and corporations, makes it a highly liquid market. This means that traders can easily buy and sell, i.e., get in and out of their positions when they wish to do so. It also means the market is more open and transparent, that the cost of trading the instrument is cheaper than in illiquid markets, and that it cannot be easily manipulated.
          <p className="mt-2">
            Some commodities are more liquid than others. For example, gold and oil are among the most traded instruments worldwide. On the other hand, commodities like corn and soybeans are less liquid, and price movements could be more erratic.
          </p>
        </li>
        <li className="mb-4">
          <strong>Low margin:</strong> The margin deposit needed to start futures trading can be as low as 5-10% of the total value of the contract. A lower margin requirement allows traders to control larger positions with less capital being used as margin.
        </li>
        <li className="mb-4">
          <strong>Hedging capabilities:</strong> Participants in the market who are exposed to physical commodities may seek to mitigate their risk by trading in the derivatives market. Rather than looking to profit from their positions, their goal is to protect themselves from adverse price swings.
        </li>
        <li className="mb-4">
          <strong>Portfolio diversification:</strong> Investors who feel overexposed to a certain asset class, such as stocks can choose investments in the commodities space to diversify their portfolio. This can be done through:
          <ol className="list-decimal pl-6 mt-2">
            <li>Exchange Traded Funds (ETFs) based on gold, oil, or any other commodity</li>
            <li>Futures positions based on gold, oil, or any other commodity</li>
            <li>Shares of a commodity-producing company (either a specialised one, such as a major gold mining company, or a widely diversified producer)</li>
            <li>CFD positions based on a commodity futures contract</li>
          </ol>
        </li>
        <li className="mb-4">
          <strong>Protection against inflation:</strong> Commodity prices tend to increase during times of high inflation. Gold is one of the most famous inflation hedges, and investor demand tends to spike when inflation is on the rise.
        </li>
      </ul>
    </section>
  );
};

export default CommoditiesAdvantages;

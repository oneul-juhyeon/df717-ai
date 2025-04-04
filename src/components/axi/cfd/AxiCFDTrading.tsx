
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AxiCFDTrading: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What is CFD trading?</h2>
      <p className="mb-6 text-left">
        When trading a CFD, you enter into a contract with a broker to exchange the difference in the price of the underlying asset between the opening and closing of the contract. If you believe the market price of the asset (e.g., forex currencies, stocks, commodities) will rise, you can go long (buy), and if you expect it to fall, you can go short (sell). The profit or loss is determined by the difference in the price movement of the asset in the open market.
      </p>
      
      <h2 className="text-3xl mt-12 mb-4">How does CFD trading work?</h2>
      <p className="mb-6 text-left">
        CFD trading works by allowing you to speculate on the price movements of a financial instrument without having to take ownership of the underlying asset. If the market price of the asset moves in the same direction as your CFD trade, you will make a profit.
      </p>
      
      <p className="mb-6 text-left">
        There are two prices to look for in a CFD trade: the "buy" price and the "sell" price. The action you choose to take will depend on whether you think the price will rise or fall.
      </p>
      
      <ul className="list-disc pl-6 mb-6 text-left">
        <li className="mb-2">
          <strong>Long position:</strong> A long position takes place when a trader places a BUY trade. Here, the trader expects that the asset value will rise over time. The trader will BUY at a low price but SELL once the price rises.
        </li>
        <li className="mb-2">
          <strong>Short position:</strong> A short position happens when the trader feels there will be a decline in the value of the asset and selects a SELL position.
        </li>
      </ul>
      
      {/* Buy/Sell Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/axi-cfd3.png" 
          alt="Buy and Sell CFDs" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">Let's explore that concept using some examples:</p>
      
      <ul className="list-disc pl-6 mb-6 text-left">
        <li className="mb-4">
          <strong>Gold CFD trading example:</strong> You see that gold is currently priced at $1,820. As you follow market news and economic analysis, you speculate that the value of gold will increase. You, therefore, open a 'long' position at gold's current buy price. Let's assume that, at the time of contract closing, the price of gold has gone up to $1,901. The market direction matches the direction of your trade, so your CFD position has made a profit. However, if the price had decreased below your initial purchase price, you would have incurred a loss.
        </li>
        <li className="mb-4">
          <strong>Shares CFD trading example:</strong> After Meta posted a disappointing earnings report, you are convinced the company is overvalued and that this is the beginning of a deeper correction instead of a temporary sell-off. Therefore, you decide to short Meta at $250. If the stock price of Meta did continue to slide, your trade would show a profit. However, if the price of Meta rebounds and rises back above $250, you would face a loss in your position.
        </li>
      </ul>
      
      <h2 className="text-3xl mt-12 mb-4">Why trade CFDs?</h2>
      <p className="mb-6 text-left">
        A key advantage of CFD trading is the accessibility it provides to a wide range of markets and assets. With CFDs, traders can access various financial instruments, including stocks, indices, commodities, and currencies, all from a single trading platform. This means traders can diversify their portfolios and take advantage of opportunities in different markets, even if they don't have direct access to those assets. The ability to trade on margin also enhances accessibility, as it allows traders to control larger positions with a smaller amount of capital, potentially amplifying their potential returns.
      </p>
      
      <Alert className="bg-yellow-50 text-yellow-800 border border-yellow-200 mb-8 text-left">
        <AlertDescription>
          Note: Trading with leverage can also amplify losses, so strict risk management practices should be followed.
        </AlertDescription>
      </Alert>
      
      {/* Trading Platform Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/axi-cfd4.png" 
          alt="Trading Platform" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-8 text-left">
        CFD trading also offers flexibility and the opportunity to profit from both rising and falling markets. With CFDs, traders can take long (buy) positions if they expect an asset's price to rise or short (sell) positions if they anticipate a price decline. This means that traders can potentially profit from market movements in either direction, enabling them to capitalise on different market conditions.
      </p>
    </>
  );
};

export default AxiCFDTrading;

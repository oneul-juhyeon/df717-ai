
import React from "react";

const AxiCFDHowToTrade: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">How to Trade CFDs</h2>
      
      {/* Trading Guide Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/axi-cfd5.png" 
          alt="Trading Guide" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-6 text-left">
        CFD trading is available to anyone who has opened a trading account with an online broker. Once the account has been set up, you can use the following general guide to help with setting up a standard CFD trade:
      </p>
      
      <ol className="list-decimal pl-6 mb-8 text-left">
        <li className="mb-2">
          <strong>Select an asset:</strong> Choose the financial instrument you want to trade, such as stocks, indices, commodities, or currencies.
        </li>
        <li className="mb-2">
          <strong>Choose your position:</strong> Decide whether you think the price of your chosen asset will rise (go long) or fall (go short). If you expect the price to increase, you could enter a long position, and if you expect the price to decrease, you could enter a short position.
        </li>
        <li className="mb-2">
          <strong>Determine your trade size:</strong> Specify the number of CFD units you want to trade. CFDs are typically traded in 'lots,' and each contract represents a specific unit size of the underlying asset.
        </li>
        <li className="mb-2">
          <strong>Set your leverage:</strong> Leverage allows you to control a larger trade position with a relatively smaller amount of capital. However, it's important to note that leverage can amplify both profits and losses.
        </li>
        <li className="mb-2">
          <strong>Monitor the market:</strong> Use the trading platform provided by your broker to monitor the price movements of assets in real time. CFD trading platforms typically offer various tools to help analyse and monitor the market.
        </li>
        <li className="mb-2">
          <strong>Place the trade:</strong> When you are ready to enter the market, place your order through the trading platform. You will specify the type of trade (buy or sell), the trade size, and any additional parameters required by the platform. It is also recommended to use tools such as stop-loss and take-profit to lock in profits and reduce potential losses.
        </li>
        <li className="mb-2">
          <strong>Monitor your position:</strong> Once your trade is executed, monitor your position and track the price movements of the asset. If your trade does not have a set expiry, you can choose to close your position at any time according to your trading strategy.
        </li>
      </ol>
    </>
  );
};

export default AxiCFDHowToTrade;

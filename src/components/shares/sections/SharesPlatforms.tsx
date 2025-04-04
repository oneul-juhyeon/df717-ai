
import React from "react";

const SharesPlatforms: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Stock trading platforms and tools</h2>
      <p className="mb-4 text-left">
        With the use of the right platforms, tools, and plugins, traders can experience online stock trading in a way that is more intuitive, fast, and portable. When finding the right trading platform to trade stock CFDs, these are the ultimate tools to consider.
      </p>

      <div className="my-8">
        <img 
          src="/lovable-uploads/shares6.png" 
          alt="Trading Platforms and Tools" 
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="bg-gray-50 p-6 mb-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">MetaTrader 4</h3>
        <p className="mb-4 text-left">
          MetaTrader 4 is an excellent option for online traders who are looking for a trading edge. It is simple to use and offers extensive functionality for pros, allowing you to access limitless trading opportunities.
        </p>
        <p className="mb-4 text-left">
          <a href="#" className="text-blue-600 hover:underline">Learn about MetaTrader 4</a>
        </p>
      </div>

      <div className="bg-gray-50 p-6 mb-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">AutoChartist</h3>
        <p className="mb-4 text-left">
          AutoChartist continuously scans the market for customised trade opportunities based on real-time pricing and your specific trade setups, then alerts you to potential trades.
        </p>
        <p className="mb-4 text-left">
          <a href="#" className="text-blue-600 hover:underline">Learn about Autochartist</a>
        </p>
      </div>

      <div className="bg-gray-50 p-6 mb-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Copy trading</h3>
        <p className="mb-4 text-left">
          Copy trading is a form of social trading that could provide a smart alternative to traditional trading. Copy trading is particularly useful if you need a break from market analysis, have little time to trade, or have trouble deciding what markets to trade.
        </p>
        <p className="mb-4 text-left">
          <a href="#" className="text-blue-600 hover:underline">Learn about copy trading</a>
        </p>
      </div>
    </>
  );
};

export default SharesPlatforms;

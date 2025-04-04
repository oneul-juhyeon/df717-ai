
import React from "react";

const AxiCFDDifferences: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Differences between CFD trading and traditional trading</h2>
      
      <p className="mb-6 text-left">
        Both CFD and traditional trading (for example, buying stocks) provide exposure to share price movements. However, there are some key differences between the two.
      </p>
      
      <p className="mb-6 text-left">
        When you trade or invest in shares, you take direct ownership of an asset, usually company stocks. In this case, you can only make a profit by selling your shares at a higher price than what you bought them for.
      </p>
      
      <p className="mb-6 text-left">
        With CFD trading, you are only trading price movements, so you can go long (buy) or short (sell) on instruments on a variety of global markets, such as stocks, commodities, forex, and indices. This enables you to potentially profit or lose from price fluctuations on the market without owning the underlying asset.
      </p>
      
      <p className="mb-6 text-left">
        Another key difference between the two is the use of leverage. CFDs are leveraged products, meaning you effectively put down a small percentage of the capital required to open a full trade position, and then borrow the rest from your broker. This allows you to use a small amount of money to potentially make significantly higher returns (or losses). With stock trading, you use your own money to buy a stock, and you are required to pay the full upfront price.
      </p>
      
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200 text-left">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CFD trading</th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional trading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Capital requirement</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Use leverage</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Pay the full upfront price</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Market access</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Multiple markets</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Equities and ETFs</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Asset ownership</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">You do not own the underlying asset</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Ownership of the underlying asset</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Profit potential</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Go short and benefit from falling prices</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">No option to benefit from falling prices</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Shareholder rights</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">No shareholder privileges</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Shareholder privileges and voting rights</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Tax</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">No stamp duty, but profits are liable for capital gains tax</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">You pay stamp duty and capital gains tax on your profits</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Hedging</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Option to hedge your trades</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">Hedging requires the use of derivatives (options, futures, and inverse ETFs)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AxiCFDDifferences;

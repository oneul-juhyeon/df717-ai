
import React from "react";

const SharesDisadvantages: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Advantages of trading stock CFDs</h2>
      <p className="mb-4 text-left">
        CFD trading gives you greater flexibility to open "buy" or "sell" trading positions on a wide range of global markets and potentially benefit from either rising or falling prices. Moreover, the use of leverage could amplify your exposure to the markets.
      </p>
      <p className="mb-8 text-left">
        But what is the right trading method for you? See how stock CFD trading compares to traditional stock trading (investing).
      </p>

      <h2 className="text-3xl mt-12 mb-4">Disadvantages of trading stock CFDs</h2>
      <p className="mb-4 text-left">
        Stock CFDs offer bigger exposure to the markets with the use of leverage, which could potentially amplify profits. However, leverage could also amplify losses. It is also important to remember that, unlike traditional trading, stock CFDs do not give you the option of stock ownership.
      </p>
      <p className="mb-8 text-left">
        When trading with leverage, depending on the region you live in, you might also be subjected to margin requirements. If your total balance falls below the margin requirement, your positions will close automatically with a loss.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-300">Stock CFDs</th>
              <th className="p-3 border border-gray-300">Traditional stock trading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-gray-300">Use leverage</td>
              <td className="p-3 border border-gray-300">Pay full price</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Multiple markets</td>
              <td className="p-3 border border-gray-300">Equities and ETFs</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">You don't own the underlying asset</td>
              <td className="p-3 border border-gray-300">Ownership of the underlying asset</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Go short and benefit from falling prices</td>
              <td className="p-3 border border-gray-300">No option to benefit from falling prices</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">No shareholder privileges</td>
              <td className="p-3 border border-gray-300">Shareholder privileges and potential voting rights</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-300">Option to hedge your trades</td>
              <td className="p-3 border border-gray-300">Hedging requires the use of derivatives (options, futures, and inverse ETFs)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SharesDisadvantages;

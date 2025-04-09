
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
        <div className="w-full">
          {/* Table Header */}
          <div className="flex border-b border-[#5b5b5d] py-4">
            <div className="w-1/2 text-left text-white text-[14px] font-bold px-2">Stock CFDs</div>
            <div className="w-1/2 text-left text-white text-[14px] font-bold px-2">Traditional stock trading</div>
          </div>
          
          {/* Table Rows */}
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/2 text-white text-[14px] px-2">Use leverage</div>
            <div className="w-1/2 text-white text-[14px] px-2">Pay full price</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/2 text-white text-[14px] px-2">Multiple markets</div>
            <div className="w-1/2 text-white text-[14px] px-2">Equities and ETFs</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/2 text-white text-[14px] px-2">You don't own the underlying asset</div>
            <div className="w-1/2 text-white text-[14px] px-2">Ownership of the underlying asset</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/2 text-white text-[14px] px-2">Go short and benefit from falling prices</div>
            <div className="w-1/2 text-white text-[14px] px-2">No option to benefit from falling prices</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/2 text-white text-[14px] px-2">No shareholder privileges</div>
            <div className="w-1/2 text-white text-[14px] px-2">Shareholder privileges and potential voting rights</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/2 text-white text-[14px] px-2">Option to hedge your trades</div>
            <div className="w-1/2 text-white text-[14px] px-2">Hedging requires the use of derivatives (options, futures, and inverse ETFs)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharesDisadvantages;


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
        <div className="w-full">
          {/* Table Header */}
          <div className="flex border-b border-[#5b5b5d] py-4">
            <div className="w-[30%]"></div>
            <div className="w-[35%] text-center text-white text-[14px] font-medium px-2">CFD trading</div>
            <div className="w-[35%] text-center text-white text-[14px] font-medium px-2">Traditional trading</div>
          </div>
          
          {/* Table Rows */}
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-[30%] text-white text-[14px] px-2">Capital requirement</div>
            <div className="w-[35%] text-white text-[14px] px-2">Use leverage</div>
            <div className="w-[35%] text-white text-[14px] px-2">Pay the full upfront price</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-[30%] text-white text-[14px] px-2">Market access</div>
            <div className="w-[35%] text-white text-[14px] px-2">Multiple markets</div>
            <div className="w-[35%] text-white text-[14px] px-2">Equities and ETFs</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-[30%] text-white text-[14px] px-2">Asset ownership</div>
            <div className="w-[35%] text-white text-[14px] px-2">You do not own the underlying asset</div>
            <div className="w-[35%] text-white text-[14px] px-2">Ownership of the underlying asset</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-[30%] text-white text-[14px] px-2">Profit potential</div>
            <div className="w-[35%] text-white text-[14px] px-2">Go short and benefit from falling prices</div>
            <div className="w-[35%] text-white text-[14px] px-2">No option to benefit from falling prices</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-[30%] text-white text-[14px] px-2">Shareholder rights</div>
            <div className="w-[35%] text-white text-[14px] px-2">No shareholder privileges</div>
            <div className="w-[35%] text-white text-[14px] px-2">Shareholder privileges and voting rights</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-[30%] text-white text-[14px] px-2">Tax</div>
            <div className="w-[35%] text-white text-[14px] px-2">No stamp duty, but profits are liable for capital gains tax</div>
            <div className="w-[35%] text-white text-[14px] px-2">You pay stamp duty and capital gains tax on your profits</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-[30%] text-white text-[14px] px-2">Hedging</div>
            <div className="w-[35%] text-white text-[14px] px-2">Option to hedge your trades</div>
            <div className="w-[35%] text-white text-[14px] px-2">Hedging requires the use of derivatives (options, futures, and inverse ETFs)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AxiCFDDifferences;

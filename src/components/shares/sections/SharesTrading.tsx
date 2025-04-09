
import React from "react";

const SharesTrading: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What is stock trading?</h2>
      <p className="mb-4 text-left">
        Stock trading is a type of investment activity where individuals or institutions buy and sell stocks on various financial markets. It involves analysing market trends, company performance, and economic factors to make informed decisions about buying or selling stocks.
      </p>
      <p className="mb-8 text-left">
        Owning stocks can come with benefits such as a claim on assets, the power to vote, and receiving dividends.
      </p>
      
      <div className="mb-8">
        <h3 className="text-2xl mb-4">Common Stock Types</h3>
        <div className="w-full overflow-x-auto">
          <div className="w-full">
            {/* Table Header */}
            <div className="flex border-b border-[#5b5b5d] py-4">
              <div className="w-1/2 text-left text-white text-[14px] font-bold px-2">Type</div>
              <div className="w-1/2 text-left text-white text-[14px] font-bold px-2">Description</div>
            </div>
            
            {/* Table Rows */}
            <div className="flex border-b border-[#5b5b5d] py-[15px]">
              <div className="w-1/2 text-white text-[14px] px-2">Growth Stocks</div>
              <div className="w-1/2 text-white text-[14px] px-2">Companies expected to grow at an above-average rate</div>
            </div>
            
            <div className="flex border-b border-[#5b5b5d] py-[15px]">
              <div className="w-1/2 text-white text-[14px] px-2">Value Stocks</div>
              <div className="w-1/2 text-white text-[14px] px-2">Stocks that appear to trade for less than their intrinsic value</div>
            </div>
            
            <div className="flex border-b border-[#5b5b5d] py-[15px]">
              <div className="w-1/2 text-white text-[14px] px-2">Blue-Chip Stocks</div>
              <div className="w-1/2 text-white text-[14px] px-2">Shares of large, well-established companies with stable earnings</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharesTrading;

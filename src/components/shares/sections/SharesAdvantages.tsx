
import React from "react";

const SharesAdvantages: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Why trade stock CFDs?</h2>
      <p className="mb-4 text-left">
        Trading stock CFDs allows you to get involved with your favourite global companies by speculating on price movements.
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/shares5.png" 
          alt="Trading Stock CFDs" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <h3 className="text-2xl mt-8 mb-4 font-bold">1. Flexibility to go long and short</h3>
      <p className="mb-4 text-left">
        Trading stock CFDs offers flexibility and allows you to potentially profit from either market direction. You can go long (buy) when you expect prices to go up or go short (sell) when you expect prices to drop.
      </p>
      <p className="mb-4 text-left">
        Traditional stock trading differs from CFD trading in that it derives value from ownership. When you own the underlying asset, the stock price must increase to make a profit - you can only trade in one direction.
      </p>
      
      <h3 className="text-2xl mt-8 mb-4 font-bold">2. Leverage</h3>
      <p className="mb-4 text-left">
        Stock CFDs allow you to trade on margin. This means you only need to put up a small percentage of the full value of a trade to open a position. Investing directly in traditional stocks could often require generous initial capital because you are paying the full price for every single share you are buying.
      </p>
      <p className="mb-4 text-left">
        For most CFD brokers, a trader only needs to pay 5% of the full price of the share. In practice, this means you can enter a position that is 20 times larger with the same amount of capital when compared to traditional shares.
      </p>
      <p className="mb-4 text-left">
        Stock CFDs are leveraged, meaning you can potentially make higher profits with a smaller amount of capital. While this can increase returns, it also increases the risk of loss.
      </p>
      
      <h3 className="text-2xl mt-8 mb-4 font-bold">3. FAANG: Top technology companies</h3>
      <p className="mb-4 text-left">
        FAANG is an acronym for the five largest companies in the technology sector of the US Stock Market. They are:
      </p>
      <ul className="list-disc ml-6 mb-4 text-left text-white">
        <li>F - Facebook (FB)</li>
        <li>A - Apple (AAPL)</li>
        <li>A - Amazon (AMZN)</li>
        <li>N - Netflix (NFLX)</li>
        <li>G - Google (GOOG or GOOGL)</li>
      </ul>
      <p className="mb-8 text-left">
        As well as being household names due to the nature of the services they provide, the FAANG stocks will be familiar to most people simply because of how large and profitable they are. But perhaps the most important thing for traders and investors is that they continue to have strong potential for growth.
      </p>
      
      <div className="overflow-x-auto">
        <div className="w-full">
          {/* Table Header */}
          <div className="flex border-b border-[#5b5b5d] py-4">
            <div className="w-1/3 text-left text-white text-[14px] font-bold px-2">US Stocks</div>
            <div className="w-1/3 text-left text-white text-[14px] font-bold px-2">UK Stocks</div>
            <div className="w-1/3 text-left text-white text-[14px] font-bold px-2">EU Stocks</div>
          </div>
          
          {/* Table Rows */}
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Alibaba</div>
            <div className="w-1/3 text-white text-[14px] px-2">Aviva</div>
            <div className="w-1/3 text-white text-[14px] px-2">Adidas</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Alphabet</div>
            <div className="w-1/3 text-white text-[14px] px-2">BP</div>
            <div className="w-1/3 text-white text-[14px] px-2">Airbus</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Amazon</div>
            <div className="w-1/3 text-white text-[14px] px-2">easyJet</div>
            <div className="w-1/3 text-white text-[14px] px-2">BASF</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Apple</div>
            <div className="w-1/3 text-white text-[14px] px-2">HSBC</div>
            <div className="w-1/3 text-white text-[14px] px-2">BNP Paribas</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Facebook</div>
            <div className="w-1/3 text-white text-[14px] px-2">GSK</div>
            <div className="w-1/3 text-white text-[14px] px-2">Daimler</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Microsoft</div>
            <div className="w-1/3 text-white text-[14px] px-2">Lloyds</div>
            <div className="w-1/3 text-white text-[14px] px-2">Deutsche Bank</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Netflix</div>
            <div className="w-1/3 text-white text-[14px] px-2">Rio Tinto</div>
            <div className="w-1/3 text-white text-[14px] px-2">Kering</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Pfizer</div>
            <div className="w-1/3 text-white text-[14px] px-2">Rolls-Royce Holdings</div>
            <div className="w-1/3 text-white text-[14px] px-2">LVMH</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Tesla</div>
            <div className="w-1/3 text-white text-[14px] px-2">Tesco</div>
            <div className="w-1/3 text-white text-[14px] px-2">Sanofi</div>
          </div>
          
          <div className="flex border-b border-[#5b5b5d] py-[15px]">
            <div className="w-1/3 text-white text-[14px] px-2">Walt Disney Co.</div>
            <div className="w-1/3 text-white text-[14px] px-2">Vodafone</div>
            <div className="w-1/3 text-white text-[14px] px-2">Siemens</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharesAdvantages;

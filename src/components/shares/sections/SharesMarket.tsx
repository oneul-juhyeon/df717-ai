
import React from "react";

const SharesMarket: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What is the stock market?</h2>
      <p className="mb-4 text-left">
        In simple terms, the stock market is a place where shares of publicly listed companies are traded. It's where you trade the shares of top companies such as Meta, Amazon, Apple, Netflix, and Alphabet.
      </p>
      <p className="mb-4 text-left">
        Each country has its own stock market; the United States, the United Kingdom, Australia, and other countries all have their own.
      </p>
      <p className="mb-4 text-left">
        Leading exchanges in terms of proceeds worldwide include*:
      </p>
      <ul className="list-disc ml-6 mb-4 text-left text-white">
        <li>Nasdaq</li>
        <li>New York Stock Exchange</li>
        <li>Shanghai Stock Exchange</li>
        <li>Hong Kong Exchange</li>
        <li>London Stock Exchange</li>
      </ul>
      <p className="mb-4 text-white text-sm italic text-left">
        *Source: Statista.com
      </p>

      {/* Market Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/shares2.png" 
          alt="Stock Market" 
          className="w-full h-auto rounded-lg"
        />
      </div>

      <p className="mb-4 text-left">
        At its core, the stock market works in a really simple way: it lets buyers and sellers negotiate prices and make trades.
      </p>
      <p className="mb-4 text-left">
        Companies will first list shares of their stock on an exchange. By doing so, they allow investors to purchase shares. This allows firms to raise funds to expand their operations while also improving their public image. Once the initial investors have bought their shares, they can trade them among themselves.
      </p>
      <p className="mb-4 text-left">
        Exchanges, such as the Nasdaq or the New York Stock Exchange, keep track of the supply and demand of each listed stock.
      </p>
      <p className="mb-4 text-left">
        Traders can only trade when the stock market is open. The stock market is usually open during the host country's standard working hours.
      </p>
      <p className="mb-4 text-left">
        For example, if you wanted to trade the US Stock market, their stock exchanges, such as the NASDAQ and NYSE, are open from 09:30 to 16:00 (Eastern Standard Time), which falls broadly within the country's working hours.
      </p>
    </>
  );
};

export default SharesMarket;

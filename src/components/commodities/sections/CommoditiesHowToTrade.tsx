
import React from "react";

const CommoditiesHowToTrade: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How to trade commodities</h2>
      
      <div className="mb-8">
        <img 
          src="/lovable-uploads/commodities6.png" 
          alt="How to Trade Commodities" 
          className="w-full h-auto rounded-lg shadow-md my-6"
        />
      </div>
      
      <p className="mb-6">
        The commodities market is accessible to anyone with an internet connection and a computer or smartphone, and it is possible to get started even with limited funds. Here is a quick, step-by-step guide on how to trade commodities using CFDs:
      </p>
      
      <ol className="list-decimal pl-6 mb-6">
        <li className="mb-4">
          <strong>Choose a reputable broker:</strong> Look for a broker that is regulated, has a good reputation in the market, and offers the full range of commodities you want to trade.
        </li>
        <li className="mb-4">
          <strong>Open a trading account:</strong> Once you have chosen your broker, you will need to open a trading account. This should be a simple and free process. Note that a reputable broker will require you to verify your ID as part of security and fraud protection.
        </li>
        <li className="mb-4">
          <strong>Fund your account:</strong> Once your account is verified, you will need to deposit funds in order to start trading. Most brokers accept deposits in common currencies, including USD, EUR, and GBP.
        </li>
        <li className="mb-4">
          <strong>Choose a commodity CFD to trade:</strong> Select the commodity you want to trade. Popular instruments include oil, gold, copper, and natural gas.
        </li>
        <li className="mb-4">
          <strong>Figure out your trading strategy:</strong> This involves deciding how much you want to invest, setting stop-loss and take-profit orders, and determining your risk tolerance. You should also consider how much you are prepared to lose if a trade goes against you.
        </li>
        <li className="mb-4">
          <strong>Place your trade:</strong> This involves selecting the amount you want to invest, choosing the direction of the trade (buy or sell), and setting your stop-loss and take-profit orders.
        </li>
        <li className="mb-4">
          <strong>Monitor your trade:</strong> Once you have opened a trade, keep a close eye on how it is performing so you can limit losses and protect profits.
        </li>
      </ol>
      
      <p className="mb-6">
        If you are new to commodities trading, it is vital that you educate yourself on how the market works and the risks involved. You should also consider beginning your investment journey with a modest amount of money that you are willing to lose if the trade goes against you.
      </p>
    </section>
  );
};

export default CommoditiesHowToTrade;

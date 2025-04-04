
import React from "react";

const ForexDifference: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What is the difference between buying and trading forex?</h2>
      
      {/* Difference Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex11.png" 
          alt="Buying vs Trading Forex" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <ul className="list-disc pl-6 mb-4 text-left">
        <li className="mb-4">
          <strong>Buying forex:</strong> This usually refers to exchanging one physical currency for another. This could be in cash or digital form (e.g., currency or credit card), but buying forex usually happens when you need to use a foreign currency immediately, such as when taking an overseas holiday where you need to pay for expenses like food or accommodation by using the local currency.
        </li>
        <li className="mb-4">
          <strong>Trading forex:</strong> This involves speculating on the price movements of currency pairs with the intention of profiting from price fluctuations. Forex trading is done through intermediaries, such as online brokers, using derivative products (i.e., CFDs). When trading forex, traders do not physically own the currencies but instead enter into contracts that reflect the price movements of the underlying currency pairs. The aim is to buy a currency pair at a lower price and sell it at a higher price (or vice versa) to generate a profit. Forex trading is conducted electronically on trading platforms, and positions can be opened and closed within seconds or held for longer periods, depending on the trading strategy.
        </li>
      </ul>
    </>
  );
};

export default ForexDifference;

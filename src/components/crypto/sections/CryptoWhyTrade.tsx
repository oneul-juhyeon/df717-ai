
import React from "react";

const CryptoWhyTrade: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Why trade cryptocurrencies?</h2>
      <p className="mb-4">
        Since there is no asset ownership involved in cryptocurrency trading, you can start trading with relatively little capital and learn about trading without having to deal with all the complications associated with conventional financial investments, such as stocks and commodities.
      </p>
      <p className="mb-4">
        Some traders also prefer the crypto market's characteristic high volatility over traditional markets, as it gives them the potential to make significant gains when using leveraged trading. However, it is important to remember that when using leverage, both gains and losses are magnified, so you need to have a strong awareness of risk management.
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/crypto4.png" 
          alt="Benefits of cryptocurrency trading" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default CryptoWhyTrade;

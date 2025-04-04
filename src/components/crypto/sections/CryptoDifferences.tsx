
import React from "react";

const CryptoDifferences: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Differences between investing vs trading crypto</h2>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/crypto5.png" 
          alt="Trading vs investing in cryptocurrencies" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <p className="mb-4">
        Because the terms "investing" and "trading" are often used interchangeably, you might think they are the same thing. However, investing in cryptocurrencies differs from trading them.
      </p>
      <p className="mb-4">
        Investing is a longer-term approach to cryptocurrencies, as it involves understanding the fundamentals of a digital coin, opening an account with a crypto exchange to purchase the coin, and holding it in a secure cryptocurrency wallet. Therefore, investors must have the technical know-how to transfer and store cryptocurrencies as they get into the market with the motive of holding coins for months or years until their objectives are satisfied.
      </p>
      <p className="mb-4">
        On the other hand, trading is a short-term approach that focuses on the daily price movements of cryptocurrencies. With no ownership of the underlying asset, traders are more concerned about volatility to enable them to speculate on the price of a coin within short time frames. Unlike investors, traders are primarily focused on conducting technical analysis and market timing.
      </p>
    </section>
  );
};

export default CryptoDifferences;

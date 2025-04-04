
import React from "react";

const CryptoTrading: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is cryptocurrency trading?</h2>
      <p className="mb-4">
        Cryptocurrency trading happens when you buy or sell digital currencies with the aim of making a profit from the changing value of the underlying asset.
      </p>
      <p className="mb-4">
        Crypto trading is different from investing directly in a cryptocurrency. For example, if you were to invest money directly in a cryptocurrency, it would only be possible to make a profit if the sell price were higher than the buy price.
      </p>
      <p className="mb-4">
        Crypto CFD trading involves speculating on the price movements of cryptocurrencies without actually owning the underlying asset. In this case, traders enter a contract with a broker to exchange the difference in price of the cryptocurrency between the time they open and close the trade. This means you can profit solely from the price movements of cryptocurrencies, without having to worry about other issues associated with ownership of an asset, such as security, storage, and access.
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/crypto2.png" 
          alt="Cryptocurrency trading concept" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default CryptoTrading;


import React from "react";

const GoldTrading: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is gold trading?</h2>
      
      <div className="my-8">
        <img 
          src="/gold5.png" 
          alt="Gold trading chart" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <p className="mb-4">
        Gold is one of the oldest and most trusted forms of currency in the world. Gold's intrinsic worth, or "safe haven" appeal, 
        makes it a popular investment and an effective way to diversify a portfolio for traders.
      </p>
      <p className="mb-4">
        Trading gold involves buying the metal with the expectation that price appreciation will make it profitable to sell it later. 
        This can be accomplished by purchasing gold in physical form, such as bars, ingots, or coins, or by investing in financial 
        instruments that monitor the price movement of gold. These financial instruments also enable traders to take short positions 
        on gold, that is, to sell in expectation of a price decline, which will make the asset profitable for buying later.
      </p>
      <p className="mb-4">
        In the current context, trading gold refers to speculating on the price of gold through buying and selling derivative financial 
        instruments rather than acquiring the precious metal in physical form. As a result, gold traders can participate in price movements 
        without having to handle or store the underlying assets.
      </p>
      <p className="mb-4">
        There are several options for trading gold that cater to each trader's strategy and risk profile. These include trading spot gold 
        contracts, gold futures, gold options, ETFs, and stocks of gold mining companies.
      </p>
    </section>
  );
};

export default GoldTrading;

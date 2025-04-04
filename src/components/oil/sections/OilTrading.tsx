
import React from "react";

const OilTrading: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is oil trading?</h2>
      <p className="mb-4">
        Oil trading involves buying and selling oil contracts with the goal of profiting from price fluctuations.
      </p>
      <p className="mb-4">
        Traders can participate in the oil market through various financial instruments, including futures contracts, options, and contracts for 
        difference (CFDs). Oil trading provides opportunities to speculate on the price movement of oil without the need to physically own or 
        deliver the commodity. In other words, you do not have to buy a physical barrel of oil to trade it; you simply speculate on whether 
        the price of that oil is going to rise or fall in the open market.
      </p>
      <p className="mb-4">
        Because of its importance in global commerce – oil is essential to global transport and is a crucial basic ingredient in the production 
        of everything from electricity and plastics to cosmetics and pharmaceuticals – many industries monitor the price of oil very closely and 
        actively trade in the oil market. This gives the oil market a high level of volatility.
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/oil4.png" 
          alt="Oil trading chart and analysis" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default OilTrading;

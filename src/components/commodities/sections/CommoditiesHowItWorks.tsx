
import React from "react";

const CommoditiesHowItWorks: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How does commodity trading work?</h2>
      
      <div className="mb-8">
        <img 
          src="/lovable-uploads/commodities4.png" 
          alt="How Commodity Trading Works" 
          className="w-full h-auto rounded-lg shadow-md my-6"
        />
      </div>
      
      <p className="mb-6">
        Commodity trading takes place through what is known as a contract for difference (CFD). A CFD trade is simply an agreement between the buyer and seller to complete a transaction at a set price and time.
      </p>
      
      <p className="mb-6">
        CFDs do not give you ownership of the underlying asset (for example, a bar of gold). Instead, you trade a "futures contract" that is based on the underlying asset's real-time price changes. As a result, if the purchasing price of gold rises, so will the traded price.
      </p>
      
      <p className="mb-6">
        A trader opens a 'buy' position if they think the price will rise or a 'sell' position if they think prices will drop.
      </p>
      
      <h3 className="text-2xl font-semibold mt-8 mb-4">What is the difference between commodity cash CFDs, futures CFDs, and spot CFDs?</h3>
      <p className="mb-6">
        The main difference between trading cash, futures, and spot commodity CFDs is the pricing model.
      </p>
      
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-4">
          <strong>Commodity cash CFDs:</strong> A cash commodity is a tangible product that is delivered in exchange for payment. The contract for a cash commodity specifies the exact amount of the commodity to be delivered, the delivery date, and the price. Companies speculate on a specific price for a commodity they plan to use, then enter into contracts for cash commodities.
        </li>
        <li className="mb-4">
          <strong>Commodity futures CFDs:</strong> The futures price of a commodity sets a predefined price for a future transaction. This "futures price" is based on the current spot price of the commodity plus the cost of storage or transportation for the period prior to delivery. Interest, insurance, and other incidental charges are all included in the cost of storage or transport.
        </li>
        <li className="mb-4">
          <strong>Commodity spot CFDs:</strong> The spot price of a commodity is the current quote for the immediate (on-the-spot) purchase, payment, and delivery of that commodity.
        </li>
      </ul>
    </section>
  );
};

export default CommoditiesHowItWorks;

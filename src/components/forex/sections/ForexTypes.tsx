
import React from "react";

const ForexTypes: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What are the different types of forex markets?</h2>
      
      {/* Types Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex3.png" 
          alt="Types of Forex Markets" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        The three types of FX markets available for trading are as follows:
      </p>
      
      <ul className="list-disc pl-6 mb-4 text-left">
        <li className="mb-2">
          <strong>Forex spot market:</strong> This is the largest market in the world, and you may have been a part of it without even knowing it. Any time someone goes to a bank to exchange currencies, they participate in the forex spot market.
        </li>
        <li className="mb-2">
          <strong>Forex futures market:</strong> A currency pair of a predetermined size is bought or sold under a futures contract at a specific time and date. This market operates on futures exchanges around the world, where the contracts are traded. These are legally binding contracts, allowing the seller to take on the risk that the price of the currency will fluctuate in the spot market before the contract's end date.
        </li>
        <li className="mb-2">
          <strong>Forex forwards market:</strong> This market operates between a customer and a bank, or between two banks. Unlike futures, where they have standardised features in size and date, forward contracts are flexible and customised to fit a trader's requirements.
        </li>
      </ul>
    </>
  );
};

export default ForexTypes;

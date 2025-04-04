
import React from "react";

const CommoditiesDisadvantages: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What are the risks of trading commodities?</h2>
      
      <div className="mb-8">
        <img 
          src="/lovable-uploads/commodities8.png" 
          alt="Risks of Trading Commodities" 
          className="w-full h-auto rounded-lg shadow-md my-6"
        />
      </div>
      
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-4">
          <strong>Volatility:</strong> Commodities are volatile products. Volatility can lead to more trading opportunities but also greater risk.
        </li>
        <li className="mb-4">
          <strong>Surprise events:</strong> There is often no warning of major events (such as geopolitical instability or natural disasters) that can affect the price of a commodity, catching traders off guard. While this risk cannot be completely avoided, traders can use stop-loss orders to limit their losses.
        </li>
        <li className="mb-4">
          <strong>Market inexperience:</strong> Beginners in commodities trading should research the available products, their characteristics, and the factors that influence their price. They may find it more beneficial to begin trading highly liquid products, such as gold or oil. Less liquid products, such as sugar or soybeans, tend to have irregular price swings and less information available.
        </li>
      </ul>
    </section>
  );
};

export default CommoditiesDisadvantages;

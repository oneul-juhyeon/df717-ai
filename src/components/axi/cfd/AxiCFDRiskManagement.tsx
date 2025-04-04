
import React from "react";

const AxiCFDRiskManagement: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">How do I manage risk in CFD trading?</h2>
      <p className="mb-6 text-left">
        In trading, you can have the best strategy in the world, but without risk management, it is hard to stay profitable in the long run. Markets are volatile, so risk management is essential.
      </p>
      
      {/* Risk Management Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/axi-cfd6.png" 
          alt="Risk Management" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <h3 className="text-2xl mt-8 mb-4">5 risk management tools and tips</h3>
      <ol className="list-decimal pl-6 mb-8 text-left">
        <li className="mb-2">
          <strong>Use a stop-loss:</strong> A stop-loss is a predetermined level at which a trade automatically closes once the set price is reached. It's like a safety net if a trade goes against you, helping ensure a loss is not larger than the amount you are comfortable losing.
        </li>
        <li className="mb-2">
          <strong>Use a take-profit:</strong> Want to secure your gains before the market gets a chance to reverse on you? Set a take-profit level and when the market reaches it, your trade will automatically close and lock in your profit.
        </li>
        <li className="mb-2">
          <strong>Use a trailing stop:</strong> A trailing stop is designed to limit losses AND lock in gains; think of it as being like a stop-loss, with additional flexibility. It sits at a set distance from the current price and moves up and down with the market.
        </li>
        <li className="mb-2">
          <strong>Adjust your lot size:</strong> Size matters in trading. The bigger the position, the greater the potential returns but also the higher the risk. To help determine the right trade size, consider how much you are willing to lose if the trade goes against you.
        </li>
        <li className="mb-2">
          <strong>Use trading calculators:</strong> Use free online calculators to help set your trades:
            <ul className="list-disc pl-6 mt-2">
              <li>Margin calculator: See how much margin is needed to open a position.</li>
              <li>Profit/loss calculator: This tool helps estimate profits and losses and set stop-loss and take-profit levels.</li>
              <li>Pip calculator: Estimates potential profits or losses based on pip movements.</li>
            </ul>
        </li>
      </ol>
    </>
  );
};

export default AxiCFDRiskManagement;

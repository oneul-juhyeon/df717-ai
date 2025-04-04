
import React from "react";

const SharesRiskManagement: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">5 risk management tools and tips</h2>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/shares7.png" 
          alt="Risk Management Tools" 
          className="w-full h-auto rounded-lg"
        />
      </div>

      <h3 className="text-2xl mt-8 mb-4 font-bold">1. Use a stop-loss</h3>
      <p className="mb-8 text-left">
        A stop-loss is a predetermined level at which a trade automatically closes once the set price is reached. It's like a safety net if a trade goes against you, helping ensure a loss is not larger than you're comfortable with.
      </p>
      <p className="mb-8 text-left">
        Keep in mind that stop-loss orders are subject to 'slippage', which is the gap between the requested and actual fill prices that can occur when market prices change too quickly. To protect yourself from slippage, you can use a limit order instead of a market order.
      </p>

      <h3 className="text-2xl mt-8 mb-4 font-bold">2. Use a take-profit</h3>
      <p className="mb-8 text-left">
        Want to secure your gains before the market gets a chance to reverse on you? Set a take-profit level, and when the market hits your desired level, your trade will automatically close and lock in your profit.
      </p>

      <h3 className="text-2xl mt-8 mb-4 font-bold">3. Use a trailing stop</h3>
      <p className="mb-8 text-left">
        A trailing stop is designed to limit losses AND lock in gains; think of it as being like a Stop Loss, with some added flexibility. It sits at a set distance from the current price and moves up and down with the market.
      </p>

      <h3 className="text-2xl mt-8 mb-4 font-bold">4. Adjust your lot size</h3>
      <p className="mb-8 text-left">
        Size matters in trading. The bigger the position, the greater the potential returns, BUT also the higher the risk. To help determine the right trade size, consider how much you would be willing to lose if the trade goes against you.
      </p>

      <h3 className="text-2xl mt-8 mb-4 font-bold">5. Use calculators</h3>
      <p className="mb-4 text-left">
        Use trading calculators to help set your trades.
      </p>
      <ul className="list-disc ml-6 mb-8 text-left text-gray-700">
        <li>Margin calculator: See how much margin is needed to open a position.</li>
        <li>Profit/loss calculator: Helps estimate profits and losses and set stop-loss and take-profit levels.</li>
        <li>Pip calculator: Estimates potential profits or losses based on pip movements.</li>
      </ul>
    </>
  );
};

export default SharesRiskManagement;


import React from "react";

const OilTradingWorks: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How does oil trading work?</h2>
      <p className="mb-4">
        The two main ways to trade oil online are cash CFDs and futures CFDs.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <strong>Oil cash CFDs:</strong> This involves buying oil at the current market price. This is the simplest way of trading oil 
          and is typically used with shorter contract durations, ranging from a few hours to several weeks.
        </li>
        <li className="mb-2">
          <strong>Oil futures CFDs:</strong> Oil futures contracts are a more sophisticated form of investment than cash CFDs. Oil futures 
          typically have longer contract durations, spanning months or years. If you believed the price of oil would be higher in the future, 
          you could enter into a contract with a seller to agree on a price to be paid today so that when the physical oil is delivered upon 
          contract expiration, you could sell the physical oil for more than what you paid for it.
        </li>
      </ul>
      
      <p className="mb-4">
        Let's consider an example of trading oil using a CFD on the West Texas Intermediate (WTI), a benchmark crude oil, where the current 
        market price is $70 per barrel.
      </p>
      <p className="mb-4">
        If a trader believes the price will rise, they can go long and buy a CFD for 10 barrels of WTI at the current price of $70 per barrel. 
        If the price increases to $75 per barrel, the trader can sell the CFD and earn a profit of $50:
      </p>
      <p className="mb-4 font-semibold">
        ([$75 - $70] x 10 barrels) = $50 profit
      </p>
      <p className="mb-4">
        Conversely, if the price drops to $65, this results in a loss of $50.
      </p>
      <p className="mb-4 font-semibold">
        ([$65 - $70] x 10 barrels) = $50 loss
      </p>
      
      <h3 className="text-2xl font-bold mb-4">Oil CFD trading</h3>
      <p className="mb-4">
        As trading oil as a CFD does not involve physical ownership, traders can profit from changes in price in either market direction.
      </p>
      <p className="mb-4">
        For example, if a trader expects oil to drop from its current price of $70 per barrel in the next few months, they can sell an oil futures CFD 
        contract at $65 per barrel. If the price of oil does drop to the $65 level by the date of the contract's expiration, they will earn a profit 
        of $5 per barrel.
      </p>
    </section>
  );
};

export default OilTradingWorks;

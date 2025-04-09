
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const CommoditiesFAQ: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-8 mb-6 font-bold">FAQ</h2>
      
      <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What is commodities trading?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Trading commodities means buying and selling raw materials that are either mined, such as Gold and Silver, or Agriculturally grown, such as Coffee and Sugar. Commodity prices tend to move based on supply and demand, central banks actions, reserve holdings, and the US dollar.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How can I trade commodities?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                With Axi, you can trade commodities as CFDs, which means you can go short (sell) if you think the price will fall or go long (buy) if you think the price will go up. The costs of trading commodities with Axi vary depending on the commodity you trade, and our interbank spreads start from as low as 30p.
              </p>
              <p className="text-left mt-2">
                When you trade commodity CFDs, you are speculating on price movements rather than taking ownership of the physical commodity. A CFD (Contract For Difference) is an agreement between a buyer and seller to exchange the difference in the value of a financial product between the time the trade (contract) is opened and the time it is closed.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Which is the best commodity to trade?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                There is no one "best commodity to trade," as it primarily depends on your investment goals and personal preferences. Some people prefer trading gold when it comes to commodities because of its market stability, high liquidity and more predictable market movements, while others are more interested in other commodities, such as oil or silver.
              </p>
              <p className="text-left mt-2">
                Gold is a popular choice for most traders because its price is impacted by factors like interest rates, inflation, and market volatility. Gold typically rises in price during instances of market volatility because it is seen as a "safe haven" from more turbulent markets.
              </p>
              <p className="text-left mt-2">
                Oil price is also a great way to trade news events. Prices are heavily affected by supply and demand concerns, as well as seasonality. On a day-to-day basis, oil prices tend to react to current events or news, particularly between major oil-producing countries, making them quite unpredictable. Because of this, trading oil requires careful analysis of changing market conditions.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How do you trade commodities with CFDs?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Trading commodities with CFDs involves speculating on the future price of a commodity. The main principle is to "buy low, sell high" or the other way around.
              </p>
              <p className="text-left mt-2">
                Here's how to trade commodities with CFDs:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-left mt-2">
                <li className="mb-1">Select a commodity: Begin by choosing a commodity you'd like to trade, such as gold, silver, oil, natural gas, base metals, coffee, sugar, corn, or soybeans.</li>
                <li className="mb-1">Research the commodity: Study the factors influencing the commodity's price, such as central bank actions, political issues, or weather conditions, to make more informed decisions on how the price will likely move in the future.</li>
                <li className="mb-1">Choose a suitable CFD broker: Register with a regulated CFD broker, like Axi, that offers access to the commodities you want to trade with competitive spreads and no commissions.</li>
                <li className="mb-1">Define your position: Choose whether you anticipate a price increase (buy position) or a price drop (sell position). Determine your risk management stop loss and profit target price levels.</li>
                <li className="mb-1">Execute a trade: Confirm your trading decision by deciding between a buy (long) or sell (short) position with the appropriate quantity for your risk profile.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What are the most traded commodities?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                The most actively traded commodities are oil and gold, as they are known for their high liquidity. All commodity markets, including less liquid ones, can still offer great trading opportunities when approached correctly.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How much money do I need to trade commodities?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                To start a live trading account, you need a minimum deposit of $50. However, having around $500-$1,000 provides a better foundation, allowing you to withstand losses without exhausting your account. Ideally, only risk 1-2% of your account on any single trade.
              </p>
              <p className="text-left mt-2">
                Fortunately, Axi also offers demo accounts, so you can practise your trading without risking real money.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What are the risks of commodities trading?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left mb-2">
                Commodity trading involves both rewards and risks.
              </p>
              <p className="text-left mb-2">
                The most critical risk for commodity traders is price fluctuations, which are driven by uncontrollable factors such as regional and global economic events, natural disasters, political developments, and crude oil inventory numbers.
              </p>
              <p className="text-left">
                Traders emphasise risk management, using techniques like stop and limit orders, hedging against positions through options or inverse trades, and employing other strategies to minimise potential losses.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What are the different ways of trading commodities?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Investors and traders primarily use the following methods for commodities trading:
              </p>
              <ul className="list-disc pl-6 mb-4 text-left mt-2">
                <li className="mb-1">Trading commodity stocks: Involves investing in companies related to commodities.</li>
                <li className="mb-1">Trading commodity ETFs or ETNs: Offers diversified exposure to commodities or commodity-linked companies.</li>
                <li className="mb-1">Trading commodity physical spot market: Tracks commodity prices directly but requires significant capital and storage capabilities.</li>
                <li className="mb-1">Trading physical futures: Involves buying a standardised quantity of a commodity at a predetermined price for delivery on a specified date.</li>
                <li className="mb-1">Trading CFDs: Allows investors to profit from price movements without owning the physical asset, with lower capital investment due to leverage.</li>
              </ul>
              <p className="text-left">
                Trading CFDs is popular due to the ability to trade in both rising and falling markets, however, they do come with risks associated with leverage, potential loss beyond initial investment, and counterparty risks.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CommoditiesFAQ;

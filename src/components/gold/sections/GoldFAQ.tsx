
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const GoldFAQ: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-8 mb-6 font-bold">FAQ</h2>
      
      <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What is the highest price of gold in history?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Traders can use historical prices to try to predict future price movements and critical levels to consider. 
                Looking at the big picture, gold has been on an upward trend since September 2018, reaching an all-time high 
                near $2100 per ounce in August 2020.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Who regulates the gold market?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                There is no regulatory body in charge of the global gold market. However, local regulators have influence over 
                the trading that is conducted within their jurisdiction. Furthermore, there are voluntary codes that many market 
                participants adhere to.
              </p>
              <p className="text-left mt-2">
                The Financial Conduct Authority (FCA), for example, regulates the LME, where gold contracts are actively traded. 
                The FCA also has jurisdiction over LBMA gold pricing.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What is the market symbol for gold?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                The gold ticker symbol is XAU. The letter "X" stands for "Index," whereas the letter "AU" stands for "Aurum," 
                the Latin word for gold.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What are the gold trading hours?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Trading hours in the gold spot CFD market for Axi customers begin at 01:01 Monday (server time) and end at 23:58 
                Friday (server time). This comprises gold, silver, and platinum. Each morning, the market is closed for a break 
                between 23:59 and 01:01 (server time).
              </p>
              <p className="text-left mt-2">
                The Gold Futures CFD exchange opens at 18:01 on Sunday and closes at 16:59 on Friday (New York time). There is a 
                trading pause from 16:59 to 18:01.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Is trading gold profitable?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Trading gold, like trading any other asset class, may be profitable with the right risk and trade management 
                practises in place. To speculate on gold price fluctuations, traders should pay close attention to volatility 
                and the primary external factors influencing gold price movements.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How much money is needed to trade gold?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Axi allows traders to deposit as little as $50 to begin trading gold. A $500 investment, on the other hand, allows 
                for more trading options, however, traders should risk only what they can afford to lose.
              </p>
              <p className="text-left mt-2">
                Trading gold as a CFD allows traders to use leverage, which allows them to use a small amount of cash to open a larger 
                trade position. Although leverage allows for bigger profits, it also increases the risk of losses.
              </p>
              <p className="text-left mt-2">
                A free demo account that allows trading with virtual funds for 30 days is available to help traders develop effective 
                risk management strategies. Traders can then upgrade to a free live trading account while retaining access to their 
                demo account.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Can I trade gold on MetaTrader 4?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Axi allows you to trade gold CFDs on MT4. With this form of trading, instead of owning the physical metal, you will 
                simply speculate on price swings.
              </p>
              <p className="text-left mt-2">
                Axi provides two MT4 account types to cater to different gold trading strategies: a standard account ideal for long-term 
                strategies and a Pro account best suited for strategies that are sensitive to spreads.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default GoldFAQ;


import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const AxiCFDFAQ: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-8 mb-6 font-bold">FAQ</h2>
      
      <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Is CFD trading allowed in my country?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Certain countries do not allow CFD trading. If your country of residence is not displayed on the online application form when opening a trading account, you cannot do so.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Is trading CFDs safe?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                As with any financial instrument or investment, trading CFDs comes with a risk. The use of leverage can make CFDs riskier than non-leveraged products, such as physical shares. Before you start trading with a live account, you should familiarise yourself with those products, practise in a risk-free environment, and learn more about risk management.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What is the minimum volume I can trade for a CFD product?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                The minimum trade size for Standard and Pro accounts with Axi is 0.01 lots. However, this number may change depending on the instrument you are trading.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What is the difference between CFDs and options?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Options and CFDs share some common characteristics. They can both provide high leverage, and flexibility can be used for both hedging and speculation. However, there are some major differences between the two. When you buy a CFD, you agree to exchange the difference in price from when you opened a trade to when you closed it. Options give a trader the right (but not the obligation) to buy or sell an asset at a certain price in the future. Options offer more flexibility, and traders can create complex strategies using these instruments.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What is the difference between CFD trading and futures?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left mb-2">
                A CFD depicts the price movement of an asset, which gives the investor a clear picture of the value changes that occur while holding a position open.
              </p>
              <p className="text-left mb-2">
                When a trader agrees to a futures contract, they agree to buy or sell the underlying asset at a predetermined price and date in the future. It is a contract that will be executed in the future, and the set price will stay unchanged, irrespective of the value movement of the asset. The buyer of a futures contract must execute the underlying asset when the contract expires. Consequently, the seller of the contract ordeal has the obligation to provide the asset at the agreed date.
              </p>
              <p className="text-left mb-2">
                Futures operate based on prices established by the markets as they are traded on exchanges, while CFDs work based on prices established by the broker. Thus, the integrity of the price is expected to be higher in the case of futures when compared with CFDs.
              </p>
              <p className="text-left">
                Simply put, futures can be considered a less flexible and more structured alternative to CFDs.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What is the contract length of CFDs?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left mb-2">
                The point at which a CFD contract matures is called the CFD contract rollover date. A futures contract's expiration date serves as the last day you can trade that particular contract.
              </p>
              <p className="text-left mb-2">
                Before contract expiry, a futures trader has three options: offsetting or liquidating the position, settlement, or rollover. A rollover is when a trader moves their position from the front-month contract (close to the expiration date) to another contract date further in the future to avoid the costs or obligations associated with the settlement of the contracts. Contract rollovers are profit-neutral.
              </p>
              <p className="text-left">
                Note: A CFD contract rollover date is not applicable to all trading products.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Are CFDs better than stocks?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left mb-2">
                The decision to trade CFDs versus invest in stocks is up to the individual and their financial means and goals.
              </p>
              <p className="text-left mb-2">
                Share CFDs allow you to utilise leverage when trading the movement of stock prices, meaning you have the potential to make higher profits with a smaller amount of capital. While this can increase returns, it also increases risk. Trading share CFDs allows flexibility; you can go long (buy) when you expect prices to go up or go short (sell) to profit from falling stock prices.
              </p>
              <p className="text-left">
                However, with CFDs, you will not have any voting rights, and the tax liabilities might differ from those of physical shares, depending on your country of residence.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What markets can I trade with Axi?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Axi provides access to a wide range of markets for CFD trading. Please refer to our Product Schedule for a full list of CFD trading instruments.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default AxiCFDFAQ;

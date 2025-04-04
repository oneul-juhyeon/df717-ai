
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
      <h2 className="text-3xl mt-12 mb-4">FAQ</h2>
      
      <div className="my-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">Is CFD trading allowed in my country?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                Certain countries do not allow CFD trading. If your country of residence is not displayed on the online application form when opening a trading account, you cannot do so.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">Is trading CFDs safe?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                As with any financial instrument or investment, trading CFDs comes with a risk. The use of leverage can make CFDs riskier than non-leveraged products, such as physical shares. Before you start trading with a live account, you should familiarise yourself with those products, practise in a risk-free environment, and learn more about risk management.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What is the minimum volume I can trade for a CFD product?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                The minimum trade size for Standard and Pro accounts with Axi is 0.01 lots. However, this number may change depending on the instrument you are trading.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What is the difference between CFDs and options?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                Options and CFDs share some common characteristics. They can both provide high leverage, and flexibility can be used for both hedging and speculation. However, there are some major differences between the two. When you buy a CFD, you agree to exchange the difference in price from when you opened a trade to when you closed it. Options give a trader the right (but not the obligation) to buy or sell an asset at a certain price in the future. Options offer more flexibility, and traders can create complex strategies using these instruments.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What is the difference between CFD trading and futures?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
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
          
          <AccordionItem value="item-6" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What is the contract length of CFDs?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
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
          
          <AccordionItem value="item-7" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">Are CFDs better than stocks?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
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
          
          <AccordionItem value="item-8" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What markets can I trade with Axi?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
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

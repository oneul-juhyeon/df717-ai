import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const SharesFAQ: React.FC = () => {
  return <>
      <h2 className="text-3xl mt-8 mb-6 font-bold">FAQ</h2>
      
      <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Is trading stock CFDs safe?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                All leveraged trading products, including stock CFDs, carry a degree of risk. We recommend using appropriate risk management strategies that suit your particular trading style and strategy. Axi offers a comprehensive range of educational resources to help you better understand risk in trading and ways to manage it.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-left">
              When you buy stock CFDs, do you own the underlying asset?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                No, you do not own any part of the underlying asset. When you trade stock CFDs, you are simply trading the price movements of the underlying asset.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Is stock CFD trading cheaper than traditional stock trading?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Stock CFD trading allows you to trade using leverage, which means you can speculate on the movement of stock prices with a smaller amount of capital than would normally be required to buy and take ownership of a physical share.
              </p>
              <p className="text-left mt-2">
                When trading with leverage, you are subjected to margin requirements. If your total balance falls below the margin requirement, your positions will close automatically with a loss.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How is trading the stock market different from trading forex?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                The stock market is influenced by several factors when compared to forex trading. Stocks are particularly affected by news surrounding the underlying company's financial performance and trends in the broader world. For example, the stock price of the NVIDIA technology company rose strongly because of a rise in the popularity of Bitcoin, which required NVIDIA's graphics cards to mine it.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How much money do I need to trade stock CFDs?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                A common misconception is that it takes a lot of money to trade stock CFDs. While it is true that trading traditional shares can require a lot of capital - for example, with a capital of USD1,000, you can only buy 2 shares of Netflix priced at USD500 - the same cannot be said for stock CFDs. With the use of leverage, you can buy up to 40 shares of Netflix CFDs with the same amount of capital. 
              </p>
              <p className="text-left mt-2">
                When trading CFDs, you might be subjected to overnight fees or swap charges. This means you will incur fees based on the length of time your positions are kept open. For more information on fees, refer to our Product Schedule.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What are the best US shares for less experienced traders?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Traders commonly ask what are the best stock CFDs. In general, it is most common to trade more popular stocks. This is because these stocks often have wide media coverage and large discussion forums dedicated to discussing their every move. This is a sort of self-regulating feature that prevents inaccurate and false information from deceiving investors.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What stocks are available to trade?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                At Axi, we offer a wide range of stocks that represent many trading opportunities for our clients. Axi currently offers over 100+ stock CFDs across the UK, US, and European markets. For a complete overview of all stock CFDs and their active time zones, view our Product Schedule.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8">
            
            <AccordionContent className="text-white">
              <p className="text-left mb-2">
                Axi charges no commission on stock CFD trades.
              </p>
              <p className="text-left mb-2">
                Fees are charged with a spread. To calculate the total spread cost, you can simply multiply the monetary value of the position per point by the spread. It's important to note that CFD position sizes are based on contracts or lots, which means the calculation involves an extra step.
              </p>
              <p className="text-left">
                Please note that there may be fees for holding positions overnight. Overnight holding rates for stock CFDs are based on the underlying interbank rate for the currency of the relevant stock, plus 2.5% on buy positions and minus 2.5% on sell positions (exceptions may apply). For more details on fees, including trading hours, please refer to our Product Schedule.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>;
};
export default SharesFAQ;
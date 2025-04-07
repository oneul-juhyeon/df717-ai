
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const IndicesFAQ: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-8 mb-6 font-bold">FAQ</h2>
      
      <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How are index prices calculated?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="text-left mb-2">
                Calculating stock market indices prices has become easier nowadays by using methods like market capitalisation, which measures a company's stock value in terms of total dollar market value, and the price weighting formula.
              </p>
              <p className="text-left">
                To calculate this value, multiply the number of outstanding shares of a corporation by the share's current market value. With this method, firms with higher share prices are given more weight, which means that changes in their values will have a bigger impact on the current value of the stock index they are a member of.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What's the difference between index trading and stock trading?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="text-left mb-2">
                Stock trading is the trading of shares of specific companies at individual prices. Once you buy a stock, it is transferred to you from the seller, and you assume ownership.
              </p>
              <p className="text-left">
                Index trading is the trading of a basket of stocks that make up the index through a single instrument. The index tracks a basket of stocks that are used as indicators of an overall representation of the entire stock market (like the S&P 500), or they could be a specialised segment of a stock exchange like technology (NASDAQ).
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Is index trading profitable?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="text-left">
                There are numerous aspects to consider when deciding whether index trading could be profitable for you, but it is possible to be successful. Trading profits naturally vary depending on the choices made by the trader and the state of the market. When markets are volatile, price moves are bigger, and thus, the potential for profit or loss is higher.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What are the best indices to trade?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="text-left mb-2">
                Though long-term investors, like pension funds, track them closely, short-term CFD traders tend to speculate on indices. If you are keen to kickstart your journey trading indices, these are some of the more popular indices to consider:
              </p>
              <ul className="list-disc pl-6 mb-2 text-left">
                <li>Dow Jones Industrial Average (US 30)</li>
                <li>Standard & Poor's 500 (S&P 500)</li>
                <li>Nasdaq (Composite and Nasdaq 100)</li>
                <li>UK FTSE 100 (FTSE 100)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What is the maximum leverage I can have when trading index CFDs?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="text-left">
                Traders use leverage when they have a small amount of capital but want exposure to a trade of larger value. Leveraged trading involves borrowing a sum of money, usually from a broker, that effectively finances the trader and lets them buy and sell trading instruments. The maximum leverage available when trading indices for standard trading accounts is determined by your region.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What are the best index trading strategies?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="text-left mb-2">
                There is no optimal trading strategy for trading indices, so start with the strategy that best fits your trading style and goals. Study the most popular index trading strategies, like position trading and breakout strategy, to discover the one that works best for you.
              </p>
              <p className="text-left">
                Regardless of strategy, trading on an index reduces the risk and expenses incurred by trading individual stocks, and it also results in a more diversified portfolio with less volatile price changes. Since many of the major stock indices are reliable predictors of both domestic and global economies, traders can use effective index trading tactics to gain a competitive edge.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Can I sell futures before expiry?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="text-left">
                Yes, you can sell futures before they expire. You are not required to hold a futures contract until it expires, and most traders close out their contracts prior to the expiration date. You can do so by either purchasing an opposing contract that nullifies the agreement or by selling your contract.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What are the margins and tick values on indices?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="text-left mb-2">
                The margin requirements for equity indices at Axi start from as low as 0.5%. Tick sizes are variable, as outlined in the Product Schedule.
              </p>
              <p className="text-left">
                Tick values on indices are the minimum price fluctuations established by an exchange. Tick sizes are mentioned in the 'contract specifications' set by futures exchanges and are calibrated to ensure liquid, efficient markets through a tick-bid-ask spread.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default IndicesFAQ;

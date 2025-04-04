
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
      <h2 className="text-3xl mt-12 mb-4">FAQ</h2>
      
      <div className="my-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What are spot prices on commodities?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                A commodity's spot price is the local cash price for immediate purchase and delivery ("on the spot"). Spot market transactions are settled within a few days.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What are futures prices on commodities?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                A commodity's futures price is an agreement on a predetermined price for a future transaction. It is calculated by adding the cost of storage or transport in the interim period before delivery to the current spot price of the commodity. It includes interest, insurance, and other incidental costs.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">Is commodity trading good for beginners?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left mb-4">
                Commodity trading can be an excellent choice for beginners due to its convenience and flexibility. Online commodity trading platforms are simple and intuitive to use. Investors can access resources like live quotes, charts, futures news, research and trading facilities, and even online assistance through AI and automation.
              </p>
              <p className="text-left">
                At Axi, we want to ensure all new traders have the essential tools and knowledge to make smart decisions and become profitable traders. Refer to our courses, videos, and guides on how to trade commodities.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">How much money do you need to start trading commodities?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left mb-4">
                The amount of money required to begin trading is determined by two factors: the minimum deposit and the initial margin.
              </p>
              <p className="text-left mb-4">
                The minimum deposit is the amount of funds needed to open a trading account.
              </p>
              <p className="text-left">
                The initial margin is the amount needed to execute and keep a trade open. When trading commodities with Axi, initial margin rate requirements range between 5% and 10%.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What is the maximum leverage I can use to trade commodities?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                Leverage allows traders to take a position in a particular commodity by providing only a fraction of the full trade value as margin. The maximum amount of leverage a trader may have access to depends on their region and the specific regulations governing trading in that area. These leverage ratios amplify both potential profits and losses, making it important for traders to carefully manage their risk and use leverage responsibly. Make sure to check your broker's Product Schedule to see the available maximum leverage.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">Are commodities a high-risk investment?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                The risk in commodities trading stems from the market's supply and demand dynamics. Market trends are unpredictable since commodity prices can be influenced by everything, from weather patterns to epidemics and natural disasters. This must be factored into your risk management.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What commodity CFDs are available at Axi?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                Please view our Product Schedule for the full list of commodity cash CFDs, commodity futures CFDs, and bullion spot CFDs that are available to trade with Axi.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CommoditiesFAQ;

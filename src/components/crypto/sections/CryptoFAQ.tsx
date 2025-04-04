
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const CryptoFAQ: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">FAQ</h2>
      
      <div className="my-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What is bitcoin?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                Bitcoin was the first and remains the most well-known cryptocurrency. It uses blockchain technology to provide a highly secure and decentralised form of digital currency.
              </p>
              <p className="text-left mt-2">
                Since its inception, bitcoin has been gaining acceptance as a store of value and medium of exchange. It can be traded openly on the markets as a CFD in the same way as other currencies and commodities, along with other cryptocurrencies such as Litecoin, Ethereum, Ripple, and many more.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What is blockchain?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                Blockchain is the underlying technology behind cryptocurrency transactions that helps make them secure. It is a decentralised network of computers that records a sequence of transactions while at the same time making that chain of records transparent to all users in the network.
              </p>
              <p className="text-left mt-2">
                Each time a new transaction is recorded, a copy of this new block of data is added to the chain and updated across every computer on the network. Therefore, despite not being governed by a formal body, the transparency of blockchain technology makes it simple to detect attempts to tamper with transactions or records.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What is crypto mining?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                'Mining' is the way a new unit of cryptocurrency enters circulation; you could think of it as being like the way a central bank mints a traditional currency. But the way it happens is not through a printing press; it is through a technologically complex process where significant computing resources are applied to solve complex mathematical equations.
              </p>
              <p className="text-left mt-2">
                As they work, the miners operate as de facto auditors, checking blocks of cryptocurrency transactions to make sure nobody is attempting to use the same coin again. The miner is compensated with a newly produced unit (or sub-unit) of the cryptocurrency as payment for their assistance in ensuring the currency's overall validity.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">Is trading crypto CFDs safe?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                Trading cryptocurrency CFDs is the same as trading other financial instruments like foreign exchange, gold, oil, or stock indexes. This is because you are not actually buying the underlying item; rather, you are only trading price changes.
              </p>
              <p className="text-left mt-2">
                However, it is important to keep in mind as a trader that each asset is susceptible to different market dynamics and acts differently (for instance, certain items are more volatile than others). Because of this, it is crucial to have general market knowledge in addition to technical and fundamental analysis. Additionally, you should use the tools integrated into the trading platform that help protect your account, such as stop-loss and take-profit tools, while trading any financial instrument. You should also have a suitable risk management strategy in place.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">How much money do you need to start trading cryptocurrencies?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                One major benefit of trading cryptocurrency CFDs is that a relatively small amount of money, like $100, can be enough to kickstart a trading journey. This is made possible by using leverage. For example, if you applied leverage of 100:1 to a $100 account, you could open a position for $10,000. Be aware that, while there is a chance for substantial rewards, leverage can also increase the chance of losses.
              </p>
              <p className="text-left mt-2">
                When deciding how much money to use in your trading, it is important to consider your level of overall risk tolerance. Cryptocurrencies are among the riskier and more volatile asset classes, whereas other asset classes are more stable and see less price fluctuation. Knowing how much risk you can tolerate can help you decide which markets to look at and how much money to invest.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">Do I need a crypto wallet to trade cryptocurrency with Axi?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                No, trading cryptocurrency CFDs with Axi does not require a crypto wallet, as you are only speculating on the price movement of the cryptocurrency, not taking ownership of the asset.
              </p>
              <p className="text-left mt-2">
                It is also worth noting that if using a digital wallet to trade cryptocurrencies through an exchange, there are specific risks to consider, including:
              </p>
              <ul className="list-disc pl-6 mt-2 text-left">
                <li className="mb-1">Digital wallets are vulnerable to hacking attacks and theft; there have been repeated incidents where crypto exchanges have been hacked and cryptocurrencies stolen.</li>
                <li>Because cryptocurrencies are based on decentralised technology, there is no central regulatory body that regulates the exchanges or their market practices. This leaves the individual potentially exposed to fraud and malpractice risks, without any avenue for accountability.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 flex">
              <div className="flex items-center">
                <div className="w-1 h-16 bg-red-500 mr-4"></div>
                <h3 className="text-xl font-bold">What cryptocurrencies can I trade with Axi?</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 pb-6 text-gray-700">
              <p className="text-left">
                Axi offers a wide range of cryptocurrency trading products, including Bitcoin, Ethereum, Litecoin, Ripple, and many more. For a full and current list of crypto products, refer to our Product Schedule.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CryptoFAQ;

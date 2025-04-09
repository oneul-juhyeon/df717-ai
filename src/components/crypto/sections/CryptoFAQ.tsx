
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
      <h2 className="text-3xl mt-8 mb-6 font-bold">FAQ</h2>
      
      <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Is cryptocurrency trading right for me?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Cryptocurrencies are known for their volatility. The crypto markets trade 24/7 and can be vulnerable to sudden price movements that can arise due to unexpected regulatory announcements, technological advancements, or other market drivers. As such, a crypto CFD trader must be prepared to handle the stress that comes with risk and volatility. However, this volatility may also present trading opportunities to those prepared to take advantage of them. In general, trading crypto CFDs will be suitable for those who already have experience with traditional CFD trading and are comfortable with the use of technical indicators.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Is trading cryptocurrencies risky?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Trading and investing, in general, involve an element of risk. Trading any product through CFDs with leverage has the potential to magnify both profits and losses, so this adds an additional element of risk. On top of that, cryptocurrencies are notorious for their high volatility. These elements combined might involve significant risk and might not be suitable for everyone. If you are just beginning to consider trading cryptocurrencies, you may want to begin with a risk-free environment, such as an Axi demo account, before committing real money.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-left">
              Can I own cryptocurrencies by trading them?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                If you trade cryptocurrencies directly, either via peer-to-peer marketplaces or by using cryptocurrency exchanges, then you own the underlying asset.
              </p>
              <p className="text-left mt-2">
                However, if you trade cryptocurrency CFDs, you don't own the actual cryptocurrency. Instead, you are trading a product that tracks the price of the cryptocurrency, taking a 'buy' position if you believe the price will rise, or a 'sell' position if you believe the price will fall.
              </p>
              <p className="text-left mt-2">
                As with other CFDs, you are able to profit from price movements in both directions. This means with crypto CFDs, you can short an asset if you think that its price will fall in the future, whether due to fundamental factors or market sentiment.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What are the trading hours for cryptocurrencies?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                One of the unique aspects of cryptocurrencies is they can be traded 24 hours a day, 7 days a week. This is different from traditional stock markets, for example, which are only open during specific hours on weekdays.
              </p>
              <p className="text-left mt-2">
                The reason for this continuous trading is that cryptocurrencies are not traded on central exchanges with set opening and closing hours. Instead, they are traded on the blockchain, which operates continuously.
              </p>
              <p className="text-left mt-2">
                When you trade crypto CFDs with us, we offer a trading window from Monday 00:00 to Friday 23:59 (platform time). This is to ensure that our services are available to help you when you need us.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-left">
              What factors affect the price of cryptocurrencies?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Cryptocurrency prices and valuations are affected by a range of fundamental, technological, and psychological factors. These include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-left mt-2">
                <li>Supply, demand, and market sentiment (like other speculative assets, supply and demand play a major role in determining the value of cryptocurrencies. As more people buy a cryptocurrency, its price typically rises. Conversely, as more people sell, it usually falls.)</li>
                <li>Regulatory news and developments affect cryptocurrencies and can lead to significant price volatility. This is because changes in regulation can impact the adoption and use of cryptocurrencies.</li>
                <li>Adoption rates by the general public and businesses. (For a cryptocurrency to sustain long-term growth, it needs to be adopted and used. If more businesses and individuals begin to use a particular cryptocurrency, its value might increase.)</li>
                <li>Media coverage and market hype</li>
                <li>Technology and innovation</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How does cryptocurrency trading work?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Crypto CFDs work basically the same as other CFDs. You can go long if you think the price will rise, or short if you think the price will drop. You can also leverage your trades to amplify profits (but also losses).
              </p>
              <p className="text-left mt-2">
                Cryptocurrency CFD trading can be done on MetaTrader 4 (MT4), with various crypto instruments available to trade. You can take a position on Bitcoin, Ethereum, Ripple, Litecoin, Bitcoin Cash, and EOS, against the US dollar as a CFD.
              </p>
              <p className="text-left mt-2">
                To get started, you'll need a live trading account with us. If you're new to trading or simply want to practise your crypto trading strategies in a risk-free environment, you can use our demo account.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How do I store my cryptocurrencies?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                When you trade crypto CFDs with Axi, you don't actually own the underlying asset, so there's no need to worry about storage. We take care of all the technical aspects, allowing you to focus purely on trading.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-xl font-semibold text-left">
              How can I start trading cryptocurrencies?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              <p className="text-left">
                Getting started with crypto CFD trading is straightforward with Axi:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-left mt-2">
                <li className="mb-1">Open a Live Trading account. Simply complete our application form and submit the required documentation for verification.</li>
                <li className="mb-1">Deposit funds. You can fund your account using a variety of secure payment methods, including credit card, debit card, and bank transfer.</li>
                <li className="mb-1">Download the MetaTrader 4 (MT4) platform. This is where you'll do your trading.</li>
                <li className="mb-1">Open your first trade. Choose the cryptocurrency you want to trade, set your position size, and click 'buy' or 'sell.'</li>
              </ol>
              <p className="text-left mt-2">
                If you're new to trading or want to test your strategies without risk, you can also open a free demo account.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CryptoFAQ;

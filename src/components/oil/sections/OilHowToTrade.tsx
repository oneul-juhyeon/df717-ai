
import React from "react";

const OilHowToTrade: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How to trade oil?</h2>
      <p className="mb-4">
        Here is a basic step-by-step guide on how to start trading oil in global markets:
      </p>
      
      <div className="my-8">
        <img 
          src="/lovable-uploads/oil6.png" 
          alt="Step-by-step oil trading process" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <ol className="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong className="font-bold">Find a broker:</strong> Start by researching and comparing different online brokers that offer oil trading 
          services. Look for brokers that are reputable, regulated, have good reviews from clients, offer user-friendly platforms, have competitive 
          fees, and provide access to the oil market, specifically, the products you want to trade.
        </li>
        <li>
          <strong className="font-bold">Open an account:</strong> Once you've selected a broker, open a trading account. As part of regulatory requirements, 
          for the security of your account and the protection against fraud, the broker should ask you questions about your trading abilities and will 
          require you to verify your identity by submitting your ID and residence documentation.
        </li>
        <li>
          <strong className="font-bold">Fund your account:</strong> Deposit money into your trading account once your application is approved so you have 
          money available to trade with. Most brokers provide a range of funding methods, including bank transfers, credit and debit cards, and online 
          payment methods. Make sure you comprehend any minimum restrictions imposed by the broker and make a deposit that you feel comfortable trading 
          with (and that you might be willing to lose if trades go against you).
        </li>
        <li>
          <strong className="font-bold">Explore the trading platform:</strong> Spend some time learning how the broker's trading platform operates and 
          how to make use of tools like charts and indicators. Learn about the various trades (orders) you can make. Numerous brokers provide demo 
          accounts, which allow you to practise trading without risking any real money. These can be quite helpful in familiarising you with the 
          platform and its functions.
        </li>
        <li>
          <strong className="font-bold">Conduct market analysis:</strong> Review oil price charts, keep up with pertinent news, examine fundamental and 
          technical aspects that can affect oil prices, and conduct market analysis before placing a trade to gain an understanding of the current oil 
          market circumstances. Use the materials and analytical tools provided by the broker to supplement your study.
        </li>
        <li>
          <strong className="font-bold">Place a trade:</strong> Once you have a trading strategy in mind and have conducted your market analysis, it's time 
          to place a trade! On the trading platform, select the oil market or instrument you want to trade (e.g., crude, WTI). Choose the order type 
          (e.g., market order or limit order) and the quantity (e.g., the number of barrels of oil). Remember to also set stop-loss and take-profit levels 
          to help manage potential risks and returns. You're now ready to execute the trade!
        </li>
        <li>
          <strong className="font-bold">Monitor and manage your trade:</strong> After placing a trade, you should monitor your position regularly. Track oil 
          price movements, market news, and any relevant events that can impact your trade. If you haven't already, consider using stop-loss and take-profit 
          orders to automate the management of your trade. This is where you should be prepared to adjust your position or exit the trade if market 
          conditions change.
        </li>
        <li>
          <strong className="font-bold">Review and learn:</strong> Once the trade is closed, review your performance, evaluate the outcome, and do your best 
          to be honest and impartial. Analyse what worked well and what could be improved in your trading strategy so you can learn, especially from mistakes. 
          Keep refining your skills with educational resources, webinars, and market insights provided by the broker.
        </li>
      </ol>
    </section>
  );
};

export default OilHowToTrade;

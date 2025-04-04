
import React from "react";

const OilTradingStrategies: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What are the best oil trading strategies?</h2>
      <p className="mb-4">
        As it is a volatile market, oil requires careful analysis to be traded successfully. Fundamental analysis and technical analysis are 
        the two main approaches that traders use to evaluate the oil trading markets.
      </p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-3">Fundamental analysis</h3>
          <p>
            Because of its importance to the global economy, oil is always in the headlines. There are some regular announcements and data releases, 
            however, that are essential reading for oil traders, such as those from the Energy Information Administration (EIA) Crude Oil Inventory and 
            the Organization of Petroleum Exporting Countries (OPEC) Joint Ministerial Monitoring Committee. The EIA measures the change in the number 
            of barrels of crude oil held as inventory by commercial firms from the previous week. OPEC is the organisation that moves the oil market 
            the most by discussing a wide range of issues relating to energy and agreeing upon how much oil should be produced by each country.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-3">Technical analysis</h3>
          <p>
            Technical analysis is a skill that can be easily learned but not always easily mastered! To perform technical analysis, you apply indicators 
            to charts, which can help identify trends and risk sentiment in the market. By combining this with your own assessments of the price action 
            of oil products, you can discover entry points to the market and use them to attempt to generate profit from price movements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OilTradingStrategies;

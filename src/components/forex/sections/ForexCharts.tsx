
import React from "react";

const ForexCharts: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What types of charts are used most in forex trading?</h2>
      
      {/* Charts Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex15.png" 
          alt="Forex Charts" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        There are several types of charts that can be used when analysing the forex market, so deciding which chart to use usually depends on the trading style or type of analysis required. Here are three of the most popular chart types used by forex traders:
      </p>
      
      <ul className="list-disc pl-6 mb-4 text-left">
        <li className="mb-4">
          <strong>Line charts:</strong> Line charts give a clear, simplified view of the current market situation and work best for people who want a quick glimpse of where the market is heading. They simply show the close price at a given period, typically represented by a continuous curved line that connects dots that represent the changes in price over certain intervals of time.
        </li>
        <li className="mb-4">
          <strong>Bar charts:</strong> Bar charts are an upgraded version of the line chart. They offer information on the Open, High, Low and Close prices, so they are also known by the abbreviation 'OHLC' chart.
        </li>
        <li className="mb-4">
          <strong>Candlestick charts:</strong> Although candlestick charts look complicated at first, they are actually quite simple to read. Candlesticks represent four main price points within a particular period. This period can usually be set to 1 minute, 5 minutes, 30 minutes, 1 hour, daily, weekly, monthly, etc. The main body of the candle will be coloured green (or it will be empty) if the closing price is higher than the opening price of that period (i.e., the price has increased). If the body is coloured red (or filled in black), the price has decreased within the period. The ability to read candlestick charts and understand candlestick patterns is the first step before using more advanced analysis tools.
        </li>
      </ul>
    </>
  );
};

export default ForexCharts;

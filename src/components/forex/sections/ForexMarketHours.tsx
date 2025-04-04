
import React from "react";

const ForexMarketHours: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">What time do forex markets open?</h2>
      
      {/* Market Hours Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex5.png" 
          alt="Forex Market Hours" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        Forex markets are open 24 hours a day, five days a week. The official hours are from 5 p.m. EST on Sunday until 4 p.m. EST on Friday. EST refers to the time zone that is occupied by cities including New York, Boston, Atlanta, and Orlando in the US, and Ottawa in Canada.
      </p>
      
      <p className="mb-4 text-left">
        You will also see the 'UTC' time zone mentioned whenever forex is discussed. This stands for "Coordinated Universal Time," and it is aligned with what used to be GMT or Greenwich Mean Time. London, UK, is on UTC.
      </p>
      
      <p className="mb-4 text-left">
        Since there is no 'lead' market, forex trading hours are based on when trading is open in a participating country. The London and New York trading sessions have some overlap, so there is often a lot of trading volume during that time of day. Foreign exchange rates are determined for the next 24-hour period at 4 p.m. London/UTC time.
      </p>
      
      {/* Trading Sessions Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex6.png" 
          alt="Forex Trading Sessions" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </>
  );
};

export default ForexMarketHours;

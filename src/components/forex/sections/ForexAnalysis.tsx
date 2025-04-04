
import React from "react";

const ForexAnalysis: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">Technical and fundamental analysis in forex trading</h2>
      
      {/* Analysis Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex14.png" 
          alt="Forex Analysis" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        There are two main types of analysis used in trading: technical and fundamental.
      </p>
      
      <ul className="list-disc pl-6 mb-4 text-left">
        <li className="mb-4">
          <strong>Technical analysis:</strong> This is the use of a collection of methods that look for chart patterns that may predict future behaviour. Technical analysis assumes that all the information related to a currency pair is already "priced in." Therefore, the theory is that if a particular pattern has been repeated in the past, recognising that pattern can help the trader predict the immediate future.
        </li>
        <li className="mb-4">
          <strong>Fundamental analysis:</strong> FX traders use fundamental analysis to consider the underlying economic or policy reasons for a currency's price fluctuations. The main idea behind the analysis is that if the currency's underlying economy is predicted to do better compared to other countries, the value of that currency will go up, and vice versa.
        </li>
      </ul>
    </>
  );
};

export default ForexAnalysis;

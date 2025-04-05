
import React from "react";

const PrefaceComponent = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6">DF717</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            What is DF717?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            DF717 is our proprietary AI-based financial investment robot that uses historical data and advanced pattern recognition technologies to identify market opportunities. DF717 consistently maintains data integrity and methodology, providing reliable results across various market cycles without curve-fitting or bias.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            How DF717 Works
          </h3>
          <p className="text-gray-300 leading-relaxed">
            DF717 utilizes sophisticated machine learning algorithms and pattern recognition to analyze financial market data. The system identifies market trends and opportunities by processing vast amounts of historical and real-time data. DF717 continuously learns and adapts its investment strategies based on new market conditions and data inputs.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            Key Features
          </h3>
          
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Adaptive learning algorithms that evolve with market conditions</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Real-time data processing and analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Risk management protocols to protect investments</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Pattern recognition across multiple timeframes</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Proven track record through extensive backtesting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrefaceComponent;

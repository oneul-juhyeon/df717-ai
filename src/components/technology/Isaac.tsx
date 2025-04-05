
import React from "react";

const IsaacComponent = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6">HANNAH</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            The HANNAH Engine
          </h3>
          <p className="text-gray-300 leading-relaxed">
            HANNAH is our proprietary AI engine designed specifically for financial markets. It powers the core of DF717's decision-making capabilities and provides the computational framework for analyzing complex market patterns. HANNAH combines advanced machine learning with financial expertise to create a powerful AI system.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            Technical Framework
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Built on a foundation of neural networks and deep learning algorithms, HANNAH processes multi-dimensional financial data streams. The system incorporates both time-series analysis and pattern recognition to identify market opportunities before they become apparent to traditional analysts.
          </p>
        </div>

        <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6 my-8">
          <h4 className="text-xl font-bold mb-3 text-white">Core Components:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#232323] p-4 rounded border border-white/10">
              <h5 className="font-bold text-red-400">Data Processing Unit</h5>
              <p className="text-sm text-gray-400">Handles vast amounts of market data in real-time with efficient processing algorithms.</p>
            </div>
            <div className="bg-[#232323] p-4 rounded border border-white/10">
              <h5 className="font-bold text-red-400">Pattern Recognition System</h5>
              <p className="text-sm text-gray-400">Identifies complex market patterns across multiple timeframes and asset classes.</p>
            </div>
            <div className="bg-[#232323] p-4 rounded border border-white/10">
              <h5 className="font-bold text-red-400">Risk Assessment Module</h5>
              <p className="text-sm text-gray-400">Continuously evaluates and adjusts risk parameters to protect investments.</p>
            </div>
            <div className="bg-[#232323] p-4 rounded border border-white/10">
              <h5 className="font-bold text-red-400">Execution Engine</h5>
              <p className="text-sm text-gray-400">Implements strategies with precision timing and optimal market entry/exit points.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            Continuous Improvement
          </h3>
          <p className="text-gray-300 leading-relaxed">
            HANNAH is constantly evolving through a rigorous improvement cycle. Our team of experts regularly updates the system with new data sources, algorithm refinements, and market insights. This ensures that HANNAH remains at the cutting edge of AI-driven financial technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IsaacComponent;

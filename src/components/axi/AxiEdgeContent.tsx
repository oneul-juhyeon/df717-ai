
import React from "react";

const AxiEdgeContent: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Trade your edge</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you're new or a pro, if gold is your goal or
            analytics are your answer, there's one thing that every
            trader looks for. Edge. At Axi, we've got all the trading
            tools to help you unleash yours.
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-2 bg-red-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img 
              src="/lovable-uploads/e3d5c6d1-9c63-48be-9c8e-69d26cd2eb20.png" 
              alt="Edge Concept Visualization" 
              className="relative z-10 max-w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AxiEdgeContent;


import React from "react";

const AxiHero: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden rounded-2xl">
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 w-full py-20 px-12 max-sm:py-12 max-sm:px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4 max-sm:text-3xl">Our Edge</h1>
          <p className="text-xl text-white max-w-3xl mx-auto max-sm:text-lg">
            We give you all the tools and support to unlock your advantage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AxiHero;

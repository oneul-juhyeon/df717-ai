
import React from "react";

const AxiHero: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/afc8cb24-dc30-445b-92f1-a0b5a49eefce.png')] bg-cover bg-center mix-blend-overlay opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-[154px] relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Edge</h1>
          <p className="text-xl text-white max-w-3xl mx-auto md:mx-0">
            We give you all the tools and support to unlock your advantage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AxiHero;

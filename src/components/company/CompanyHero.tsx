
import React from "react";

const CompanyHero: React.FC = () => {
  return (
    <div className="w-full mb-12 text-center scroll-animate">
      <div className="relative overflow-hidden rounded-xl bg-[#111111] p-1 before:absolute before:inset-0 before:rounded-xl before:p-1 before:bg-gradient-to-r before:from-red-800/20 before:via-transparent before:to-blue-800/20 before:blur-xl">
        <div className="relative z-10 p-8 bg-[#0e0e0e]/95 rounded-lg backdrop-blur-sm border border-white/5">
          <h1 className="text-5xl mb-8 text-white font-gotham font-bold max-md:text-4xl max-sm:text-3xl">
            About DF717 & Company
          </h1>
          
          <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            DF717 designs a better life through technology.<br />
            With sophisticated technologies and reliable data, we lead innovation in the future financial markets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyHero;

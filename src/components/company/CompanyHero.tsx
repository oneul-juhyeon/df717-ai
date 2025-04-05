
import React from "react";

const CompanyHero: React.FC = () => {
  return (
    <div className="w-full mb-12 text-center opacity-0 scroll-animate">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0f0f2f] to-[#0a0a1e] p-1 before:absolute before:inset-0 before:rounded-xl before:p-1 before:bg-gradient-to-r before:from-red-800/40 before:via-transparent before:to-blue-800/40 before:blur-xl">
        <div className="relative z-10 p-8 bg-[#0a0a1e]/90 rounded-lg">
          <h1 className="text-5xl mb-8 text-white font-gotham font-bold max-md:text-4xl max-sm:text-3xl">
            About DF717 & Company
          </h1>
          
          <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
            DF717 designs a better life through technology.<br />
            With sophisticated technologies and reliable data, we lead innovation in the future financial markets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyHero;

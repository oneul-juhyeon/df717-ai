
import React from "react";

const CompanyHero: React.FC = () => {
  return (
    <div className="w-full mb-12 text-center opacity-0 scroll-animate">
      <h1 className="text-5xl mb-8 text-white font-gotham font-bold max-md:text-4xl max-sm:text-3xl">
        About DF717 & Company
      </h1>
      
      <div className="p-6 bg-[#121230] rounded-lg border border-red-900/30 shadow-lg">
        <p className="text-lg text-white leading-relaxed">
          DF717 designs a better life through technology.<br />
          With sophisticated technologies and reliable data, we lead innovation in the future financial markets.
        </p>
      </div>
    </div>
  );
};

export default CompanyHero;

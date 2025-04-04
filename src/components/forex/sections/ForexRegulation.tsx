
import React from "react";

const ForexRegulation: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-12 mb-4">How is the forex market regulated?</h2>
      
      {/* Regulation Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/forex7.png" 
          alt="Forex Market Regulation" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        Even though it operates in over 180 countries, no single organisation is responsible for regulating the forex market. However, there are more than 50 governing and independent bodies around the world that supervise forex trading to ensure transparency and accountability.
      </p>
      
      <p className="mb-4 text-left">
        Some top regulatory bodies overseeing foreign exchange activity include the Australian Securities and Investments Commission (ASIC), the Financial Conduct Authority (FCA) in the United Kingdom, and the Monetary Authority of Singapore (MAS). These regulatory bodies set standards for all financial services providers to abide by, such as regarding registration, licencing, and audit requirements, and can step in if a provider is found to be in breach of laws or regulations.
      </p>
      
      <p className="mb-4 text-left">
        As a result of these authorities, forex traders have a higher degree of assurance that the trading service they subscribe to is fair and ethical.
      </p>
    </>
  );
};

export default ForexRegulation;


import React from "react";

const AxiCFDIntro: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl mt-8 mb-4">What are CFDs?</h2>
      <p className="mb-8 text-left">
        A CFD, short for 'Contract for Difference,' is a type of financial derivative that allows traders to speculate on the price movements of various underlying assets, such as stocks, commodities, currencies, or indices, without owning the actual underlying asset.
      </p>
      
      <h2 className="text-3xl mt-12 mb-4">What is the CFDs market?</h2>
      
      {/* Market Image */}
      <div className="my-8">
        <img 
          src="/lovable-uploads/axi-cfd2.png" 
          alt="CFD Markets" 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <p className="mb-4 text-left">
        A wide variety of products and assets can be traded as contracts for difference. In this market, the main types of CFDs include:
      </p>
    </>
  );
};

export default AxiCFDIntro;

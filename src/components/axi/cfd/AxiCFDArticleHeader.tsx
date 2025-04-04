
import React from "react";
import { Badge } from "@/components/ui/badge";

const AxiCFDArticleHeader: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">What is CFD trading and how to trade CFDs?</h1>
      
      <div className="flex items-center gap-2 mb-8">
        <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-100">Education</Badge>
        <span className="text-gray-500">/</span>
        <span className="text-gray-700 font-medium">Milan Cutkovic</span>
      </div>
      
      {/* Hero Image */}
      <div className="mb-12">
        <img 
          src="/lovable-uploads/axi-cfd1.png" 
          alt="CFD Trading Guide" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </>
  );
};

export default AxiCFDArticleHeader;

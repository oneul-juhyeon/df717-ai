
import React from "react";
import { Badge } from "@/components/ui/badge";

const CommoditiesArticleHeader: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">What is commodity trading and how to trade commodities?</h1>
      
      <div className="flex items-center gap-2 mb-8">
        <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-100">Commodities</Badge>
        <span className="text-gray-500">/</span>
        <a 
          href="https://www.axi.com/kr/blog/authors/milan-cutkovic" 
          className="text-gray-700 font-medium hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Milan Cutkovic
        </a>
      </div>
      
      {/* Hero Image */}
      <div className="mb-12">
        <img 
          src="/lovable-uploads/commodities1.png" 
          alt="Commodity Trading Guide" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </>
  );
};

export default CommoditiesArticleHeader;

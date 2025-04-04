
import React from "react";
import { Badge } from "@/components/ui/badge";

const SharesArticleHeader: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">What is stock trading and how to trade stocks?</h1>
      
      <div className="flex items-center gap-2 mb-8">
        <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-100">Shares</Badge>
        <span className="text-gray-500">/</span>
        <a 
          className="text-gray-700 font-medium hover:underline"
        >
          Axi Team
        </a>
      </div>
      
      {/* Hero Image */}
      <div className="mb-12">
        <img 
          src="/lovable-uploads/shares1.png" 
          alt="Stock Trading Guide" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </>
  );
};

export default SharesArticleHeader;

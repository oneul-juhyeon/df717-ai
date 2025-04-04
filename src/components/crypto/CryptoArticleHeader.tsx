
import React from "react";
import { Badge } from "@/components/ui/badge";

const CryptoArticleHeader: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">What is cryptocurrency trading and how to trade cryptocurrencies?</h1>
      
      <div className="flex items-center gap-2 mb-8">
        <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-100">Cryptocurrencies</Badge>
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
          src="/lovable-uploads/crypto1.png" 
          alt="Cryptocurrency Trading Guide" 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </>
  );
};

export default CryptoArticleHeader;


import React, { useEffect, useRef } from "react";
import { DollarSign, BarChart, TrendingUp, LineChart, Bitcoin } from "lucide-react";

const AxiTradingProducts: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const products = [
    { icon: <DollarSign className="h-12 w-12 text-white" />, name: "Forex" },
    { icon: <BarChart className="h-12 w-12 text-white" />, name: "Shares" },
    { icon: <TrendingUp className="h-12 w-12 text-white" />, name: "Indices" },
    { icon: <LineChart className="h-12 w-12 text-white" />, name: "Commodities" },
    { icon: <Bitcoin className="h-12 w-12 text-white" />, name: "Cryptocurrencies" }
  ];
  
  return (
    <div ref={sectionRef} className="mb-20 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">A world of trading products</h2>
        <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
          Choose from a variety of global markets to trade with Axi, using ultra competitive spreads and flexible leverage to trade your edge.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-red-500 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                {product.icon}
              </div>
              <span className="text-white font-medium">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AxiTradingProducts;

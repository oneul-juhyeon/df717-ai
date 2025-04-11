
import React, { useEffect, useRef } from "react";
import { TrendingUp, BarChart3, LineChart } from "lucide-react";

const AxiTrustLiquidity: React.FC = () => {
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
  
  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="flex items-center justify-center">
        <div className="p-6 bg-[#1E1E1E] rounded-xl relative">
          <div className="flex items-center justify-center">
            <TrendingUp className="h-12 w-12 text-white absolute -top-6 -left-6 bg-[#161616] p-2 rounded-lg" />
            <LineChart className="h-12 w-12 text-white absolute -top-6 -right-6 bg-[#161616] p-2 rounded-lg" />
            <BarChart3 className="h-12 w-12 text-white absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#161616] p-2 rounded-lg" />
            <img 
              src="/lovable-uploads/df717_logo.png" 
              alt="DF717 Logo" 
              className="w-32 h-auto my-16"
            />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl text-white font-bold mb-6">Top tier liquidity</h2>
        <p className="text-gray-300">
          To help give you a sharper trading edge, our pricing engine directly connects with 20+ top liquidity sources. When combined with our superior network technology, this allows us to offer lower pricing that's delivered faster, refreshes faster and experiences fewer outages.
        </p>
      </div>
    </div>
  );
};

export default AxiTrustLiquidity;

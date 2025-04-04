
import React, { useEffect, useRef } from "react";

const AxiPricingHero: React.FC = () => {
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
    <div ref={sectionRef} className="mt-10 mb-16 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="w-full relative overflow-hidden rounded-2xl">
        <div className="bg-gradient-to-r from-red-600 to-red-500 w-full py-20 px-12 max-sm:py-12 max-sm:px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4 max-sm:text-3xl">Best Pricing and Trade Execution</h1>
            <p className="text-xl text-white max-w-3xl mx-auto max-sm:text-lg mb-2">
              Lower latency, faster execution and better pricing.
            </p>
            <p className="text-xl text-white max-w-3xl mx-auto max-sm:text-lg">
              Trade your edge.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Lower latency, faster execution and better pricing. Trade your edge.
        </p>
      </div>
      
      <div className="mt-10 flex justify-center">
        <img 
          src="/lovable-uploads/23029a1d-27ab-431a-b439-e361ac5e7371.png" 
          alt="Trading execution visualization" 
          className="max-w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default AxiPricingHero;

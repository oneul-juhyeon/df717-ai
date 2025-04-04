
import React, { useEffect, useRef } from "react";

const AxiTopTierLiquidity: React.FC = () => {
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
    <div ref={sectionRef} className="mb-20 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Top tier liquidity. Always.</h2>
            <p className="text-gray-300 mb-6">
              For more than a decade, Axi has built strong relationships with top liquidity providers around the world. 
              Thanks to these trusted partnerships, we're able to deliver you a more reliable trading service with better pricing 
              and faster execution speeds.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/ee164e58-7962-4059-9bce-c619cf1a4484.png" 
              alt="Liquidity providers chart" 
              className="max-w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiTopTierLiquidity;


import React, { useEffect, useRef } from "react";

const AxiFlexibleLeverage: React.FC = () => {
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
          <div className="order-2 md:order-1 flex justify-center">
            <img 
              src="/lovable-uploads/ee164e58-7962-4059-9bce-c619cf1a4484.png" 
              alt="Leverage trading chart" 
              className="max-w-full h-auto rounded-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-white mb-6">Flexible leverage. More opportunities.</h2>
            <p className="text-gray-300 mb-6">
              While our lightning fast network connects you to a world of FX pairs, commodities, stocks and indices, 
              our flexible leverage up to 1000:1 gives you the ability to modify your risk profile and make the most of your trading capital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiFlexibleLeverage;


import React, { useEffect, useRef } from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";

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
    <div ref={sectionRef} className="mb-16 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="w-full relative">
        <FinancialProductArticleHeader 
          title="Best Pricing and Trade Execution"
          subtitle="Lower latency, faster execution and better pricing. Trade your edge."
          isMainTitle={true}
        />
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

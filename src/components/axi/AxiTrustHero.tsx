
import React, { useEffect, useRef } from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";

const AxiTrustHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={heroRef} className="mt-10 mb-16 w-full transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="w-full relative">
        <FinancialProductArticleHeader 
          title="Trade With Trust"
          subtitle="Valued and respected. Trade your edge with a broker you can trust."
        />
      </div>
    </div>
  );
};

export default AxiTrustHero;

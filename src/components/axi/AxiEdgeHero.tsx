
import React, { useEffect, useRef } from "react";
import FinancialProductArticleHeader from "../financial-products/FinancialProductArticleHeader";

const AxiEdgeHero: React.FC = () => {
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
    <div ref={heroRef} className="mb-16 w-full transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="w-full relative">
        <FinancialProductArticleHeader 
          title="Our Edge"
          subtitle="We give you all the tools and support to unlock your advantage."
        />
      </div>
    </div>
  );
};

export default AxiEdgeHero;

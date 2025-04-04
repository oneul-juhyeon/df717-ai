
import React, { useEffect, useRef } from "react";

const AxiCuttingEdgeTechnology: React.FC = () => {
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
        <h2 className="text-3xl font-bold text-white mb-8">Cutting Edge Technology</h2>
        <p className="text-gray-300 text-lg mb-12">
          Modern traders expect high performance technology and exceptional service, and with Axi that's exactly what you get. 
          From rock solid platforms and lightning fast trade execution to raw spreads and flexible leverage across our product suite, 
          you can rely on Axi to deliver any time you're ready to take a trading opportunity.
        </p>
        
        <h2 className="text-3xl font-bold text-white mb-8">It's what you don't see that gives Axi the edge…</h2>
        <p className="text-gray-300 text-lg mb-12">
          Serious traders know that when it's time to execute your trade, there's no time to wait. 
          That's why Axi invests heavily in behind-the-scenes network technology to significantly lower latency. 
          This results in superior pricing that's delivered faster, refreshes faster, has a greater depth of liquidity 
          and experiences fewer outages.
        </p>
      </div>
    </div>
  );
};

export default AxiCuttingEdgeTechnology;

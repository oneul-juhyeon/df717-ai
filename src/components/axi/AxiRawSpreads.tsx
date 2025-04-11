
import React, { useEffect, useRef } from "react";

const AxiRawSpreads: React.FC = () => {
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
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Raw spreads from 0.0</h2>
        <p className="text-gray-300 text-lg mb-8">Want to see how low our spreads can be?</p>
      </div>
    </div>
  );
};

export default AxiRawSpreads;

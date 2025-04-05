
import React, { useEffect, useRef } from "react";

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
    <div ref={heroRef} className="mt-10 mb-16 w-full transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="w-full relative overflow-hidden rounded-2xl">
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 w-full py-20 px-12 max-sm:py-12 max-sm:px-6 relative">
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold text-white mb-4 max-sm:text-3xl">Our Edge</h1>
            <p className="text-xl text-white max-w-3xl mx-auto max-sm:text-lg">
              We give you all the tools and support to unlock your advantage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiEdgeHero;

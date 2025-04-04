
import React, { useEffect, useRef } from "react";
import { Shield } from "lucide-react";
import FeatureCard from "../landing/FeatureCard";

const AxiTrustCreated: React.FC = () => {
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
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl text-white font-bold mb-6">Created for traders, by traders</h2>
        <p className="text-gray-300 mb-6">
          Axi was founded in 2007 on a simple idea: be the broker we'd want to trade with. Since then, we've grown from a two-person startup to a trusted top global broker and the first choice for a community of tens of thousands of traders in more than 100 countries. When you join Axi, you can be confident that we're behind you for every step of your trading journey.
        </p>
        <p className="text-red-500 italic">
          *Most Trusted Broker UK Forex Awards 2018
        </p>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full bg-[#1E1E1E] border border-gray-700 flex items-center justify-center p-10">
          <div className="relative">
            <Shield className="w-32 h-32 text-red-500" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="/lovable-uploads/13b4fb30-cd5c-42ae-b804-679c42c226d5.png" alt="Axi Logo" className="w-16 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiTrustCreated;

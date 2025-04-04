
import React, { useEffect, useRef } from "react";
import { Users, CheckCircle } from "lucide-react";

const AxiTrustGlobal: React.FC = () => {
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
        <h2 className="text-3xl text-white font-bold mb-6">Trusted by thousands of traders in 100+ countries.</h2>
        <p className="text-gray-300 mb-6">
          Our global strength is built on local service. That's why the Axi Group of Companies** holds financial trading licenses in different parts of the world so that when you trade with us you'll have the assurance you're trading within the regulations appropriate to your region. And behind that, you can rely on an award-winning client support team that speaks your language.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="bg-[#1E1E1E] px-6 py-3 rounded-full flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-red-500" />
            <span className="text-white">Licensed</span>
          </div>
          <div className="bg-[#1E1E1E] px-6 py-3 rounded-full flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-red-500" />
            <span className="text-white">Regulated</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <img 
          src="/lovable-uploads/47da434e-f908-45c4-9123-e76bd07867fc.png" 
          alt="Trader" 
          className="max-w-full h-auto rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default AxiTrustGlobal;

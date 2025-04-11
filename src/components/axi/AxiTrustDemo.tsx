
import React, { useEffect, useRef } from "react";
import { LineChart } from "lucide-react";

const AxiTrustDemo: React.FC = () => {
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
        <h2 className="text-3xl text-white font-bold mb-6">Try trading (without the risk)</h2>
        <p className="text-gray-300 mb-6">
          Want to explore the benefits of trading without risking your own money? Open a free Axi Demo account to practice with the safety of virtual funds.
        </p>
        <p className="text-gray-300 mb-8">
          Whether you're an aspiring trader or a savvy pro searching for new opportunities, our near real-time Demo account mirrors a live trading environment and gives traders space to practice and discover an edge they can use to succeed at any level.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4 mb-8">
          <div className="bg-[#1E1E1E] px-6 py-3 rounded-full flex items-center gap-2">
            <LineChart className="h-5 w-5 text-red-500" />
            <span className="text-white">No obligation Demo accounts with US$50,000 of virtual funds to practice with</span>
          </div>
          <div className="bg-[#1E1E1E] px-6 py-3 rounded-full flex items-center gap-2">
            <LineChart className="h-5 w-5 text-red-500" />
            <span className="text-white">Multi-lingual support in 14 languages</span>
          </div>
          <div className="bg-[#1E1E1E] px-6 py-3 rounded-full flex items-center gap-2">
            <LineChart className="h-5 w-5 text-red-500" />
            <span className="text-white">Award-winning customer support available 24/5 to help you on your trading journey</span>
          </div>
          <div className="bg-[#1E1E1E] px-6 py-3 rounded-full flex items-center gap-2">
            <LineChart className="h-5 w-5 text-red-500" />
            <span className="text-white">Free and extensive educational resources to give your trading an edge</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <img 
          src="/lovable-uploads/8335e11c-a525-43db-a8bd-533a8d647451.png" 
          alt="Trading platform with traders analyzing charts" 
          className="max-w-full h-auto rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default AxiTrustDemo;

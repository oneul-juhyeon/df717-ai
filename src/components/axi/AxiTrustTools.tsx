
import React, { useEffect, useRef } from "react";
import { Wrench, Cpu, LineChart } from "lucide-react";

const AxiTrustTools: React.FC = () => {
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
      <div className="flex items-center justify-center order-2 md:order-1">
        <div className="p-6 bg-[#1E1E1E] rounded-xl relative">
          <div className="flex items-center justify-center gap-4">
            <div className="p-4 bg-[#282828] rounded-lg">
              <LineChart className="h-10 w-10 text-red-500" />
            </div>
            <div className="p-4 bg-[#282828] rounded-lg">
              <Wrench className="h-10 w-10 text-red-500" />
            </div>
            <div className="p-4 bg-[#282828] rounded-lg">
              <Cpu className="h-10 w-10 text-red-500" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center order-1 md:order-2">
        <h2 className="text-3xl text-white font-bold mb-6">The right trading tools for the job</h2>
        <p className="text-gray-300 mb-6">
          Modern traders need world-class technology. Axi provides this through a suite of advanced trade management tools that offer the ideal combination of simplicity and sophistication.
        </p>
        <p className="text-gray-300 mb-8">
          From an AI-driven analytics platform that helps improve your decision making through to automation software that allows you to maximise market opportunities, Axi gives you access to smart technology you can trust to hone your tactics and make it easier to trade your edge.
        </p>
      </div>
    </div>
  );
};

export default AxiTrustTools;

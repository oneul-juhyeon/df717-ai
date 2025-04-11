
import React, { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";

const AxiTrustSecurity: React.FC = () => {
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
    <div ref={sectionRef} className="bg-[#1E1E1E] p-10 rounded-xl transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
            <ShieldCheck className="h-10 w-10 text-red-500" />
          </div>
        </div>
        
        <div className="flex-grow">
          <h2 className="text-2xl text-white font-bold mb-4">Securing your payments</h2>
          <p className="text-gray-300">
            As a responsible broker, online security and fraud prevention are our top priorities. To ensure your account is fully protected, we implement high industry standards of encryption for online payments and apply extra validation measures such as ensuring all deposits and withdrawals match up with the name on your credit card. These small but important steps add valuable layers of protection to your account and provide you with a safer and more secure trading experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AxiTrustSecurity;

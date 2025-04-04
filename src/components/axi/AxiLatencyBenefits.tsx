
import React, { useEffect, useRef } from "react";
import { DollarSign, RefreshCw, Shield } from "lucide-react";

const AxiLatencyBenefits: React.FC = () => {
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
  
  const benefits = [
    {
      icon: <DollarSign className="h-12 w-12 text-red-500" />,
      title: "Lower cost",
      description: "Being able to provide lower latency can significantly reduce the chance of slippage, thereby minimising your trading costs compared to a standard connection."
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-red-500" />,
      title: "Faster refresh",
      description: "Lower latency improves our system refresh speed and gives you increased confidence in the pricing you receive, particularly during major events (e.g. elections) characterised by major volatility and/or low liquidity."
    },
    {
      icon: <Shield className="h-12 w-12 text-red-500" />,
      title: "Fewer outages",
      description: "Because our pricing engine connects directly with 20+ liquidity sources, we're not dependent on slower ECN-style technologies. This gives you pricing that's more reliable, delivered faster and has more depth."
    }
  ];
  
  return (
    <div ref={sectionRef} className="mb-20 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Why lower latency matters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-[#222222] p-4 rounded-full mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AxiLatencyBenefits;

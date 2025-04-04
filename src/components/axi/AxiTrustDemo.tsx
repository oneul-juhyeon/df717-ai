
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

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
  
  const features = [
    "No obligation Demo accounts with US$50,000 of virtual funds to practice with",
    "Multi-lingual support in 14 languages",
    "Award-winning customer support available 24/5 to help you on your trading journey",
    "Free and extensive educational resources to give your trading an edge"
  ];
  
  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl text-white font-bold mb-6">Try trading (without the risk)</h2>
        <p className="text-gray-300 mb-6">
          Want to explore the benefits of trading without risking your own money? Open a free Axi Demo account to practice with the safety of virtual funds.
        </p>
        <p className="text-gray-300 mb-6">
          Whether you're an aspiring trader or a savvy pro searching for new opportunities, our near real-time Demo account mirrors a live trading environment and gives traders space to practice and discover an edge they can use to succeed at any level.
        </p>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-1" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link to="/contact" className="self-start">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-6 h-auto">
            Try a Free Demo
          </Button>
        </Link>
      </div>
      
      <div className="flex items-center justify-center">
        <img 
          src="/lovable-uploads/47da434e-f908-45c4-9123-e76bd07867fc.png" 
          alt="Person using demo trading" 
          className="max-w-full h-auto rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default AxiTrustDemo;

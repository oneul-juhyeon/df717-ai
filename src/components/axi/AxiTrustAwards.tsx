
import React, { useEffect, useRef } from "react";
import { Award, Users, Clock, BookOpen, Star } from "lucide-react";

const AxiTrustAwards: React.FC = () => {
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
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      text: "No obligation Demo accounts with US$50,000 of virtual funds to practice with"
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      text: "Multi-lingual support in 14 languages"
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      text: "Award-winning customer support available 24/5 to help you on your trading journey"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-red-500" />,
      text: "Free and extensive educational resources to give your trading an edge"
    },
    {
      icon: <Star className="h-8 w-8 text-red-500" />,
      text: "Proudly named a Most Trusted Broker*"
    }
  ];
  
  return (
    <div ref={sectionRef} className="transition-all duration-1000 transform opacity-0 translate-y-10">
      <div className="bg-gradient-to-r from-red-700 to-red-500 p-10 rounded-2xl text-center mb-10">
        <h2 className="text-3xl text-white font-bold mb-2">24/5 award-winning service.</h2>
        <p className="text-white text-xl">100% committed to you.</p>
        <p className="text-white mt-6">
          We are proud of our global, award-winning** service built on transparency, reliability, and excellent customer service
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-[#1E1E1E] rounded-xl p-6 flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#333] flex items-center justify-center mb-4">
            <Award className="h-10 w-10 text-red-500" />
          </div>
          <p className="text-white text-center">Best CFD Broker 2021</p>
        </div>
        <div className="bg-[#1E1E1E] rounded-xl p-6 flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#333] flex items-center justify-center mb-4">
            <Award className="h-10 w-10 text-red-500" />
          </div>
          <p className="text-white text-center">Best Forex Trading Experience 2022</p>
        </div>
        <div className="bg-[#1E1E1E] rounded-xl p-6 flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#333] flex items-center justify-center mb-4">
            <Award className="h-10 w-10 text-red-500" />
          </div>
          <p className="text-white text-center">Most Transparent Broker 2021</p>
        </div>
      </div>
      
      <p className="text-gray-400 mt-4 italic text-right">** Axi Group of companies</p>
      
      <div className="mt-10">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              {feature.icon}
              <p className="text-gray-300">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AxiTrustAwards;


import React, { useEffect, useRef } from "react";
import { CreditCard, Wallet, ArrowDownToLine } from "lucide-react";

const AxiTrustWithdrawals: React.FC = () => {
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
      icon: <CreditCard className="h-10 w-10 text-red-500" />,
      title: "Secure payments",
      description: "Your funds are protected with advanced security"
    },
    {
      icon: <Wallet className="h-10 w-10 text-red-500" />,
      title: "Instant payment options",
      description: "Multiple payment methods for your convenience"
    },
    {
      icon: <ArrowDownToLine className="h-10 w-10 text-red-500" />,
      title: "Easy withdrawals",
      description: "Simple and fast process to withdraw your funds"
    }
  ];
  
  return (
    <div ref={sectionRef} className="transition-all duration-1000 transform opacity-0 translate-y-10">
      <h2 className="text-3xl text-white font-bold mb-6">Super simple withdrawals</h2>
      <p className="text-gray-300 mb-8">
        Some brokers make you jump through hoops just to withdraw your own money. Our transparent service lets you make deposits and request withdrawals at any time though our online Client Portal. And, depending on the funding method you choose, your money can be cleared instantly.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#1E1E1E] p-8 rounded-xl flex flex-col items-center justify-center text-center">
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl text-white font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiTrustWithdrawals;

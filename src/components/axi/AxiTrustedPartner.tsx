
import React from "react";
import { Check, Shield } from "lucide-react";

const AxiTrustedPartner: React.FC = () => {
  const benefits = [
    "Top global broker",
    "Licensed and regulated",
    "60,000+ customers in 100+ countries",
    "Rated 'Excellent' by Trustpilot",
  ];

  return (
    <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl overflow-hidden max-w-[70%] mx-auto">
      <div className="p-12 max-sm:p-6">
        <h2 className="text-4xl font-bold text-white mb-8 max-sm:text-3xl">Trusted Partner</h2>
        <p className="text-white text-lg mb-8">
          We're proud of our global reputation as an honest, fair and trusted broker.
        </p>
        
        <ul className="space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-white">
              <Check className="mr-3 h-5 w-5 text-white" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="relative bg-white/10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-red-600/40"></div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative">
            <Shield className="text-white h-48 w-48 opacity-80" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="/lovable-uploads/df717_logo.png" alt="DF717 Logo" className="w-24 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiTrustedPartner;

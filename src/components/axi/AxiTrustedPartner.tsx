
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
    <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl overflow-hidden max-w-[55%] mx-auto">
      <div className="p-8 max-sm:p-6">
        <h2 className="text-3xl font-bold text-white mb-4 max-sm:text-2xl text-center">Trusted Partner</h2>
        <p className="text-white text-base mb-6 text-center">
          We're proud of our global reputation as an honest, fair and trusted broker.
        </p>
        
        <ul className="space-y-3 mb-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-white">
              <Check className="mr-2 h-4 w-4 text-white" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="relative bg-white/10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-red-600/40"></div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative">
            <Shield className="text-white h-32 w-32 opacity-80" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="/lovable-uploads/df717_logo.png" alt="DF717 Logo" className="w-20 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiTrustedPartner;

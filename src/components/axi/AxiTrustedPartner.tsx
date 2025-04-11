import React from "react";
import { Check, Shield } from "lucide-react";
const AxiTrustedPartner: React.FC = () => {
  const benefits = ["Top global broker", "Licensed and regulated", "60,000+ customers in 100+ countries", "Rated 'Excellent' by Trustpilot"];
  return <div className="flex max-lg:flex-col bg-gradient-to-br from-red-600 to-red-500 rounded-2xl overflow-hidden w-full">
      <div className="p-6 max-sm:p-4 flex-1">
        <h2 className="text-2xl font-bold text-white mb-3 max-sm:text-xl text-left">Trusted Partner</h2>
        <p className="text-white text-sm mb-4 text-left">
          We're proud of our global reputation as an honest, fair and trusted broker.
        </p>
        
        <ul className="space-y-2 mb-3">
          {benefits.map((benefit, index) => <li key={index} className="flex items-center text-white">
              <Check className="mr-2 h-3 w-3 text-white" />
              <span className="text-xs">{benefit}</span>
            </li>)}
        </ul>
      </div>
      
      <div className="flex items-center justify-center p-3 bg-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-red-600/40"></div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative">
            <Shield className="text-white h-20 w-20 opacity-80" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="/lovable-uploads/df717_logo.png" alt="DF717 Logo" className="w-12 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AxiTrustedPartner;
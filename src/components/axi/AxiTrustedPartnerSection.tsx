
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const AxiTrustedPartnerSection: React.FC = () => {
  return (
    <section className="py-16 bg-red-500 text-white rounded-lg my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="px-6 md:px-10">
          <h2 className="text-3xl font-bold mb-6">Trusted Partner</h2>
          <p className="mb-8">
            We're proud of our global reputation as an honest, fair and trusted broker.
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2 text-white" />
              <span>Top global broker</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2 text-white" />
              <span>Licensed and regulated</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2 text-white" />
              <span>60,000+ customers in 100+ countries</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2 text-white" />
              <span>Rated 'Excellent' by Trustpilot</span>
            </li>
          </ul>
          
          <Button className="bg-white text-red-500 hover:bg-gray-100">
            TRADE WITH TRUST
          </Button>
        </div>
        
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/afc8cb24-dc30-445b-92f1-a0b5a49eefce.png" 
            alt="Trusted Trading Partners" 
            className="max-w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AxiTrustedPartnerSection;

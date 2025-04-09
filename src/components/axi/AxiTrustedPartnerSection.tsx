
import React from "react";
import { CheckIcon, Award, ShieldCheck, Users, Handshake } from "lucide-react";

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
        </div>
        
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="bg-white p-8 rounded-full shadow-lg mb-4">
              <Handshake className="h-32 w-32 text-red-500" strokeWidth={1.5} />
            </div>
            <div className="flex gap-6 mt-4">
              <div className="bg-white p-4 rounded-full shadow-md">
                <Award className="h-12 w-12 text-red-500" strokeWidth={1.5} />
              </div>
              <div className="bg-white p-4 rounded-full shadow-md">
                <ShieldCheck className="h-12 w-12 text-red-500" strokeWidth={1.5} />
              </div>
              <div className="bg-white p-4 rounded-full shadow-md">
                <Users className="h-12 w-12 text-red-500" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AxiTrustedPartnerSection;

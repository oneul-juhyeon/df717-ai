
import React from "react";
import { Separator } from "@/components/ui/separator";
import CompanyValueCards from "./CompanyValueCards";

const CompanyBrandSection: React.FC = () => {
  return (
    <div className="w-full mb-16 scroll-animate opacity-0">
      <div className="relative rounded-xl bg-gradient-to-b from-[#111111] to-[#0e0e0e] p-0.5 border border-white/5 shadow-lg">
        <div className="relative z-10 p-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-white">
            Our Values
          </h2>
          
          <div className="space-y-12 mt-6">
            <div className="bg-[#111111] p-8 rounded-lg border border-white/5 shadow-lg hover:shadow-white/5 transition-all duration-300 backdrop-blur-sm scroll-animate opacity-0">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Brand Definition
              </h3>
              <p className="text-lg text-gray-300">A company that drives change in financial markets through technological innovation.</p>
            </div>
            
            <div className="relative">
              <Separator className="bg-[#333333] h-0.5 my-10" />
            </div>
            
            <div className="bg-[#111111] p-8 rounded-lg border border-white/5 shadow-lg hover:shadow-white/5 transition-all duration-300 backdrop-blur-sm scroll-animate opacity-0">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Key Brand Statement
              </h3>
              <p className="text-2xl font-bold italic text-white text-center">
                Without Love, We are nothing.
              </p>
            </div>
            
            <div className="relative">
              <Separator className="bg-[#333333] h-0.5 my-10" />
            </div>
            
            <div className="text-center mb-8 scroll-animate opacity-0">
              <h3 className="text-2xl font-bold mb-6 text-white">Core Values</h3>
            </div>
            
            <div className="scroll-animate opacity-0">
              <CompanyValueCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBrandSection;


import React from "react";
import { Separator } from "@/components/ui/separator";
import CompanyValueCards from "./CompanyValueCards";

const CompanyBrandSection: React.FC = () => {
  return (
    <div className="w-full mb-16 scroll-animate opacity-0">
      <div className="relative p-0">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-12 flex items-center justify-center text-white">
            Our Values
          </h2>
          
          <div className="space-y-24 mt-12">
            <div className="scroll-animate opacity-0">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Brand Definition
              </h3>
              <p className="text-lg text-gray-300">A company that drives change in financial markets through technological innovation.</p>
            </div>
            
            <div className="relative">
              <Separator className="bg-[#333333] h-px my-12" />
            </div>
            
            <div className="scroll-animate opacity-0">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Key Brand Statement
              </h3>
              <p className="text-3xl font-bold italic text-white">
                Without Love, We are nothing.
              </p>
            </div>
            
            <div className="relative">
              <Separator className="bg-[#333333] h-px my-12" />
            </div>
            
            <div className="text-left mb-12 scroll-animate opacity-0">
              <h3 className="text-3xl font-bold mb-8 text-white">Core Values</h3>
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


import React from "react";
import { Separator } from "@/components/ui/separator";
import CompanyValueCards from "./CompanyValueCards";

const CompanyBrandSection: React.FC = () => {
  return (
    <div className="w-full mb-16 scroll-animate opacity-0">
      <div className="relative rounded-xl bg-white p-0.5 border border-gray-200 shadow-sm">
        <div className="relative z-10 p-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-gray-800">
            Our Values
          </h2>
          
          <div className="space-y-12 mt-6">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 backdrop-blur-sm scroll-animate opacity-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Brand Definition
              </h3>
              <p className="text-lg text-gray-700">A company that drives change in financial markets through technological innovation.</p>
            </div>
            
            <div className="relative">
              <Separator className="bg-gray-200 h-0.5 my-10" />
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 border border-gray-200 rounded-full">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 backdrop-blur-sm scroll-animate opacity-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Key Brand Statement
              </h3>
              <p className="text-2xl font-bold italic text-gray-800 text-center">
                Without Love, We are nothing.
              </p>
            </div>
            
            <div className="relative">
              <Separator className="bg-gray-200 h-0.5 my-10" />
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 border border-gray-200 rounded-full">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center mb-8 scroll-animate opacity-0">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Core Values</h3>
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

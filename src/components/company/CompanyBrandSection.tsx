
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Heart, LightbulbIcon } from "lucide-react";
import CompanyValueCards from "./CompanyValueCards";

const CompanyBrandSection: React.FC = () => {
  return (
    <div className="w-full mb-16 opacity-0 scroll-animate">
      <div className="relative rounded-xl bg-gradient-to-b from-[#111111] to-[#0e0e0e] p-0.5 border border-white/5 shadow-lg">
        <div className="relative z-10 p-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-white">
            <Heart className="mr-3 h-6 w-6 text-red-500" />
            Our Values
          </h2>
          
          <div className="space-y-12 mt-6">
            <div className="bg-[#111111] p-8 rounded-lg border border-white/5 shadow-lg hover:shadow-red-900/10 transition-all duration-300 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <LightbulbIcon className="h-5 w-5 mr-3 text-red-400" />
                Brand Definition
              </h3>
              <p className="text-lg text-gray-300">A company that drives change in financial markets through technological innovation.</p>
            </div>
            
            <div className="relative">
              <Separator className="bg-gradient-to-r from-transparent via-red-700/20 to-transparent h-0.5 my-10" />
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] px-4 border border-red-700/20 rounded-full">
                <div className="w-2 h-2 bg-red-600/50 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-lg border border-white/5 shadow-lg hover:shadow-red-900/10 transition-all duration-300 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <LightbulbIcon className="h-5 w-5 mr-3 text-red-400" />
                Key Brand Statement
              </h3>
              <p className="text-2xl font-bold italic text-white text-center">
                Without Love, We are nothing.
              </p>
            </div>
            
            <div className="relative">
              <Separator className="bg-gradient-to-r from-transparent via-red-700/20 to-transparent h-0.5 my-10" />
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] px-4 border border-red-700/20 rounded-full">
                <div className="w-2 h-2 bg-red-600/50 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Core Values</h3>
            </div>
            
            <CompanyValueCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBrandSection;

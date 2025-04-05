
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Heart, LightbulbIcon } from "lucide-react";

const CompanyBrandSection: React.FC = () => {
  return (
    <div className="w-full mb-16 opacity-0 scroll-animate">
      <div className="relative rounded-xl bg-gradient-to-br from-[#0f0f2f] to-[#0a0a1e] p-0.5">
        <div className="relative z-10 p-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center text-white">
            <Heart className="mr-3 h-6 w-6 text-red-500" />
            Our Values
          </h2>
          
          <div className="space-y-12 mt-6">
            <div className="bg-[#0f0f2f]/70 p-8 rounded-lg border border-red-700/30 shadow-lg hover:shadow-red-900/10 transition-all duration-300 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <LightbulbIcon className="h-5 w-5 mr-3 text-red-400" />
                Brand Definition
              </h3>
              <p className="text-lg text-gray-200">A company that drives change in financial markets through technological innovation.</p>
            </div>
            
            <Separator className="bg-red-700/20 h-0.5 my-10" />
            
            <div className="bg-[#0f0f2f]/70 p-8 rounded-lg border border-red-700/30 shadow-lg hover:shadow-red-900/10 transition-all duration-300 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <LightbulbIcon className="h-5 w-5 mr-3 text-red-400" />
                Key Brand Statement
              </h3>
              <p className="text-xl font-bold italic text-white text-center">
                Without Love, We are nothing.
              </p>
            </div>
            
            <Separator className="bg-red-700/20 h-0.5 my-10" />
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Core Values</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyBrandSection;

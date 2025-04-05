
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Shield, Code } from "lucide-react";

const CompanyValueCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 opacity-0 scroll-animate">
      <Card className="bg-[#121230] border-blue-900/50 text-white hover:border-blue-800/70 transition-all duration-300 shadow-lg overflow-hidden">
        <CardHeader className="bg-[#161645] border-b border-blue-900/30">
          <CardTitle className="text-xl text-white flex items-center">
            <Lightbulb className="h-5 w-5 mr-3 text-blue-400" />
            <span className="text-blue-400 font-bold">Innovative Perspective</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-300">
            DF717 pioneers new paths with fearless innovation. Through unparalleled creativity, we lead change and propose solutions that can transform the world.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-[#121230] border-green-900/50 text-white hover:border-green-800/70 transition-all duration-300 shadow-lg overflow-hidden">
        <CardHeader className="bg-[#163028] border-b border-green-900/30">
          <CardTitle className="text-xl text-white flex items-center">
            <Code className="h-5 w-5 mr-3 text-green-400" />
            <span className="text-green-400 font-bold">Outstanding Technology</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-300">
            We develop cutting-edge technologies through continuous research and data refinement. Our goal is to design and deliver a better life through technology.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-[#121230] border-yellow-900/50 text-white hover:border-yellow-800/70 transition-all duration-300 shadow-lg overflow-hidden">
        <CardHeader className="bg-[#2a2a10] border-b border-yellow-900/30">
          <CardTitle className="text-xl text-white flex items-center">
            <Shield className="h-5 w-5 mr-3 text-yellow-400" />
            <span className="text-yellow-400 font-bold">Trustworthy Attitude</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-300">
            We provide consistent, dependable services built on trust. DF717 stands as a reliable partner for those navigating financial innovation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyValueCards;

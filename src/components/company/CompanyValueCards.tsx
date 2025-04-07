
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Shield, Code } from "lucide-react";

const CompanyValueCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
      <Card className="group relative overflow-hidden rounded-xl bg-[#1A1A1A] border-[#333333] text-white shadow-lg hover:shadow-white/5 transition-all duration-500 hover:translate-y-[-5px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#222222]/50 to-transparent opacity-70"></div>
        <CardHeader className="bg-[#1A1A1A] border-b border-[#333333] relative z-10 flex flex-col items-center text-center">
          <Lightbulb className="h-10 w-10 mb-3 text-white" />
          <CardTitle className="text-xl text-white">
            <span className="text-white font-bold">Innovative Perspective</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10 text-center">
          <p className="text-gray-300">
            DF717 pioneers new paths with fearless innovation. Through unparalleled creativity, we lead change and propose solutions that can transform the world.
          </p>
        </CardContent>
      </Card>
      
      <Card className="group relative overflow-hidden rounded-xl bg-[#222222] border-[#333333] text-white shadow-lg hover:shadow-white/5 transition-all duration-500 hover:translate-y-[-5px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A]/50 to-transparent opacity-70"></div>
        <CardHeader className="bg-[#222222] border-b border-[#333333] relative z-10 flex flex-col items-center text-center">
          <Code className="h-10 w-10 mb-3 text-white" />
          <CardTitle className="text-xl text-white">
            <span className="text-white font-bold">Outstanding Technology</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10 text-center">
          <p className="text-gray-300">
            We develop cutting-edge technologies through continuous research and data refinement. Our goal is to design and deliver a better life through technology.
          </p>
        </CardContent>
      </Card>
      
      <Card className="group relative overflow-hidden rounded-xl bg-[#2A2A2A] border-[#333333] text-white shadow-lg hover:shadow-white/5 transition-all duration-500 hover:translate-y-[-5px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#333333]/50 to-transparent opacity-70"></div>
        <CardHeader className="bg-[#2A2A2A] border-b border-[#333333] relative z-10 flex flex-col items-center text-center">
          <Shield className="h-10 w-10 mb-3 text-white" />
          <CardTitle className="text-xl text-white">
            <span className="text-white font-bold">Trustworthy Attitude</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10 text-center">
          <p className="text-gray-300">
            We provide consistent, dependable services built on trust. DF717 stands as a reliable partner for those navigating financial innovation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyValueCards;

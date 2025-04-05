
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Shield, Code } from "lucide-react";

const CompanyValueCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 opacity-0 scroll-animate">
      <Card className="group relative overflow-hidden rounded-xl bg-[#111111] border-blue-600/20 text-white shadow-lg hover:shadow-blue-900/20 transition-all duration-500 hover:translate-y-[-5px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-70"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent blur-sm group-hover:opacity-100 opacity-0 transition duration-500"></div>
        <CardHeader className="bg-[#111111] border-b border-blue-600/10 relative z-10 flex flex-col items-center text-center">
          <Lightbulb className="h-10 w-10 mb-3 text-blue-400" />
          <CardTitle className="text-xl text-white">
            <span className="text-blue-400 font-bold">Innovative Perspective</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10 text-center">
          <p className="text-gray-300">
            DF717 pioneers new paths with fearless innovation. Through unparalleled creativity, we lead change and propose solutions that can transform the world.
          </p>
        </CardContent>
      </Card>
      
      <Card className="group relative overflow-hidden rounded-xl bg-[#111111] border-green-600/20 text-white shadow-lg hover:shadow-green-900/20 transition-all duration-500 hover:translate-y-[-5px]">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-70"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-600/10 to-transparent blur-sm group-hover:opacity-100 opacity-0 transition duration-500"></div>
        <CardHeader className="bg-[#111111] border-b border-green-600/10 relative z-10 flex flex-col items-center text-center">
          <Code className="h-10 w-10 mb-3 text-green-400" />
          <CardTitle className="text-xl text-white">
            <span className="text-green-400 font-bold">Outstanding Technology</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10 text-center">
          <p className="text-gray-300">
            We develop cutting-edge technologies through continuous research and data refinement. Our goal is to design and deliver a better life through technology.
          </p>
        </CardContent>
      </Card>
      
      <Card className="group relative overflow-hidden rounded-xl bg-[#111111] border-yellow-600/20 text-white shadow-lg hover:shadow-yellow-900/20 transition-all duration-500 hover:translate-y-[-5px]">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-transparent opacity-70"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-yellow-600/10 to-transparent blur-sm group-hover:opacity-100 opacity-0 transition duration-500"></div>
        <CardHeader className="bg-[#111111] border-b border-yellow-600/10 relative z-10 flex flex-col items-center text-center">
          <Shield className="h-10 w-10 mb-3 text-yellow-400" />
          <CardTitle className="text-xl text-white">
            <span className="text-yellow-400 font-bold">Trustworthy Attitude</span>
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

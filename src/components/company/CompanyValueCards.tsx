
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Shield, Code } from "lucide-react";

const CompanyValueCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 opacity-0 scroll-animate">
      <Card className="relative group overflow-hidden rounded-xl bg-[#080816] border-blue-600/30 text-white shadow-lg hover:shadow-blue-900/20 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-70"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent blur-sm group-hover:opacity-100 opacity-0 transition duration-500"></div>
        <CardHeader className="bg-[#0a0a2e] border-b border-blue-600/20 relative z-10">
          <CardTitle className="text-xl text-white flex items-center">
            <Lightbulb className="h-5 w-5 mr-3 text-blue-400" />
            <span className="text-blue-400 font-bold">Innovative Perspective</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10">
          <p className="text-gray-300">
            DF717 pioneers new paths with fearless innovation. Through unparalleled creativity, we lead change and propose solutions that can transform the world.
          </p>
        </CardContent>
      </Card>
      
      <Card className="relative group overflow-hidden rounded-xl bg-[#080816] border-green-600/30 text-white shadow-lg hover:shadow-green-900/20 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent opacity-70"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-green-600/20 to-transparent blur-sm group-hover:opacity-100 opacity-0 transition duration-500"></div>
        <CardHeader className="bg-[#0a1a14] border-b border-green-600/20 relative z-10">
          <CardTitle className="text-xl text-white flex items-center">
            <Code className="h-5 w-5 mr-3 text-green-400" />
            <span className="text-green-400 font-bold">Outstanding Technology</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10">
          <p className="text-gray-300">
            We develop cutting-edge technologies through continuous research and data refinement. Our goal is to design and deliver a better life through technology.
          </p>
        </CardContent>
      </Card>
      
      <Card className="relative group overflow-hidden rounded-xl bg-[#080816] border-yellow-600/30 text-white shadow-lg hover:shadow-yellow-900/20 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 to-transparent opacity-70"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent blur-sm group-hover:opacity-100 opacity-0 transition duration-500"></div>
        <CardHeader className="bg-[#14140a] border-b border-yellow-600/20 relative z-10">
          <CardTitle className="text-xl text-white flex items-center">
            <Shield className="h-5 w-5 mr-3 text-yellow-400" />
            <span className="text-yellow-400 font-bold">Trustworthy Attitude</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10">
          <p className="text-gray-300">
            We provide consistent, dependable services built on trust. DF717 stands as a reliable partner for those navigating financial innovation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyValueCards;

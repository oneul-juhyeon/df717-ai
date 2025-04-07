
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanyValueCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
      <Card className="group relative overflow-hidden rounded-xl bg-white border-gray-200 text-gray-800 shadow-sm hover:shadow-md transition-all duration-500 hover:translate-y-[-5px]">
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-gray-200/10 to-transparent blur-sm group-hover:opacity-100 opacity-0 transition duration-500"></div>
        <CardHeader className="bg-white border-b border-gray-100 relative z-10 flex flex-col items-center text-center">
          <CardTitle className="text-xl text-gray-800">
            <span className="font-bold">Innovative Perspective</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10 text-center">
          <p className="text-gray-700">
            DF717 pioneers new paths with fearless innovation. Through unparalleled creativity, we lead change and propose solutions that can transform the world.
          </p>
        </CardContent>
      </Card>
      
      <Card className="group relative overflow-hidden rounded-xl bg-white border-gray-200 text-gray-800 shadow-sm hover:shadow-md transition-all duration-500 hover:translate-y-[-5px]">
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-gray-200/10 to-transparent blur-sm group-hover:opacity-100 opacity-0 transition duration-500"></div>
        <CardHeader className="bg-white border-b border-gray-100 relative z-10 flex flex-col items-center text-center">
          <CardTitle className="text-xl text-gray-800">
            <span className="font-bold">Outstanding Technology</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10 text-center">
          <p className="text-gray-700">
            We develop cutting-edge technologies through continuous research and data refinement. Our goal is to design and deliver a better life through technology.
          </p>
        </CardContent>
      </Card>
      
      <Card className="group relative overflow-hidden rounded-xl bg-white border-gray-200 text-gray-800 shadow-sm hover:shadow-md transition-all duration-500 hover:translate-y-[-5px]">
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-gray-200/10 to-transparent blur-sm group-hover:opacity-100 opacity-0 transition duration-500"></div>
        <CardHeader className="bg-white border-b border-gray-100 relative z-10 flex flex-col items-center text-center">
          <CardTitle className="text-xl text-gray-800">
            <span className="font-bold">Trustworthy Attitude</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 relative z-10 text-center">
          <p className="text-gray-700">
            We provide consistent, dependable services built on trust. DF717 stands as a reliable partner for those navigating financial innovation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyValueCards;

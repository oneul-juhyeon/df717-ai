
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const ValueSection: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
        <Heart className="mr-3 h-6 w-6 text-red-500" />
        Our Values
      </h2>
      
      <div className="mb-10">
        <p className="text-lg text-white">
          DF717 designs a better life through technology.<br />
          With sophisticated technologies and reliable data, we lead innovation in the future financial markets.
        </p>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 text-white">Brand Definition</h3>
        <p className="text-lg text-white">A company that drives change in financial markets through technological innovation.</p>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4 text-white">Key Brand Statement</h3>
        <p className="text-xl font-bold italic text-white">Without Love, We are nothing.</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-8 text-white">Core Values</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              <span className="text-blue-400 font-bold">Innovative Perspective</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">DF717 pioneers new paths with fearless innovation. Through unparalleled creativity, we lead change and propose solutions that can transform the world.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              <span className="text-green-400 font-bold">Outstanding Technology</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">We develop cutting-edge technologies through continuous research and data refinement. Our goal is to design and deliver a better life through technology.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              <span className="text-yellow-400 font-bold">Trustworthy Attitude</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">We provide consistent, dependable services built on trust. DF717 stands as a reliable partner for those navigating financial innovation.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ValueSection;

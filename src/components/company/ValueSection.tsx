
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import CompanyValueCards from "./CompanyValueCards";

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
      
      <div className="mb-0">
        <h3 className="text-2xl font-bold mb-0 text-white">Core Values</h3>
      </div>
      
      <CompanyValueCards />
    </div>
  );
};

export default ValueSection;

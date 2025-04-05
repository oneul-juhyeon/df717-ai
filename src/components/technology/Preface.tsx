
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Server, Cpu, Database, Globe } from "lucide-react";

const PrefaceComponent: React.FC = () => {
  return <div className="prose prose-invert max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white">DF717</h2>
      <p className="text-xl text-gray-300 mb-8">DF717 is a robot designed to provide simplified AI investment services.</p>
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-white">content-DF717</h3>
        <h4 className="text-xl font-semibold mb-6 text-blue-400">DF717 = Destiny Finance 717</h4>
        <p className="text-gray-300">All investment uncertainty disturbs our inner peace and undermines true financial shalom. DF717 is a robot that helps investors manage uncertainty with precision and gain peace of mind.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
              <Server className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">DF717-Account</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Each customer and account can operate a unique portfolio. The system is stable enough to manage tens of thousands of accounts simultaneously.</p>
            <div className="mt-2 text-sm text-blue-400">spec01</div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white">DF717-Container</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">This is the platform where investment logic operates and necessary data is processed. It enables flexible AI-powered investment logic execution.</p>
            <div className="mt-2 text-sm text-indigo-400">spec02</div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center">
              <Database className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">DF717-Database</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Processing and cleansing data is essential for strategy operation and simulation. DF717 ensures fast and accurate data handling.</p>
            <div className="mt-2 text-sm text-purple-400">spec03</div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center">
              <Globe className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white">DF717-Web</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Provides real-time operation monitoring, account status, and transaction updates. Partners can check and give instructions through web or mobile.</p>
            <div className="mt-2 text-sm text-green-400">spec04</div>
          </CardContent>
        </Card>
      </div>
    </div>;
};

export default PrefaceComponent;

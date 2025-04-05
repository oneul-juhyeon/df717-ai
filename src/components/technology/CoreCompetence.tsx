
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Cpu, Database, Globe, Lock, Shield } from "lucide-react";

const CoreCompetence: React.FC = () => {
  return <div className="prose prose-invert max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white">CORE COMPETENCE</h2>
      <p className="text-xl text-gray-300 mb-12">DF717 secures a competitive edge by leveraging its unique AI robot and the proprietary HANNAH engine to lead financial innovation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">spec01</h3>
          </CardHeader>
          <CardContent>
            <h4 className="font-bold mb-4 text-white">Proprietary AI Investment Engine</h4>
            <p className="text-gray-300">We have developed and operate our own AI engine, HANNAH, and the DF717 robot. Their stability has been proven through 10 years of backtesting and live trading.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center">
              <Globe className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white">spec02</h3>
          </CardHeader>
          <CardContent>
            <h4 className="font-bold mb-4 text-white">Top-Tier Research Talent</h4>
            <p className="text-gray-300">We hire only those who pass rigorous HR criteria in terms of integrity, personality, and expertise across various fields.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center">
              <Shield className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">spec03</h3>
          </CardHeader>
          <CardContent>
            <h4 className="font-bold mb-4 text-white">Proprietary Research Methodology</h4>
            <p className="text-gray-300">We eliminate errors and future-reference issues during AI development, ensuring continuous validation of all data and research outcomes.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#2d2d2d] border-gray-700">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center">
              <Lock className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white">spec04</h3>
          </CardHeader>
          <CardContent>
            <h4 className="font-bold mb-4 text-white">Real-Time Monitoring & Security</h4>
            <p className="text-gray-300">Our real-time monitoring system detects and responds to anomalies during operation, preventing order errors and ensuring secure execution.</p>
          </CardContent>
        </Card>
      </div>
    </div>;
};

export default CoreCompetence;

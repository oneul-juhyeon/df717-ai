
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Database, Globe, Lock, Shield } from "lucide-react";

const CoreCompetence: React.FC = () => {
  return <div className="prose prose-invert max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white">CORE COMPETENCE</h2>
      <p className="text-xl text-gray-300 mb-12">DF717 secures a competitive edge by leveraging its unique AI robot and the proprietary HANNAH engine to lead financial innovation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Card className="group relative overflow-hidden rounded-xl bg-[#1A1A1A] border-[#333333] text-white shadow-lg hover:shadow-white/5 transition-all duration-500 hover:translate-y-[-5px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#222222]/50 to-transparent opacity-70"></div>
          <CardHeader className="bg-[#1A1A1A] border-b border-[#333333] relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-3">
              <Cpu className="h-6 w-6 text-blue-400" />
            </div>
            <CardTitle className="text-xl text-white">
              <span className="text-white font-bold">Proprietary AI Investment Engine</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 relative z-10 text-center">
            <p className="text-gray-300">We have developed and operate our own AI engine, HANNAH, and the DF717 robot. Their stability has been proven through 10 years of backtesting and live trading.</p>
          </CardContent>
        </Card>
        
        <Card className="group relative overflow-hidden rounded-xl bg-[#222222] border-[#333333] text-white shadow-lg hover:shadow-white/5 transition-all duration-500 hover:translate-y-[-5px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A]/50 to-transparent opacity-70"></div>
          <CardHeader className="bg-[#222222] border-b border-[#333333] relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center mb-3">
              <Globe className="h-6 w-6 text-indigo-400" />
            </div>
            <CardTitle className="text-xl text-white">
              <span className="text-white font-bold">Top-Tier Research Talent</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 relative z-10 text-center">
            <p className="text-gray-300">We hire only those who pass rigorous HR criteria in terms of integrity, personality, and expertise across various fields.</p>
          </CardContent>
        </Card>
        
        <Card className="group relative overflow-hidden rounded-xl bg-[#1A1A1A] border-[#333333] text-white shadow-lg hover:shadow-white/5 transition-all duration-500 hover:translate-y-[-5px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#222222]/50 to-transparent opacity-70"></div>
          <CardHeader className="bg-[#1A1A1A] border-b border-[#333333] relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mb-3">
              <Shield className="h-6 w-6 text-purple-400" />
            </div>
            <CardTitle className="text-xl text-white">
              <span className="text-white font-bold">Proprietary Research Methodology</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 relative z-10 text-center">
            <p className="text-gray-300">We eliminate errors and future-reference issues during AI development, ensuring continuous validation of all data and research outcomes.</p>
          </CardContent>
        </Card>
        
        <Card className="group relative overflow-hidden rounded-xl bg-[#222222] border-[#333333] text-white shadow-lg hover:shadow-white/5 transition-all duration-500 hover:translate-y-[-5px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A]/50 to-transparent opacity-70"></div>
          <CardHeader className="bg-[#222222] border-b border-[#333333] relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center mb-3">
              <Lock className="h-6 w-6 text-green-400" />
            </div>
            <CardTitle className="text-xl text-white">
              <span className="text-white font-bold">Real-Time Monitoring & Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 relative z-10 text-center">
            <p className="text-gray-300">Our real-time monitoring system detects and responds to anomalies during operation, preventing order errors and ensuring secure execution.</p>
          </CardContent>
        </Card>
      </div>
    </div>;
};

export default CoreCompetence;


import React from "react";
import { Card } from "@/components/ui/card";
import { Cpu, Database, Globe, Lock, Shield } from "lucide-react";

const CoreCompetence: React.FC = () => {
  return <div className="prose prose-invert max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white">CORE COMPETENCE</h2>
      <p className="text-xl text-gray-300 mb-12">DF717 secures a competitive edge by leveraging its unique AI robot and the proprietary HANNAH engine to lead financial innovation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Card 1 */}
        <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-6 hover:shadow-lg hover:shadow-white/5 transition-all duration-500 hover:border-gray-700 hover:-translate-y-1">
          <div className="mb-6 flex items-center">
            <div className="mr-4 rounded-full bg-blue-900/20 p-3">
              <Cpu className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Proprietary AI Investment Engine</h3>
          </div>
          <p className="text-gray-400">We have developed and operate our own AI engine, HANNAH, and the DF717 robot. Their stability has been proven through 10 years of backtesting and live trading.</p>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Card 2 */}
        <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-6 hover:shadow-lg hover:shadow-white/5 transition-all duration-500 hover:border-gray-700 hover:-translate-y-1">
          <div className="mb-6 flex items-center">
            <div className="mr-4 rounded-full bg-indigo-900/20 p-3">
              <Globe className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Top-Tier Research Talent</h3>
          </div>
          <p className="text-gray-400">We hire only those who pass rigorous HR criteria in terms of integrity, personality, and expertise across various fields.</p>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Card 3 */}
        <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-6 hover:shadow-lg hover:shadow-white/5 transition-all duration-500 hover:border-gray-700 hover:-translate-y-1">
          <div className="mb-6 flex items-center">
            <div className="mr-4 rounded-full bg-purple-900/20 p-3">
              <Shield className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Proprietary Research Methodology</h3>
          </div>
          <p className="text-gray-400">We eliminate errors and future-reference issues during AI development, ensuring continuous validation of all data and research outcomes.</p>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Card 4 */}
        <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-6 hover:shadow-lg hover:shadow-white/5 transition-all duration-500 hover:border-gray-700 hover:-translate-y-1">
          <div className="mb-6 flex items-center">
            <div className="mr-4 rounded-full bg-green-900/20 p-3">
              <Lock className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Real-Time Monitoring & Security</h3>
          </div>
          <p className="text-gray-400">Our real-time monitoring system detects and responds to anomalies during operation, preventing order errors and ensuring secure execution.</p>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>;
};

export default CoreCompetence;

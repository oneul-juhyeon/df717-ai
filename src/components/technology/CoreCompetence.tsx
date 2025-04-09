
import React from "react";

const CoreCompetence: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-9 text-white">CORE COMPETENCE</h2>
      <p className="text-xl text-gray-300 mb-18">DF717 secures a competitive edge by leveraging its unique AI robot and the proprietary HANNAH engine to lead financial innovation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mt-18">
        <div className="space-y-4.5">
          <h3 className="text-xl text-white font-bold">Proprietary AI Investment Engine</h3>
          <p className="text-gray-300">We have developed and operate our own AI engine, HANNAH, and the DF717 robot. Their stability has been proven through 10 years of backtesting and live trading.</p>
        </div>
        
        <div className="space-y-4.5">
          <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
          <h3 className="text-xl text-white font-bold">Top-Tier Research Talent</h3>
          <p className="text-gray-300">We hire only those who pass rigorous HR criteria in terms of integrity, personality, and expertise across various fields.</p>
        </div>
        
        <div className="space-y-4.5">
          <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
          <h3 className="text-xl text-white font-bold">Proprietary Research Methodology</h3>
          <p className="text-gray-300">We eliminate errors and future-reference issues during AI development, ensuring continuous validation of all data and research outcomes.</p>
        </div>
        
        <div className="space-y-4.5">
          <div className="w-full h-[1px] bg-[#333333] mb-6"></div>
          <h3 className="text-xl text-white font-bold">Real-Time Monitoring & Security</h3>
          <p className="text-gray-300">Our real-time monitoring system detects and responds to anomalies during operation, preventing order errors and ensuring secure execution.</p>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetence;

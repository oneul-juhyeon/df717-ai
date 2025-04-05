
import React, { useState } from "react";
import CoreCompetence from "./CoreCompetence";
import PrefaceComponent from "./Preface";
import IsaacComponent from "./Isaac";

type Tab = {
  id: string;
  title: string;
  component: React.ReactNode;
};

const ModernTechnologyTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("core");

  // Define tab sections
  const tabSections: Tab[] = [
    { id: "core", title: "CORE COMPETENCE", component: <CoreCompetence /> },
    { id: "df717", title: "DF717", component: <PrefaceComponent /> },
    { id: "hannah", title: "HANNAH", component: <IsaacComponent /> }
  ];

  // Handle tab clicks with direct content switching
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full">
      {/* Sticky tabs navigation */}
      <div 
        className="sticky top-0 z-20 w-full bg-[#0e0e0e]/80 backdrop-blur-md py-4 border-b border-white/5 mb-12"
      >
        <div className="flex justify-center space-x-2 md:space-x-8 max-w-4xl mx-auto">
          {tabSections.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative px-2 md:px-4 py-2 text-sm md:text-lg font-medium transition-all duration-300 ${
                activeTab === tab.id 
                ? "text-red-500 font-bold" 
                : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.title}
              
              {/* Red underline for active tab */}
              {activeTab === tab.id && (
                <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-red-500/30 via-red-500 to-red-500/30">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="mt-8">
        <div className="bg-[#111111] border border-white/5 rounded-xl p-8 shadow-lg">
          {tabSections.map((tab) => (
            <div 
              key={tab.id}
              className={activeTab === tab.id ? "block" : "hidden"}
            >
              {tab.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernTechnologyTabs;


import React, { useState } from "react";
import CoreCompetence from "./CoreCompetence";
import Df717Component from "./Df717";
import HannahComponent from "./Hannah";

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
    { id: "df717", title: "DF717", component: <Df717Component /> },
    { id: "hannah", title: "HANNAH", component: <HannahComponent /> }
  ];

  // Handle tab clicks with direct content switching
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full">
      {/* Sticky tabs navigation with SpaceX style - removed divider lines */}
      <div className="sticky top-0 z-20 w-full mb-12 bg-black/50 backdrop-blur-sm py-5">
        <div className="flex justify-center space-x-2 md:space-x-8 max-w-4xl mx-auto">
          {tabSections.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative px-2 md:px-4 py-2 text-sm md:text-lg font-medium transition-all duration-300 ${
                activeTab === tab.id 
                ? "text-white font-bold" 
                : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.title}
              
              {/* White underline and dot for active tab - kept for visual indication */}
              {activeTab === tab.id && (
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white">
                  <div className="absolute -top-[2px] left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="mt-8">
        <div className="max-w-4xl mx-auto">
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

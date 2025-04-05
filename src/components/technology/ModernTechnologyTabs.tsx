
import React, { useState, useRef, useEffect } from "react";
import CoreCompetence from "./CoreCompetence";
import PrefaceComponent from "./Preface";
import IsaacComponent from "./Isaac";

type TabSection = {
  id: string;
  title: string;
  component: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
};

const ModernTechnologyTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("core");
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Create refs for each section
  const coreRef = useRef<HTMLDivElement>(null);
  const df717Ref = useRef<HTMLDivElement>(null);
  const hannahRef = useRef<HTMLDivElement>(null);

  // Define tab sections
  const tabSections: TabSection[] = [
    { id: "core", title: "CORE COMPETENCE", component: <CoreCompetence />, ref: coreRef },
    { id: "df717", title: "DF717", component: <PrefaceComponent />, ref: df717Ref },
    { id: "hannah", title: "HANNAH", component: <IsaacComponent />, ref: hannahRef }
  ];

  // Handle tab clicks with smooth scroll
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    
    const targetSection = tabSections.find(section => section.id === tabId);
    if (targetSection && targetSection.ref.current) {
      const yOffset = -100; // Offset to account for sticky header
      const y = targetSection.ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Listen for scroll to update active tab
  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently most visible
      let mostVisibleSection = tabSections[0].id;
      let maxVisibility = 0;

      tabSections.forEach(section => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const visibility = Math.min(1, Math.max(0, 
            (rect.bottom >= 0 && rect.top <= window.innerHeight) ? 
            (Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)) / rect.height : 0
          ));
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = section.id;
          }
        }
      });

      setActiveTab(mostVisibleSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Sticky tabs navigation */}
      <div 
        ref={tabsContainerRef} 
        className="sticky top-0 z-20 w-full bg-[#0e0e0e]/80 backdrop-blur-md py-4 border-b border-white/5 mb-12"
      >
        <div className="flex justify-center space-x-8 max-w-4xl mx-auto">
          {tabSections.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 ${
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

      {/* Content sections */}
      <div className="space-y-32">
        {tabSections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={section.ref}
            className="scroll-animate opacity-0"
          >
            <div className="bg-[#111111] border border-white/5 rounded-xl p-8 shadow-lg">
              {section.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernTechnologyTabs;

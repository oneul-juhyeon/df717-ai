import React from "react";
import { HeaderProps } from "@/components/navigation/types";
import BaseHeader from "@/components/navigation/BaseHeader";
import { getNavigationItems } from "@/components/navigation/navigationItems";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

const SolutionHeaderWithLang: React.FC<HeaderProps> = ({ scrollToTop }) => {
  const navigationItems = getNavigationItems();
  
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex-grow">
        <BaseHeader 
          scrollToTop={scrollToTop} 
          navigationItems={navigationItems} 
          logoAs="div"
          className="flex justify-between items-center pt-14 max-sm:pt-5 w-full gap-6"
        />
      </div>
      <div className="ml-4">
        <LanguageSwitcher
          currentLang="en"
          englishUrl="/solution"
          koreanUrl="/ko/solution"
        />
      </div>
    </div>
  );
};

export default SolutionHeaderWithLang;

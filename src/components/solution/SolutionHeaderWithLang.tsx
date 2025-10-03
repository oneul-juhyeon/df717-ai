import React from "react";
import { HeaderProps } from "@/components/navigation/types";
import BaseHeader from "@/components/navigation/BaseHeader";
import { getNavigationItems } from "@/components/navigation/navigationItems";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

const SolutionHeaderWithLang: React.FC<HeaderProps> = ({ scrollToTop }) => {
  const navigationItems = getNavigationItems();
  
  return (
    <header className="flex justify-between items-center pt-14 max-sm:pt-5 w-full gap-6">
      <div className="flex-none">
        <BaseHeader 
          scrollToTop={scrollToTop} 
          navigationItems={navigationItems} 
          logoAs="div"
          className="flex justify-between items-center w-full gap-6"
        />
      </div>
      <div className="flex-none">
        <LanguageSwitcher
          currentLang="en"
          englishUrl="/solution"
          koreanUrl="/ko/solution"
        />
      </div>
    </header>
  );
};

export default SolutionHeaderWithLang;

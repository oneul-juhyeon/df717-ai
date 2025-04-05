
import React from "react";
import BaseHeader from "@/components/navigation/BaseHeader";
import { getNavigationItems } from "@/components/navigation/navigationItems";
import { HeaderProps } from "@/components/navigation/types";

const OilHeader: React.FC<HeaderProps> = ({ scrollToTop }) => {
  const navigationItems = getNavigationItems();
  
  return <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} />;
};

export default OilHeader;

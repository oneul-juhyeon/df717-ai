
import React from "react";
import { HeaderProps } from "@/components/navigation/types";
import BaseHeader from "@/components/navigation/BaseHeader";
import { getNavigationItems } from "@/components/navigation/navigationItems";

interface TechnologyHeaderProps extends HeaderProps {}

const TechnologyHeader: React.FC<TechnologyHeaderProps> = ({ scrollToTop }) => {
  const navigationItems = getNavigationItems();
  
  return <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} logoAs="div" />;
};

export default TechnologyHeader;

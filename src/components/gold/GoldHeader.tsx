
import React from "react";
import { HeaderProps } from "@/components/navigation/types";
import BaseHeader from "@/components/navigation/BaseHeader";
import { getNavigationItems } from "@/components/navigation/navigationItems";

interface GoldHeaderProps extends HeaderProps {}

const GoldHeader: React.FC<GoldHeaderProps> = ({ scrollToTop }) => {
  const navigationItems = getNavigationItems();
  
  return <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} />;
};

export default GoldHeader;

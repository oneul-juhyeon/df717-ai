
import React from "react";
import BaseHeader from "@/components/navigation/BaseHeader";
import { HeaderProps } from "@/components/navigation/types";
import { getNavigationItems } from "@/components/navigation/navigationItems";

interface HomeHeaderProps extends HeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = ({ scrollToTop }) => {
  const navigationItems = getNavigationItems();
  
  return <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} />;
};

export default HomeHeader;

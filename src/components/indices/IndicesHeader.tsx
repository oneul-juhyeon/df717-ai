
import React from "react";
import { HeaderProps } from "@/components/navigation/types";
import BaseHeader from "@/components/navigation/BaseHeader";
import { getNavigationItems } from "@/components/navigation/navigationItems";

interface IndicesHeaderProps extends HeaderProps {}

const IndicesHeader: React.FC<IndicesHeaderProps> = ({ scrollToTop }) => {
  const navigationItems = getNavigationItems();
  
  return <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} />;
};

export default IndicesHeader;

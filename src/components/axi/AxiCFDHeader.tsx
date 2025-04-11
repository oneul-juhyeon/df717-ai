
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BaseHeader from "@/components/navigation/BaseHeader";
import { getNavigationItems } from "@/components/navigation/navigationItems";
import { HeaderProps } from "@/components/navigation/types";

const AxiCFDHeader: React.FC<HeaderProps> = ({ scrollToTop }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navigationItems = getNavigationItems();

  useEffect(() => {
    // Set active section based on current URL
    const path = location.pathname;
    if (path.includes('edge')) {
      setActiveSection('edge-section');
    } else if (path.includes('trust')) {
      setActiveSection('trusted-partner-section');
    } else if (path.includes('pricing')) {
      setActiveSection('features-section');
    } else if (path.includes('award')) {
      setActiveSection('award-winning-section');
    }
  }, [location]);

  return <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} />;
};

export default AxiCFDHeader;

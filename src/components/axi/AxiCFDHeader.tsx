
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BaseHeader from "@/components/navigation/BaseHeader";
import { getNavigationItems } from "@/components/navigation/navigationItems";
import { HeaderProps } from "@/components/navigation/types";

// CSS for the mobile navigation underline animation
const mobileNavStyles = `
  .mobile-nav-item {
    position: relative;
  }
  
  .mobile-nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.5px;
    background-color: white;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  .mobile-nav-item:hover::after,
  .mobile-nav-item:active::after,
  .mobile-nav-item.active::after {
    transform: scaleX(1);
  }

  /* Ensure active items always show the underline */
  .mobile-nav-item.active::after {
    transform: scaleX(1);
  }

  /* Disappear animation */
  .mobile-nav-item:not(:hover):not(.active)::after {
    transform-origin: right;
  }
`;

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

  return (
    <>
      <style>{mobileNavStyles}</style>
      <BaseHeader scrollToTop={scrollToTop} navigationItems={navigationItems} />
    </>
  );
};

export default AxiCFDHeader;

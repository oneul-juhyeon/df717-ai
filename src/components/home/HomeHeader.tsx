
import React from "react";
import Logo from "@/components/landing/Logo";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavDropdown } from "@/components/ui/dropdown-nav";
import BaseHeader from "@/components/navigation/BaseHeader";
import { HeaderProps, NavigationItem } from "@/components/navigation/types";

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

interface HomeHeaderProps extends HeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = ({ scrollToTop }) => {
  const location = useLocation();

  const axiCfdSubmenu = [
    { name: "AXI CFD", path: "/axi-cfd" },
    { name: "Edge", path: "/axi-edge" },
    { name: "Trade With Trust", path: "/axi-trust" },
    { name: "Best Pricing & Execution", path: "/axi-pricing" },
    { name: "Award-Winning Service", path: "/axi-award" },
  ];

  const financialProductsSubmenu = [
    { name: "Forex", path: "/financial-products/forex" },
    { name: "Shares", path: "/financial-products/shares" },
    { name: "Indices", path: "/financial-products/indices" },
    { name: "Commodities", path: "/financial-products/commodities" },
    { name: "Gold", path: "/financial-products/gold" },
    { name: "Oil", path: "/financial-products/oil" },
    { name: "Crypto", path: "/financial-products/crypto" },
  ];

  const df717Submenu = [
    { name: "What is DF717?", path: "/df717" },
    { name: "Reliability & Stability", path: "/df717/stability" },
    { name: "Financial Modeling", path: "/df717/modeling" },
    { name: "AI Strategy", path: "/df717/ai-strategy" },
    { name: "Execution Logic", path: "/df717/execution" },
    { name: "Examples", path: "/df717/examples" },
  ];

  const navigationItems: NavigationItem[] = [
    { name: "Home", path: "/home-intro", hasSubmenu: false },
    { name: "Company", path: "/company", hasSubmenu: false },
    { name: "Technology", path: "/technology", hasSubmenu: false },
    { 
      name: "Financial Products", 
      path: "/financial-products",
      hasSubmenu: true,
      submenu: financialProductsSubmenu,
    },
    { 
      name: "DF717", 
      path: "/df717",
      hasSubmenu: true,
      submenu: df717Submenu,
    },
    { 
      name: "AXI CFD", 
      path: "/axi-cfd",
      hasSubmenu: true,
      submenu: axiCfdSubmenu,
    },
    { name: "Contact", path: "/contact", hasSubmenu: false },
  ];

  return (
    <>
      <style>{mobileNavStyles}</style>
      <BaseHeader 
        navigationItems={navigationItems} 
        scrollToTop={scrollToTop} 
      />
    </>
  );
};

export default HomeHeader;

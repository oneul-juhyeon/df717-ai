
import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/landing/Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { HeaderProps, NavigationItem } from "./types";

interface BaseHeaderProps extends HeaderProps {
  navigationItems: NavigationItem[];
  className?: string;
}

const BaseHeader: React.FC<BaseHeaderProps> = ({ 
  scrollToTop, 
  navigationItems,
  className = "flex justify-between items-center pt-14 max-sm:pt-5 w-full gap-6" 
}) => {
  const isMobile = useIsMobile();

  return (
    <header className={className}>
      <Link to="/">
        <Logo />
      </Link>
      
      {isMobile ? (
        <MobileMenu navigationItems={navigationItems} scrollToTop={scrollToTop} />
      ) : (
        <DesktopMenu navigationItems={navigationItems} scrollToTop={scrollToTop} />
      )}
    </header>
  );
};

export default BaseHeader;

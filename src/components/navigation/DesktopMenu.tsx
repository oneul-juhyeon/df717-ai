
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavDropdown } from "@/components/ui/dropdown-nav";
import { NavigationItem } from "./types";
import { isMenuActive } from "./navigationItems";

interface DesktopMenuProps {
  navigationItems: NavigationItem[];
  scrollToTop: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navigationItems, scrollToTop }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-1">
      {navigationItems.map((item) => {
        // Special case for Financial Products - direct link instead of dropdown
        if (item.name === "Financial Products") {
          return (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-white px-4 py-2 transition whitespace-nowrap relative 
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white
                ${location.pathname === item.path || location.pathname.startsWith('/financial-products/') 
                  ? 'after:scale-x-100' 
                  : 'after:scale-x-0 hover:after:scale-x-100 after:origin-left hover:after:origin-left'} 
                after:transition-transform after:duration-300
              `}
              onClick={scrollToTop}
            >
              {item.name}
            </Link>
          );
        }
        
        // Original dropdown functionality for other menu items
        return item.hasSubmenu && item.submenu ? (
          <NavDropdown 
            key={item.name}
            name={item.name}
            path={item.path}
            items={item.submenu.map(subItem => ({
              ...subItem,
              scrollToTop: () => {
                if ('id' in subItem && subItem.id) {
                  setActiveSection(subItem.id);
                }
                scrollToTop();
              }
            }))}
            isActive={isMenuActive(item, location.pathname)}
            textColor="text-white"
            hoverColor=""
            activeColor=""
          />
        ) : item.external ? (
          <a 
            key={item.name}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white px-4 py-2 transition whitespace-nowrap relative 
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white
              after:scale-x-0 hover:after:scale-x-100 after:origin-left hover:after:origin-left
              after:transition-transform after:duration-300
            `}
          >
            {item.name}
          </a>
        ) : (
          <Link 
            key={item.name}
            to={item.path}
            className={`text-white px-4 py-2 transition whitespace-nowrap relative 
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white
              ${location.pathname === item.path 
                ? 'after:scale-x-100' 
                : 'after:scale-x-0 hover:after:scale-x-100 after:origin-left hover:after:origin-left'} 
              after:transition-transform after:duration-300
            `}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default DesktopMenu;

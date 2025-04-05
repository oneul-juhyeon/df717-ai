
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
      {navigationItems.map((item) => (
        item.hasSubmenu && item.submenu ? (
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
            hoverColor="hover:text-red-500"
            activeColor="text-red-500"
          />
        ) : (
          <Link 
            key={item.name}
            to={item.path}
            className={`text-white hover:text-red-500 px-4 py-2 transition whitespace-nowrap ${
              location.pathname === item.path ? 'text-red-500' : ''
            }`}
          >
            {item.name}
          </Link>
        )
      ))}
    </div>
  );
};

export default DesktopMenu;

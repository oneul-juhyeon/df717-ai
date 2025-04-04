
import React, { useState, useEffect } from "react";
import Logo from "@/components/landing/Logo";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

interface ForexHeaderProps {
  scrollToTop: () => void;
}

interface SubmenuItem {
  name: string;
  path: string;
  id?: string;
}

const ForexHeader: React.FC<ForexHeaderProps> = ({ scrollToTop }) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const axiCfdSubmenu: SubmenuItem[] = [
    { name: "CFD", id: "cfd-section", path: "/axi-cfd" },
    { name: "Our Edge", id: "edge-section", path: "/axi-edge" },
    { name: "Trade With Trust", id: "trusted-partner-section", path: "/axi-trust" },
    { name: "Best Pricing & Execution", id: "features-section", path: "/axi-pricing" },
    { name: "Award-Winning Service", id: "award-winning-section", path: "/axi-award" },
  ];

  const financialProductsSubmenu: SubmenuItem[] = [
    { name: "Forex", path: "/financial-products/forex" },
    { name: "Shares", path: "/financial-products/shares" },
    { name: "Indices", path: "/financial-products/indices" },
    { name: "Commodities", path: "/financial-products/commodities" },
    { name: "Gold", path: "/financial-products/gold" },
    { name: "Oil", path: "/financial-products/oil" },
    { name: "Crypto", path: "/financial-products/crypto" },
  ];

  const navigationItems = [
    { name: "Home", path: "/home-intro" },
    { name: "Company", path: "/company" },
    { name: "Technology", path: "/technology" },
    { 
      name: "Financial Products", 
      path: "/financial-products",
      hasSubmenu: true,
      submenu: financialProductsSubmenu,
    },
    { name: "DF Robot", path: "/robot" },
    { 
      name: "AXI CFD", 
      path: "/axi-cfd",
      hasSubmenu: true,
      submenu: axiCfdSubmenu,
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center pt-14 max-sm:pt-5 w-full">
      <Link to="/">
        <Logo />
      </Link>
      
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-black p-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white border-gray-200 text-black">
            <div className="flex flex-col mt-8 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-black hover:text-red-500 py-2 text-lg transition"
                  >
                    {item.name}
                  </Link>
                  
                  {item.hasSubmenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu?.map((subItem) => {
                        const isAxiItem = 'id' in subItem;
                        return (
                          <Link 
                            key={subItem.name} 
                            to={subItem.path}
                            className={`text-gray-700 hover:text-red-500 py-1 text-md transition cursor-pointer ${
                              isAxiItem && activeSection === subItem.id ? 'text-red-500 font-medium' : ''
                            }`}
                            onClick={() => {
                              if (isAxiItem && subItem.id) {
                                setActiveSection(subItem.id);
                              }
                              scrollToTop();
                            }}
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <NavigationMenu className="navigation-menu-container">
          <NavigationMenuList className="gap-2 flex-wrap justify-end">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name} className="relative">
                {item.hasSubmenu ? (
                  <div className="relative">
                    <NavigationMenuTrigger
                      className={`nav-menu-trigger text-black px-4 py-2 transition whitespace-nowrap ${
                        location.pathname.includes(item.path) ? 'text-red-500' : ''
                      }`}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="navigation-dropdown">
                      <ul className="horizontal-dropdown py-2 px-4">
                        {item.submenu?.map((subItem, index) => {
                          const isAxiItem = 'id' in subItem;
                          return (
                            <li key={subItem.name} className="list-none">
                              <Link
                                to={subItem.path}
                                className={`navigation-dropdown-item ${
                                  location.pathname === subItem.path ? 'text-red-500 bg-red-50/10' : ''
                                }`}
                                onClick={() => {
                                  if (isAxiItem && subItem.id) {
                                    setActiveSection(subItem.id);
                                  }
                                  scrollToTop();
                                }}
                              >
                                <ArrowRight className="h-4 w-4 transition-transform duration-200" />
                                {subItem.name}
                              </Link>
                              {index < item.submenu.length - 1 && (
                                <span className="dropdown-divider"></span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className={`text-black hover:text-red-500 px-4 py-2 transition whitespace-nowrap ${
                      location.pathname === item.path ? 'text-red-500' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
};

export default ForexHeader;

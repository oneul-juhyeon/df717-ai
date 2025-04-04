
import React, { useState } from "react";
import Logo from "@/components/landing/Logo";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface CompanyHeaderProps {
  scrollToTop: () => void;
}

const CompanyHeader: React.FC<CompanyHeaderProps> = ({ scrollToTop }) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const axiCfdSubmenu = [
    { name: "CFD", id: "cfd-section", path: "/axi-cfd" },
    { name: "Our Edge", id: "edge-section", path: "/axi-edge" },
    { name: "Trade With Trust", id: "trusted-partner-section", path: "/axi-trust" },
    { name: "Best Pricing & Execution", id: "features-section", path: "/axi-pricing" },
    { name: "Award-Winning Service", id: "award-winning-section", path: "/axi-award" },
  ];

  const navigationItems = [
    { name: "Home", path: "/home-intro" },
    { name: "Company", path: "/company" },
    { name: "Technology", path: "/technology" },
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
    <header className="flex justify-between items-center pt-14 max-sm:pt-5">
      <Link to="/">
        <Logo />
      </Link>
      
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-white p-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#232323] border-gray-700 text-white">
            <div className="flex flex-col mt-8 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-white hover:text-gray-300 py-2 text-lg transition"
                  >
                    {item.name}
                  </Link>
                  
                  {item.hasSubmenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu?.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.path}
                          className="text-gray-300 hover:text-white py-1 text-md transition cursor-pointer"
                          onClick={scrollToTop}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.hasSubmenu ? (
                  <div className="relative">
                    <NavigationMenuTrigger
                      className="text-white hover:text-gray-300 px-4 py-2 transition"
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="navigation-dropdown">
                      <ul className="horizontal-dropdown py-2 px-4">
                        {item.submenu?.map((subItem, index) => (
                          <li key={subItem.name} className="list-none">
                            <Link
                              to={subItem.path}
                              className="navigation-dropdown-item"
                              onClick={scrollToTop}
                            >
                              <ArrowRight className="h-4 w-4 transition-transform duration-200" />
                              {subItem.name}
                            </Link>
                            {index < item.submenu.length - 1 && (
                              <span className="dropdown-divider"></span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`text-white hover:text-gray-300 px-4 py-2 transition ${
                      location.pathname === item.path ? 'font-medium' : ''
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

export default CompanyHeader;

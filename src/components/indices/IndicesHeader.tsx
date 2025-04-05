
import React, { useState } from "react";
import Logo from "@/components/landing/Logo";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent
} from "@/components/ui/navigation-menu";

interface IndicesHeaderProps {
  scrollToTop: () => void;
}

const IndicesHeader: React.FC<IndicesHeaderProps> = ({ scrollToTop }) => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const financialProductsSubmenu = [
    { name: "Forex", path: "/financial-products/forex" },
    { name: "Shares", path: "/financial-products/shares" },
    { name: "Indices", path: "/financial-products/indices" },
    { name: "Commodities", path: "/financial-products/commodities" },
    { name: "Gold", path: "/financial-products/gold" },
    { name: "Oil", path: "/financial-products/oil" },
    { name: "Crypto", path: "/financial-products/crypto" },
  ];

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
    <header className="flex justify-between items-center pt-14 max-sm:pt-5 w-full gap-6">
      <Link to="/">
        <Logo />
      </Link>
      
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white p-2">
              <Menu className="h-6 w-6" />
            </button>
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
                      {item.submenu?.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.path}
                          className="flex text-gray-700 hover:text-red-500 py-1 text-md transition cursor-pointer"
                          onClick={scrollToTop}
                        >
                          <ArrowRight className="h-4 w-4 mr-2 mt-1" />
                          <span>{subItem.name}</span>
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
        <NavigationMenu className="navigation-menu-container">
          <NavigationMenuList className="gap-1 flex-wrap justify-end">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name} className="relative">
                {item.hasSubmenu ? (
                  <div className="relative">
                    <NavigationMenuTrigger
                      className={`text-white hover:text-red-500 px-4 py-2 transition whitespace-nowrap ${
                        location.pathname.includes(item.path) ? 'text-red-500' : ''
                      }`}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute top-full left-0 min-w-[220px] bg-white text-black shadow-lg rounded-md overflow-hidden z-50">
                      <ul className="py-2 px-2">
                        {item.submenu?.map((subItem, index) => (
                          <li key={subItem.name} className="list-none">
                            <Link
                              to={subItem.path}
                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:text-red-500 rounded-md transition-colors"
                              onClick={scrollToTop}
                            >
                              <ArrowRight className="h-4 w-4 text-gray-500" />
                              <span>{subItem.name}</span>
                            </Link>
                            {index < item.submenu.length - 1 && (
                              <div className="mx-4 my-1 border-t border-gray-100"></div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className={`text-white hover:text-red-500 px-4 py-2 transition whitespace-nowrap ${
                      location.pathname === item.path ? 'text-red-500' : ''
                    }`}
                    onClick={scrollToTop}
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

export default IndicesHeader;

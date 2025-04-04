
import React, { useState, useEffect } from "react";
import Logo from "@/components/landing/Logo";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

interface IndicesHeaderProps {
  scrollToTop: () => void;
}

const IndicesHeader: React.FC<IndicesHeaderProps> = ({ scrollToTop }) => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/home-intro" },
    { name: "Company", path: "/company" },
    { name: "Technology", path: "/technology" },
    { name: "Financial Products", path: "/financial-products" },
    { name: "DF Robot", path: "/robot" },
    { name: "AXI CFD", path: "/axi-cfd" },
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
            <button className="text-white p-2">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white border-gray-200 text-black">
            <div className="flex flex-col mt-8 space-y-4">
              {navigationItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-black hover:text-red-500 py-2 text-lg transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <NavigationMenu className="navigation-menu-container">
          <NavigationMenuList className="gap-2 flex-wrap justify-end">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name} className="relative">
                <Link 
                  to={item.path}
                  className={`text-white hover:text-red-500 px-4 py-2 transition whitespace-nowrap ${
                    location.pathname === item.path ? 'text-red-500' : ''
                  }`}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
};

export default IndicesHeader;

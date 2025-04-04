
import React, { useState } from "react";
import Logo from "@/components/landing/Logo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

interface AxiCFDHeaderProps {
  scrollToTop: () => void;
}

const AxiCFDHeader: React.FC<AxiCFDHeaderProps> = ({ scrollToTop }) => {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const axiCfdSubmenu = [
    { name: "Edge", id: "edge-section" },
    { name: "Trade With Trust", id: "trusted-partner-section" },
    { name: "Best Pricing & Execution", id: "features-section" },
    { name: "Award-Winning Service", id: "award-winning-section" },
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
    <header className="flex justify-between items-center pt-14 max-sm:pt-5 w-full">
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
                    onClick={item.name === "AXI CFD" ? (e) => {
                      e.preventDefault();
                      scrollToTop();
                    } : undefined}
                  >
                    {item.name}
                  </Link>
                  
                  {item.hasSubmenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu?.map((subItem) => (
                        <div 
                          key={subItem.name} 
                          className="text-gray-300 hover:text-white py-1 text-md transition cursor-pointer"
                          onClick={() => scrollToSection(subItem.id)}
                        >
                          {subItem.name}
                        </div>
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
          <NavigationMenuList className="gap-2 flex-wrap justify-end">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name} className="relative">
                {item.hasSubmenu ? (
                  <div className="relative">
                    <NavigationMenuTrigger
                      onClick={scrollToTop}
                      className="text-white hover:text-gray-300 px-4 py-2 transition whitespace-nowrap axi-cfd-button"
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="navigation-dropdown absolute left-0 top-full">
                      <div className="flex flex-col space-y-1 p-2">
                        {item.submenu?.map((subItem) => (
                          <div
                            key={subItem.name}
                            className="navigation-dropdown-item"
                            onClick={() => scrollToSection(subItem.id)}
                          >
                            {subItem.name}
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className="text-white hover:text-gray-300 px-4 py-2 transition whitespace-nowrap"
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

export default AxiCFDHeader;

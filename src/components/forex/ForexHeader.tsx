import React, { useState } from "react";
import Logo from "@/components/landing/Logo";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavDropdown } from "@/components/ui/dropdown-nav";

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

  const df717Submenu: SubmenuItem[] = [
    { name: "What is DF717?", path: "/df717" },
    { name: "Reliability & Stability", path: "/df717/stability" },
    { name: "Financial Modeling", path: "/df717/modeling" },
    { name: "AI Strategy", path: "/df717/ai-strategy" },
    { name: "Execution Logic", path: "/df717/execution" },
    { name: "Examples", path: "/df717/examples" },
  ];

  const navigationItems = [
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
        <div className="flex items-center gap-2">
          {navigationItems.map((item) => (
            'hasSubmenu' in item && item.hasSubmenu ? (
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
                isActive={location.pathname.includes(item.path)}
                textColor="text-white"
                hoverColor="hover:text-red-500"
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
      )}
    </header>
  );
};

export default ForexHeader;

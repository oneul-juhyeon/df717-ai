
import React from "react";
import Logo from "@/components/landing/Logo";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavDropdown } from "@/components/ui/dropdown-nav";

interface HomeHeaderProps {
  scrollToTop: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ scrollToTop }) => {
  const isMobile = useIsMobile();
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
    { name: "DF Robot", path: "/robot", hasSubmenu: false },
    { 
      name: "AXI CFD", 
      path: "/axi-cfd",
      hasSubmenu: true,
      submenu: axiCfdSubmenu,
    },
    { name: "Contact", path: "/contact", hasSubmenu: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center pt-14 max-sm:pt-5 w-full gap-6 px-[154px] max-md:px-10 max-sm:px-5">
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
          <SheetContent side="right" className="bg-[#232323] border-gray-700 text-white z-50">
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
                          <span className="flex items-center">
                            <ArrowRight className="h-4 w-4 mr-2" />
                            {subItem.name}
                          </span>
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
        <div className="flex items-center gap-1">
          {navigationItems.map((item) => (
            item.hasSubmenu ? (
              <NavDropdown 
                key={item.name}
                name={item.name}
                path={item.path}
                items={item.submenu.map(subItem => ({
                  ...subItem,
                  scrollToTop
                }))}
                isActive={location.pathname === item.path}
              />
            ) : (
              <Link 
                key={item.name}
                to={item.path}
                className={`text-white hover:text-gray-300 px-4 py-2 transition ${
                  location.pathname === item.path ? 'font-medium' : ''
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

export default HomeHeader;

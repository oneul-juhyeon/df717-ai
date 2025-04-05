
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationItem } from "./types";
import { isMenuActive } from "./navigationItems";

interface MobileMenuProps {
  navigationItems: NavigationItem[];
  scrollToTop: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navigationItems, scrollToTop }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-white p-2">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#232323] border-gray-700 text-white">
        <div className="flex flex-col mt-8 space-y-4">
          {navigationItems.map((item) => (
            <div key={item.name} className="mb-2">
              <Link 
                to={item.path} 
                className={`text-white hover:text-red-400 py-2 text-lg font-medium transition ${
                  isMenuActive(item, location.pathname) ? 'text-red-400' : ''
                }`}
              >
                {item.name}
              </Link>
              
              {item.hasSubmenu && item.submenu && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.submenu.map((subItem) => {
                    // Check if this is an AxiCFD submenu item (which has id property)
                    const hasId = 'id' in subItem && subItem.id;
                    const isActive = location.pathname === subItem.path;
                    
                    return (
                      <Link 
                        key={subItem.name} 
                        to={subItem.path}
                        className={`flex items-center gap-2 text-gray-300 hover:text-red-400 py-1 text-md transition cursor-pointer ${
                          isActive ? 'text-red-400 font-medium' : ''
                        }`}
                        onClick={() => {
                          if (hasId && subItem.id) {
                            setActiveSection(subItem.id);
                          }
                          scrollToTop();
                        }}
                      >
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                        <span>{subItem.name}</span>
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
  );
};

export default MobileMenu;

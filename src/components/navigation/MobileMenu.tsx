
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
      <SheetContent side="right" className="bg-white border-gray-200 text-black">
        <div className="flex flex-col mt-8 space-y-4">
          {navigationItems.map((item) => (
            <div key={item.name}>
              <Link 
                to={item.path} 
                className={`text-black hover:text-red-500 py-2 text-lg transition ${
                  isMenuActive(item, location.pathname) ? 'text-red-500 font-medium' : ''
                }`}
              >
                {item.name}
              </Link>
              
              {item.hasSubmenu && item.submenu && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.submenu.map((subItem) => {
                    // Check if this is an AxiCFD submenu item (which has id property)
                    const hasId = 'id' in subItem && subItem.id;
                    return (
                      <Link 
                        key={subItem.name} 
                        to={subItem.path}
                        className={`text-gray-700 hover:text-red-500 py-1 text-md transition cursor-pointer ${
                          hasId && activeSection === subItem.id ? 'text-red-500 font-medium' : ''
                        }`}
                        onClick={() => {
                          if (hasId && subItem.id) {
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
  );
};

export default MobileMenu;

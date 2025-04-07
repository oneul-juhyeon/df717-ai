
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavigationItem } from "./types";
import { isMenuActive } from "./navigationItems";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MobileMenuProps {
  navigationItems: NavigationItem[];
  scrollToTop: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navigationItems, scrollToTop }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-white p-2">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="bg-[#232323] border-gray-700 text-white h-full overflow-hidden flex flex-col"
      >
        <ScrollArea className="flex-1 px-1 menu-scrollable">
          <div className="flex flex-col py-8 pr-2">
            {navigationItems.map((item) => (
              <div key={item.name} className="mb-2">
                {item.hasSubmenu && item.submenu ? (
                  <Collapsible className="w-full">
                    <div className="flex items-center">
                      <CollapsibleTrigger asChild>
                        <button
                          className="flex items-center justify-between w-full text-white hover:text-red-400 py-2 text-lg font-medium transition"
                        >
                          <span>{item.name}</span>
                          <ChevronRight className="h-5 w-5 transition-transform duration-200 [&[data-state=open]]:rotate-90" />
                        </button>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => {
                        // Check if this is an AxiCFD submenu item (which has id property)
                        const hasId = 'id' in subItem && subItem.id;
                        const isActive = location.pathname === subItem.path;
                        
                        return (
                          <Link 
                            key={subItem.name} 
                            to={subItem.path}
                            className={`flex items-center gap-2 text-gray-300 hover:text-red-400 py-1 text-md transition cursor-pointer whitespace-nowrap ${
                              isActive ? 'text-red-400 font-medium' : ''
                            }`}
                            onClick={() => {
                              if (hasId && subItem.id) {
                                // Handle section scrolling if needed
                              }
                              scrollToTop();
                              setIsOpen(false);
                            }}
                          >
                            <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            <span>{subItem.name}</span>
                          </Link>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`text-white hover:text-red-400 py-2 text-lg font-medium transition ${
                      isMenuActive(item, location.pathname) ? 'text-red-400' : ''
                    }`}
                    onClick={() => {
                      scrollToTop();
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="py-4 flex justify-center text-gray-400 animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

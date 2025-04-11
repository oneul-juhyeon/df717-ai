
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavigationItem } from "./types";
import { isMenuActive } from "./navigationItems";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Add CSS for mobile navigation animation
import "./mobileNavAnimation.css";

interface MobileMenuProps {
  navigationItems: NavigationItem[];
  scrollToTop: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navigationItems, scrollToTop }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Enhanced navigation function that ensures complete navigation
  const handleNavigation = (path: string) => {
    // First close the menu
    setIsOpen(false);
    
    // Short delay to allow menu closing animation
    setTimeout(() => {
      // Navigate to the page
      navigate(path);
      
      // Call the scrollToTop function
      scrollToTop();
    }, 100);
  };

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
                {/* Special case for Financial Products - direct link but with expandable submenu */}
                {item.name === "Financial Products" && item.hasSubmenu && item.submenu ? (
                  <Collapsible className="w-full">
                    <div className="flex items-center justify-between">
                      {/* Financial Products text (clickable to go to main page) */}
                      <button
                        className={`mobile-nav-item flex items-center text-white py-2 text-lg font-medium transition px-0 relative
                          ${isMenuActive(item, location.pathname) ? 'active mobile-nav-active' : ''}
                        `}
                        onClick={() => handleNavigation(item.path)}
                      >
                        <span className="mobile-nav-text">{item.name}</span>
                      </button>
                      
                      {/* Arrow button to expand submenu */}
                      <CollapsibleTrigger asChild>
                        <button className="flex items-center justify-center w-5 p-0">
                          <ChevronRight className="h-5 w-5 transition-transform duration-200 [&[data-state=open]]:rotate-90" />
                        </button>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <button 
                          key={subItem.name}
                          className={`flex items-center gap-2 text-gray-300 hover:text-white py-1 text-md transition cursor-pointer whitespace-nowrap ${
                            location.pathname === subItem.path ? 'font-medium' : ''
                          }`}
                          onClick={() => handleNavigation(subItem.path)}
                        >
                          <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          <span>{subItem.name}</span>
                        </button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  // Regular items with click animation
                  item.hasSubmenu && item.submenu ? (
                    <Collapsible className="w-full">
                      <div className="flex items-center">
                        <CollapsibleTrigger asChild>
                          <button
                            className={`mobile-nav-item flex items-center justify-between w-full text-white py-2 text-lg font-medium transition px-0 relative
                              ${isMenuActive(item, location.pathname) ? 'active mobile-nav-active' : ''}
                            `}
                          >
                            <span className="mobile-nav-text">{item.name}</span>
                            <ChevronRight className="h-5 w-5 transition-transform duration-200 [&[data-state=open]]:rotate-90" />
                          </button>
                        </CollapsibleTrigger>
                      </div>
                      
                      <CollapsibleContent className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <button 
                            key={subItem.name}
                            className={`flex items-center gap-2 text-gray-300 hover:text-white py-1 text-md transition cursor-pointer whitespace-nowrap ${
                              location.pathname === subItem.path ? 'font-medium' : ''
                            }`}
                            onClick={() => handleNavigation(subItem.path)}
                          >
                            <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            <span>{subItem.name}</span>
                          </button>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <button 
                      className={`mobile-nav-item flex items-center justify-between text-white py-2 text-lg font-medium transition relative w-full
                        ${isMenuActive(item, location.pathname) ? 'active mobile-nav-active' : ''}
                      `}
                      onClick={() => handleNavigation(item.path)}
                    >
                      <span className="mobile-nav-text">{item.name}</span>
                      <div className="w-5"></div>
                    </button>
                  )
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

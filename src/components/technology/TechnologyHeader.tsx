
import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/landing/Logo";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger,
  NavigationMenuContent
} from "@/components/ui/navigation-menu";
import { ChevronDown, ArrowRight } from "lucide-react";

interface TechnologyHeaderProps {
  scrollToTop: () => void;
}

const TechnologyHeader: React.FC<TechnologyHeaderProps> = ({ scrollToTop }) => {
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

  return (
    <header className="flex justify-between items-center pt-14 max-sm:pt-5 gap-6">
      <Link to="/">
        <Logo />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <Link to="/home-intro" className="text-white hover:text-gray-300 px-4 py-2 transition">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/company" className="text-white hover:text-gray-300 px-4 py-2 transition">
              Company
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#" onClick={e => {
              e.preventDefault();
              scrollToTop();
            }} className="text-white hover:text-gray-300 px-4 py-2 transition">
              Technology
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger
              className="text-white hover:text-gray-300 px-4 py-2 transition"
            >
              Financial Products
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full left-0 min-w-[200px] bg-white text-black shadow-lg rounded-md overflow-hidden z-50">
              <ul className="py-2">
                {financialProductsSubmenu.map((subItem, index) => (
                  <li key={subItem.name} className="px-2">
                    <Link
                      to={subItem.path}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:text-red-500 rounded-md transition-colors"
                      onClick={scrollToTop}
                    >
                      <ArrowRight className="h-4 w-4 text-gray-500" />
                      <span>{subItem.name}</span>
                    </Link>
                    {index < financialProductsSubmenu.length - 1 && (
                      <div className="mx-4 my-1 border-t border-gray-100"></div>
                    )}
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/robot" className="text-white hover:text-gray-300 px-4 py-2 transition">
              DF Robot
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger
              className="text-white hover:text-gray-300 px-4 py-2 transition"
            >
              AXI CFD
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full left-0 min-w-[200px] bg-white text-black shadow-lg rounded-md overflow-hidden z-50">
              <ul className="py-2">
                {axiCfdSubmenu.map((subItem, index) => (
                  <li key={subItem.name} className="px-2">
                    <Link
                      to={subItem.path}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:text-red-500 rounded-md transition-colors"
                      onClick={scrollToTop}
                    >
                      <ArrowRight className="h-4 w-4 text-gray-500" />
                      <span>{subItem.name}</span>
                    </Link>
                    {index < axiCfdSubmenu.length - 1 && (
                      <div className="mx-4 my-1 border-t border-gray-100"></div>
                    )}
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact" className="text-white hover:text-gray-300 px-4 py-2 transition">
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default TechnologyHeader;

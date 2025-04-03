
import React from "react";
import Logo from "@/components/landing/Logo";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";

interface AxiCFDHeaderProps {
  scrollToTop: () => void;
}

const AxiCFDHeader: React.FC<AxiCFDHeaderProps> = ({ scrollToTop }) => {
  return (
    <header className="flex justify-between items-center pt-14 max-sm:pt-5">
      <Link to="/">
        <Logo />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-2">
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
            <Link to="/technology" className="text-white hover:text-gray-300 px-4 py-2 transition">
              Technology
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/robot" className="text-white hover:text-gray-300 px-4 py-2 transition">
              DF Robot
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a 
              href="#" 
              onClick={e => {
                e.preventDefault();
                scrollToTop();
              }} 
              className="text-white hover:text-gray-300 px-4 py-2 transition"
            >
              AXI CFD
            </a>
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

export default AxiCFDHeader;

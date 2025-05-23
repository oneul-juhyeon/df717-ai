
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavDropdownItemProps {
  name: string;
  path: string;
  scrollToTop?: () => void;
  id?: string;
}

interface NavDropdownProps {
  name: string;
  path: string;
  items: NavDropdownItemProps[];
  isActive?: boolean;
  textColor?: string;
  hoverColor?: string;
  activeColor?: string;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  name,
  path,
  items,
  isActive = false,
  textColor = 'text-white',
  hoverColor = '',
  activeColor = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to={path}
        className={cn(
          textColor, 
          "px-4 py-2 transition whitespace-nowrap inline-flex items-center relative",
          "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white",
          isActive 
            ? 'after:scale-x-100' 
            : 'after:scale-x-0 hover:after:scale-x-100 after:origin-left hover:after:origin-left',
          "after:transition-transform after:duration-300"
        )}
      >
        {name}
        <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180" />
      </Link>
      
      {/* Dropdown Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 min-w-[220px] w-auto max-w-none bg-black/80 backdrop-blur-sm text-white shadow-lg rounded-md overflow-hidden z-50 transition-all",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
          "group-hover:opacity-100 group-hover:visible"
        )}
      >
        <ul className="py-2 px-2 w-max">
          {items.map((item, index) => (
            <li key={item.name} className="list-none">
              <Link
                to={item.path}
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-md transition-colors whitespace-nowrap w-full"
                onClick={item.scrollToTop}
              >
                <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
              {index < items.length - 1 && (
                <div className="mx-4 my-1 border-t border-gray-700"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

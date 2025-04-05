
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
  hoverColor = 'hover:text-gray-300',
  activeColor = 'text-indigo-400'
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
          hoverColor, 
          "px-4 py-2 transition whitespace-nowrap inline-flex items-center",
          isActive ? 'font-medium' : '',
          isActive ? activeColor : ''
        )}
      >
        {name}
        <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180" />
      </Link>
      
      {/* Dropdown Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 w-[220px] bg-black/80 backdrop-blur-sm text-white shadow-lg rounded-md overflow-hidden z-50 transition-all",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
          "group-hover:opacity-100 group-hover:visible"
        )}
      >
        <ul className="py-2 px-2">
          {items.map((item, index) => (
            <li key={item.name} className="list-none">
              <Link
                to={item.path}
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 hover:text-red-400 rounded-md transition-colors"
                onClick={item.scrollToTop}
              >
                <ArrowRight className="h-4 w-4 text-gray-400" />
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

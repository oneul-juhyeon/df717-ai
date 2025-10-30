
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-6 mt-auto relative z-20">
      <div className="w-full px-5 sm:px-10 md:px-[154px]">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between text-xs">
          {/* Left: Kakao Icon */}
          <a 
            href="https://pf.kakao.com/_EAuxcn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/footer_kakao_icon.svg" 
              alt="Kakao Channel" 
              className="w-[60px] h-[60px]"
            />
          </a>

          {/* Center: Links */}
          <div className="flex items-center space-x-10">
            <Link 
              to="/privacy-policy" 
              className="font-din font-bold text-white hover:text-gray-300 transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link 
              to="/suppliers" 
              className="font-din font-bold text-white hover:text-gray-300 transition-colors"
            >
              SUPPLIERS
            </Link>
            <Link 
              to="/contacts" 
              className="font-din font-bold text-white hover:text-gray-300 transition-colors"
            >
              CONTACTS
            </Link>
          </div>

          {/* Right: Copyright */}
          <div className="text-xs">
            <span className="font-din text-white">DF717 © 2025</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center space-y-4 text-[0.5rem]">
          {/* Top: Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/privacy-policy" 
              className="font-din font-bold text-white hover:text-gray-300 transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link 
              to="/suppliers" 
              className="font-din font-bold text-white hover:text-gray-300 transition-colors"
            >
              SUPPLIERS
            </Link>
            <Link 
              to="/contacts" 
              className="font-din font-bold text-white hover:text-gray-300 transition-colors"
            >
              CONTACTS
            </Link>
          </div>

          {/* Middle: Copyright */}
          <div>
            <span className="font-din text-white">DF717 © 2025</span>
          </div>

          {/* Bottom: Kakao Icon */}
          <a 
            href="https://pf.kakao.com/_EAuxcn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/footer_kakao_icon.svg" 
              alt="Kakao Channel" 
              className="w-[60px] h-[60px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

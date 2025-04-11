
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-4 md:px-10 lg:px-[154px] flex flex-col md:flex-row items-center justify-center md:justify-center text-xs md:text-sm">
        <div className="mb-4 md:mb-0 text-[0.5rem] md:text-xs">
          <span className="font-din text-white">DF717 © 2025</span>
        </div>
        <div className="flex items-center space-x-6 md:space-x-10 mx-0 md:mx-10 text-[0.5rem] md:text-xs">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-4 md:px-10 lg:px-[154px] flex flex-col md:flex-row items-center justify-center md:justify-between text-xs md:text-sm">
        <div className="mb-4 md:mb-0">
          <span className="font-din">DF717 © 2025</span>
        </div>
        <div className="flex items-center space-x-6 md:space-x-10">
          <Link 
            to="/privacy-policy" 
            className="font-din hover:text-gray-300 transition-colors"
          >
            PRIVACY POLICY
          </Link>
          <Link 
            to="/suppliers" 
            className="font-din hover:text-gray-300 transition-colors"
          >
            SUPPLIERS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

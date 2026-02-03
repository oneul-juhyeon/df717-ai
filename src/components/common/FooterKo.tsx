import React from "react";
import { Link } from "react-router-dom";

const FooterKo: React.FC = () => {
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
              to="/contact" 
              className="font-din font-bold text-white hover:text-gray-300 transition-colors"
            >
              CONTACT
            </Link>
          </div>

          {/* Right: Copyright */}
          <div className="text-xs">
            <span className="font-din text-white">DF717 © 2025</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center space-y-4 text-xs">
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
              to="/contact" 
              className="font-din font-bold text-white hover:text-gray-300 transition-colors"
            >
              CONTACT
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

        {/* Company Information Section */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {/* Left: Logo */}
            <div className="flex justify-start">
              <img 
                src="/lovable-uploads/df717_logo.png" 
                alt="DF717 Logo" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Right: Company Info */}
            <div className="text-xs text-gray-400 space-y-1 text-left md:text-right">
              <p className="font-medium">주식회사 디에프717 (DF717 Co. Ltd.)</p>
              <p>대표자명: 전다슬 외2</p>
              <p>사업자등록번호: 359-81-02573</p>
              <p>서울특별시 강남구 학동로31길 12, 7층 732호(논현동, 벤쳐캐슬빌딩)</p>
              <p>유선번호: 010-2475-7172</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterKo;

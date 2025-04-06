
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img
      src="/lovable-uploads/df717_logo.png"
      alt="DF717 Logo"
      className={`h-8 w-auto transition-transform hover:scale-105 ${className}`}
    />
  );
};

export default Logo;

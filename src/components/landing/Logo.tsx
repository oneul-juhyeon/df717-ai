
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img
      src="/lovable-uploads/df717_logo.png"
      alt="Company Logo"
      className={`h-8 w-auto ${className}`}
    />
  );
};

export default Logo;

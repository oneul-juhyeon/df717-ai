import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cefe0787bd532a22673fbaad1a5c5aa7f0ab263"
      alt="Company Logo"
      className={`w-[123px] h-[50px] ${className}`}
    />
  );
};

export default Logo;

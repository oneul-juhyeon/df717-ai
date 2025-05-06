
import React from "react";

interface LogoProps {
  className?: string;
  as?: "h1" | "h2" | "div"; // New prop to determine the wrapper element
}

const Logo: React.FC<LogoProps> = ({ className = "", as = "div" }) => {
  const Component = as; // Use the specified component type

  return (
    <Component className={className}>
      <img
        src="/lovable-uploads/df717_logo.png"
        alt="DF717 Logo"
        className={`h-8 w-auto transition-transform hover:scale-105 ${className}`}
      />
    </Component>
  );
};

export default Logo;

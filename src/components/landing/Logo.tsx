
import React from "react";

interface LogoProps {
  className?: string;
  as?: "h1" | "h2" | "div"; // Prop to determine the wrapper element
}

const Logo: React.FC<LogoProps> = ({ className = "", as = "div" }) => {
  // Explicitly use the component type based on the 'as' prop
  const Component = as;

  return (
    <Component className={`${className}`}>
      <img
        src="/lovable-uploads/df717_logo.png"
        alt="DF717 - AI Investment Automation Platform"
        title="DF717"
        className={`h-8 w-auto transition-transform hover:scale-105 ${className}`}
      />
    </Component>
  );
};

export default Logo;

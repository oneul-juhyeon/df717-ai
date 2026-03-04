import React from "react";

interface LogoProps {
  className?: string;
  as?: "h1" | "h2" | "div"; // Prop to determine the wrapper element
}

const Logo: React.FC<LogoProps> = ({ className = "", as = "div" }) => {
  const Component = as;

  return (
    <Component className={className}>
      <img
        src="/lovable-uploads/df717_logo.png"
        alt="DF717 - AI Investment Automation Platform"
        title="DF717"
        width={168}
        height={32}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className={`h-8 w-auto transition-transform hover:scale-105 ${className}`}
      />
    </Component>
  );
};

export default Logo;

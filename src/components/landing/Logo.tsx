import React from "react";
import df717Logo from "@/assets/df717-logo.png";

interface LogoProps {
  className?: string;
  as?: "h1" | "h2" | "div"; // Prop to determine the wrapper element
}

// Preload once at module load to minimize logo flicker on route changes
if (typeof window !== "undefined") {
  const preloadedLogo = new window.Image();
  preloadedLogo.src = df717Logo;
}

const Logo: React.FC<LogoProps> = ({ className = "", as = "div" }) => {
  const Component = as;

  return (
    <Component className={className}>
      <img
        src={df717Logo}
        alt="DF717 - AI Investment Automation Platform"
        title="DF717"
        width={168}
        height={32}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        className={`h-8 w-auto transition-transform hover:scale-105 ${className}`}
      />
    </Component>
  );
};

export default Logo;

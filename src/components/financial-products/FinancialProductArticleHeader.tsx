
import React from "react";

// CSS for the mobile navigation underline animation
const mobileNavStyles = `
  .mobile-nav-item {
    position: relative;
  }
  
  .mobile-nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.5px;
    background-color: white;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  .mobile-nav-item:hover::after,
  .mobile-nav-item:active::after,
  .mobile-nav-item.active::after {
    transform: scaleX(1);
  }

  /* Ensure active items always show the underline */
  .mobile-nav-item.active::after {
    transform: scaleX(1);
  }

  /* Disappear animation */
  .mobile-nav-item:not(:hover):not(.active)::after {
    transform-origin: right;
  }

  /* Touch-specific styles for mobile */
  @media (hover: none) {
    .mobile-nav-item:active::after {
      transform: scaleX(1);
    }
  }
`;

interface FinancialProductArticleHeaderProps {
  title: string;
  subtitle?: string;
  isMainTitle?: boolean;
}

const FinancialProductArticleHeader: React.FC<FinancialProductArticleHeaderProps> = ({ 
  title, 
  subtitle,
  isMainTitle = false 
}) => {
  const HeadingTag = isMainTitle ? 'h1' : 'h2';
  
  return (
    <>
      <style>{mobileNavStyles}</style>
      <div className="mb-14 text-left animate-fade-in-up">
        <HeadingTag className="text-4xl md:text-5xl font-bold text-white mb-4 text-left tracking-tight">{title}</HeadingTag>
        {subtitle && (
          <p className="text-xl text-gray-300 text-left max-w-3xl leading-relaxed">{subtitle}</p>
        )}
        <div className="h-1 w-20 bg-white mt-6"></div>
      </div>
    </>
  );
};

export default FinancialProductArticleHeader;

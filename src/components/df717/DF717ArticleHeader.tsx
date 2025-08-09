
import React from "react";

interface DF717ArticleHeaderProps {
  title: string;
  subtitle?: string;
  isMainTitle?: boolean;
}

const DF717ArticleHeader: React.FC<DF717ArticleHeaderProps> = ({ 
  title, 
  subtitle,
  isMainTitle = true 
}) => {
  const HeadingTag = isMainTitle ? 'h1' : 'h2';
  
  return (
    <div className="mb-14 text-left animate-fade-in-up">
      <HeadingTag className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</HeadingTag>
      {subtitle && (
        <h2 className="text-xl text-gray-300 max-w-3xl leading-relaxed whitespace-pre-line">{subtitle}</h2>
      )}
      <div className="h-1 w-20 bg-white mt-6"></div>
    </div>
  );
};

export default DF717ArticleHeader;

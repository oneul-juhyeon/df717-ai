
import React from "react";

interface FinancialProductArticleHeaderProps {
  title: string;
  subtitle?: string;
}

const FinancialProductArticleHeader: React.FC<FinancialProductArticleHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-14 text-left animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left tracking-tight">{title}</h1>
      {subtitle && (
        <p className="text-xl text-gray-300 text-left max-w-3xl leading-relaxed">{subtitle}</p>
      )}
      <div className="h-1 w-20 bg-red-800 mt-6"></div>
    </div>
  );
};

export default FinancialProductArticleHeader;

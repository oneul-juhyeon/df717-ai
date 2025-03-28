import React, { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  svgContent?: string;
  image?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  svgContent,
  image,
  className = "",
}) => {
  return (
    <div className={`bg-[#1E1E1E] p-6 rounded-2xl ${className}`}>
      <h2 className="text-[28px] text-[#F9F9FB] font-bold">{title}</h2>
      <p className="text-[15px] text-[#F9F9FB] font-[350] leading-[25.6px] mt-[19px]">
        {description}
      </p>

      {(icon || svgContent) && (
        <div className="flex items-center gap-4 mt-6">
          {icon && (
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-[48px] h-[48px]"
            />
          )}
          {svgContent && (
            <div dangerouslySetInnerHTML={{ __html: svgContent }} />
          )}
        </div>
      )}

      {image && (
        <img
          src={image}
          alt={`${title} image`}
          className="mt-[24px] w-full h-[176px] object-cover rounded-[16px]"
        />
      )}
    </div>
  );
};

export default FeatureCard;

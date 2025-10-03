import React from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  currentLang: "en" | "ko";
  englishUrl: string;
  koreanUrl: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  englishUrl,
  koreanUrl,
}) => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Globe className="w-5 h-5 text-cyan-400" />
      
      {currentLang === "en" ? (
        <Link
          to={koreanUrl}
          className="flex items-center gap-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300 border border-white/20 hover:border-cyan-400/50 rounded-full"
        >
          <span className="text-lg">🇰🇷</span>
          <span className="text-sm font-medium">한국어</span>
        </Link>
      ) : (
        <Link
          to={englishUrl}
          className="flex items-center gap-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300 border border-white/20 hover:border-cyan-400/50 rounded-full"
        >
          <span className="text-lg">🇺🇸</span>
          <span className="text-sm font-medium">English</span>
        </Link>
      )}
    </motion.div>
  );
};

export default LanguageSwitcher;

import React from "react";
import { Link } from "react-router-dom";
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
      className="flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {currentLang === "en" ? (
        <Link
          to={koreanUrl}
          className="flex items-center justify-center px-3 py-2 text-xs font-semibold text-white/90 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white rounded"
          aria-label="Switch to Korean"
        >
          KR
        </Link>
      ) : (
        <Link
          to={englishUrl}
          className="flex items-center justify-center px-3 py-2 text-xs font-semibold text-white/90 hover:text-white transition-colors duration-300 border border-white/20 hover:border-white rounded"
          aria-label="Switch to English"
        >
          US
        </Link>
      )}
    </motion.div>
  );
};

export default LanguageSwitcher;

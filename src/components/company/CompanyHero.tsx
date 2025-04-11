import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
interface CompanyHeroProps {
  scrollToValues: () => void;
}
const CompanyHero: React.FC<CompanyHeroProps> = ({
  scrollToValues
}) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);

  // Animation sequence
  useEffect(() => {
    // Step 1: Show title
    const timer1 = setTimeout(() => {
      setTitleVisible(true);
    }, 500);

    // Step 2: Show content after title
    const timer2 = setTimeout(() => {
      setContentVisible(true);
    }, 1000);

    // Step 3: Show arrow after content
    const timer3 = setTimeout(() => {
      setArrowVisible(true);
    }, 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  return;
};
export default CompanyHero;
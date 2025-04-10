
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

export const useScrollAnimation = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.1
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    });
  }, [inView, controls]);

  return { sectionRef, controls };
};

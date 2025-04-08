
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalSection: React.FC = () => {
  const finalSectionRef = useRef<HTMLDivElement>(null);
  const isFinalInView = useInView(finalSectionRef);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigateToDF717 = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTop();
    // Use setTimeout to ensure the scroll happens before navigation
    setTimeout(() => {
      navigate('/df717');
    }, 100);
  };

  return (
    <section 
      ref={finalSectionRef}
      className="relative w-full min-h-screen flex flex-col justify-end text-left px-6 py-16 overflow-hidden"
    >
      {/* Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img 
          src="/lovable-uploads/home-intro2.webp" 
          alt="Yellow planet curve" 
          className="object-cover w-full h-full"
        />
        {/* Top-to-bottom black gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0) 30%)'
          }}
        ></div>
      </div>

      <div className="z-10 max-w-3xl mx-auto md:mx-0 md:ml-[10%] lg:ml-[15%] mb-16 md:mb-24">
        <motion.p 
          className="font-din text-xl md:text-2xl text-white leading-relaxed mb-10 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          For thousands of years, the Bible has foretold a time of famine in the last days.
          <br /><br />
          Today, as we live in the end times, we are already witnessing global economic hardship.
        </motion.p>
        
        <motion.p 
          className="font-din text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-10 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          DF717 is a modern-day ark of salvation,
          <br />
          using AI-powered financial innovation
          <br />
          to help prepare for the famine to come.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a 
            href="/df717" 
            className="inline-flex items-center justify-center border border-white/70 text-white hover:bg-white/10 transition-colors px-8 py-3 tracking-wider font-din text-lg"
            onClick={handleNavigateToDF717}
          >
            <span className="flex items-center">
              LEARN MORE ABOUT DF717
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;

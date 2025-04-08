
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CompanyHeader from "@/components/company/CompanyHeader";
import Footer from "@/components/common/Footer";

const PrivacyPolicy: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-black flex flex-col">
      <div className="flex-grow max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5">
        <CompanyHeader scrollToTop={scrollToTop} />

        <motion.section 
          className="mt-20 mb-20 max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-16 uppercase font-din">PRIVACY POLICY</h1>
          
          <div className="space-y-8 text-lg font-din">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="leading-relaxed"
            >
              This Privacy Policy describes how DF717 collects, uses, and discloses your information when you use our website, products, or services.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="leading-relaxed"
            >
              We respect your privacy and are committed to protecting your personal information. By using our services, you agree to the collection and use of information in accordance with this policy.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="pt-8"
            >
              <h2 className="text-xl font-bold mb-4 font-din">Information We Collect</h2>
              <p className="mb-4 font-din">We may collect information that you provide directly to us, information we obtain automatically when you visit our website, and information from other sources.</p>
              
              <h2 className="text-xl font-bold mb-4 mt-8 font-din">How We Use Your Information</h2>
              <p className="font-din">We use the information we collect to provide, maintain, and improve our services, to develop new products and services, and to protect DF717 and our users.</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;

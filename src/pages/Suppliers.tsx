
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CompanyHeader from "@/components/company/CompanyHeader";
import Footer from "@/components/common/Footer";

const Suppliers: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-16 uppercase font-din">BECOMING A SUPPLIER</h1>
          
          <div className="sr-only">
            DF717 works with diverse and qualified suppliers who support our mission to deliver high-quality, reliable financial technology.  
            Our vendor onboarding process ensures alignment with our values of transparency, agility, and technological innovation.  
            We welcome small, specialized, and local suppliers to participate in our sourcing process and help us serve global clients efficiently.  
            DF717's supplier relationships are built on trust, collaboration, and a commitment to excellence.
          </div>
          
          <div className="space-y-8 text-lg font-din">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="leading-relaxed"
            >
              DF717 is committed to including diverse suppliers in our sourcing process, which enhances our ability to provide the most reliable, high-quality, and cost-effective products and services.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="leading-relaxed"
            >
              While DF717 develops and manufactures its technologies and products in-house, often times we can leverage specialized, small, nimble, or local suppliers that enable us to achieve our goals.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="pt-8"
            >
              <h2 className="text-xl font-semibold mb-6 font-din">Interested in doing business with us?</h2>
              
              <Link to="/contact">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-3 font-din uppercase tracking-wider text-sm">
                  BECOME A SUPPLIER
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </main>
  );
};

export default Suppliers;

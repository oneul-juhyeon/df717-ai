
import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import HomeContent from "@/components/home/HomeContent";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeIntro: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="w-full min-h-screen bg-[#161616] flex flex-col">
      <div className="w-full mx-auto px-[154px] pt-8 max-md:px-10 max-sm:px-5">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>
        
      {/* Hero Section */}
      <section className="w-full bg-black">
        <div className="w-full">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/lovable-uploads/matthew_hd.webp" 
            alt="DF717 Hero" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      
      {/* Text Section */}
      <section className="w-full bg-[#111111] py-24 px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="font-sans text-xl md:text-2xl text-[#EEEEEE] mb-12 leading-relaxed">
            Since thousands of years ago, the Bible has foreshadowed the era of famine at the end.<br/>
            Living in the last era, we are already experiencing global economic hardship.
          </p>
          
          <p className="font-sans text-2xl md:text-3xl font-bold text-[#EEEEEE] leading-relaxed">
            DF717 is an ark of salvation to prepare for famine through financial innovation using AI technology.
          </p>
        </motion.div>
      </section>
      
      {/* Content Section - Updated with more sophisticated style */}
      <section className="w-full bg-[#161616] py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Data Driven, Life Inspired</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-12"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-2xl font-medium text-white border-l-2 border-red-600 pl-4">Technologies</h3>
              <p className="text-gray-300 leading-relaxed">
                With years of proven experience in the financial market, we are 
                continuously developing cutting-edge technologies to transform the industry.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our proprietary algorithms and machine learning models can identify patterns 
                that humans might miss, giving you a competitive edge in trading.
              </p>
              <div className="pt-4">
                <Link to="/technology">
                  <Button className="bg-transparent hover:bg-red-600 border border-red-600 text-white px-8 py-6 rounded-none transition-all">
                    Explore Technology
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-2xl font-medium text-white border-l-2 border-red-600 pl-4">DF717 & Company</h3>
              <p className="text-gray-300 leading-relaxed">
                We are a team of experts in AI, machine learning, and financial markets, 
                dedicated to bringing innovative solutions to traders worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to democratize access to sophisticated trading algorithms, 
                making them accessible to both institutions and individual traders.
              </p>
              <div className="pt-4">
                <Link to="/company">
                  <Button className="bg-transparent hover:bg-red-600 border border-red-600 text-white px-8 py-6 rounded-none transition-all">
                    About Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <div className="bg-[#1a1a1a] p-8 border-t-2 border-red-600">
              <h3 className="text-xl font-medium text-white mb-4">DF Robot</h3>
              <p className="text-gray-300 mb-8 h-24">
                Fully-automated trading system powered by advanced AI algorithms.
              </p>
              <Link to="/robot">
                <Button variant="ghost" className="text-red-500 hover:text-white hover:bg-red-600 px-0 group">
                  Explore
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
            </div>
            
            <div className="bg-[#1a1a1a] p-8 border-t-2 border-red-600">
              <h3 className="text-xl font-medium text-white mb-4">AXI CFD</h3>
              <p className="text-gray-300 mb-8 h-24">
                Contract for Difference trading with enhanced accuracy and risk management.
              </p>
              <Link to="/axi-cfd">
                <Button variant="ghost" className="text-red-500 hover:text-white hover:bg-red-600 px-0 group">
                  Explore
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
            </div>
            
            <div className="bg-[#1a1a1a] p-8 border-t-2 border-red-600">
              <h3 className="text-xl font-medium text-white mb-4">API Integration</h3>
              <p className="text-gray-300 mb-8 h-24">
                Seamlessly integrate our algorithms with your existing trading platforms.
              </p>
              <Button variant="ghost" className="text-red-500 hover:text-white hover:bg-red-600 px-0 group">
                Explore
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomeIntro;


import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import { NewContactForm } from "@/components/contact/NewContactForm";
import Footer from "@/components/common/Footer";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col text-left">
      <div className="w-full mx-0 px-5 sm:px-10 md:px-[154px] z-10">
        <HomeHeader scrollToTop={scrollToTop} />
      </div>
      <div className="flex-grow">
        <NewContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

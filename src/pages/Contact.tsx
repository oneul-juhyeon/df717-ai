
import React from "react";
import ContactHeader from "@/components/contact/ContactHeader";
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
      <div className="w-full mx-auto px-4 md:px-10 lg:px-[154px] z-10">
        <ContactHeader scrollToTop={scrollToTop} />
        
        {/* SEO Content Block */}
        <div className="sr-only">
          This page allows visitors to contact DF717 for inquiries, partnerships, or support.  
          Our team typically responds within 1–2 business days.  
          Please include your name, email, and message so we can assist you efficiently.  
          DF717 values transparency, collaboration, and meaningful connections.
        </div>
      </div>
      <div className="flex-grow">
        <NewContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;


import React from "react";
import ContactHeader from "@/components/contact/ContactHeader";
import { NewContactForm } from "@/components/contact/NewContactForm";
import Footer from "@/components/common/Footer";
import SEOHead from "@/components/seo/SEOHead";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SEOHead
        title="Contact DF717 - Get in Touch for Trading Solutions"
        description="Contact DF717 for inquiries about AI-powered trading systems, partnerships, and support. Our team responds within 1-2 business days to assist with your trading needs."
        canonical="https://df717.ai/contact"
        type="website"
      />
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
    </>
  );
};

export default Contact;

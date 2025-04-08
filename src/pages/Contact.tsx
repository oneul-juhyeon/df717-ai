
import React from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFooter } from "@/components/contact/ContactFooter";
import ContactHeader from "@/components/contact/ContactHeader";
import Footer from "@/components/common/Footer";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
      <div className="max-w-none mx-auto px-[154px] max-md:max-w-[991px] max-md:px-10 max-sm:max-w-screen-sm max-sm:px-5 flex-grow">
        <ContactHeader scrollToTop={scrollToTop} />
        
        <div className="mt-16 mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <ContactForm />
        </div>

        <ContactFooter />
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;


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
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-grow">
        <ContactHeader scrollToTop={scrollToTop} />
        <NewContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

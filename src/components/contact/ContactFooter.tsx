
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactFooter() {
  return (
    <div className="bg-gray-900 rounded-lg p-8 mb-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#b30d28] p-4 rounded-full mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">+1 (800) 123-4567</p>
            <p className="text-sm text-gray-400 mt-2">Mon-Fri, 9am-6pm</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#b30d28] p-4 rounded-full mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">support@example.com</p>
            <p className="text-sm text-gray-400 mt-2">We'll respond within 24 hours</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#b30d28] p-4 rounded-full mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-300">1234 Market Street</p>
            <p className="text-gray-300">San Francisco, CA 94103</p>
          </div>
        </div>
      </div>
    </div>
  );
}

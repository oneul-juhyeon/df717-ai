
import React from "react";
import { Separator } from "@/components/ui/separator";

export function ContactFormHeader() {
  return (
    <>
      <h1 className="text-white text-[20px] font-bold uppercase text-left">CONTACT INFORMATION</h1>
      <Separator className="w-full h-[1px] bg-white mt-2 mb-6" />
      <p className="text-white text-[16px] mb-6 text-left">What is your contact information?</p>
    </>
  );
}

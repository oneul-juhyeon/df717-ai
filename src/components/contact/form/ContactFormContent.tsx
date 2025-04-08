
import React from "react";
import { FormField } from "@/components/ui/form";
import { FormValues } from "./types";
import { Control } from "react-hook-form";
import { FormFieldRow } from "./FormFieldRow";
import { TextareaField } from "./TextareaField";

interface ContactFormContentProps {
  control: Control<FormValues>;
}

export function ContactFormContent({ control }: ContactFormContentProps) {
  return (
    <div className="space-y-[20px] text-left">
      {/* Job Title */}
      <FormFieldRow 
        control={control} 
        name="jobTitle" 
        label="Job Title" 
        required 
      />

      {/* First Name and Last Name (side by side) */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-[4%] space-y-[20px] md:space-y-0 text-left">
        <FormFieldRow 
          control={control} 
          name="firstName" 
          label="First Name" 
          required 
          className="flex-1 w-full md:w-[48%]"
        />
        <FormFieldRow 
          control={control} 
          name="lastName" 
          label="Last Name" 
          required 
          className="flex-1 w-full md:w-[48%]"
        />
      </div>

      {/* Email and Phone Number (side by side) */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-[4%] space-y-[20px] md:space-y-0 text-left">
        <FormFieldRow 
          control={control} 
          name="email" 
          label="E-mail" 
          required 
          className="flex-1 w-full md:w-[48%]"
        />
        <FormFieldRow 
          control={control} 
          name="phoneNumber" 
          label="Phone Number" 
          required 
          className="flex-1 w-full md:w-[48%]"
        />
      </div>

      {/* Introducer's Name */}
      <FormFieldRow 
        control={control} 
        name="introducerName" 
        label="Introducer's Name (if any)" 
      />

      {/* Message */}
      <TextareaField
        control={control}
        name="message"
        label="Message"
        required
      />
    </div>
  );
}

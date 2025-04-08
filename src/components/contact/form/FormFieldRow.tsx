
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormValues } from "./types";

interface FormFieldRowProps {
  control: Control<FormValues>;
  name: keyof FormValues;
  label: string;
  required?: boolean;
  className?: string;
}

export function FormFieldRow({ control, name, label, required = false, className }: FormFieldRowProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`text-left ${className || ""}`}>
          <FormLabel className="text-white text-[14px] text-left">
            {label} {required && <span className="text-[#D11C36]">*</span>}
          </FormLabel>
          <FormControl>
            <Input 
              {...field} 
              className="h-[45px] bg-[#1A1A1A] text-white border-0 rounded-none px-[10px]" 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

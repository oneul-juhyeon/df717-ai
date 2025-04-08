
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { FormValues } from "./types";

interface TextareaFieldProps {
  control: Control<FormValues>;
  name: keyof FormValues;
  label: string;
  required?: boolean;
}

export function TextareaField({ control, name, label, required = false }: TextareaFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="text-left">
          <FormLabel className="text-white text-[14px] text-left">
            {label} {required && <span className="text-[#D11C36]">*</span>}
          </FormLabel>
          <FormControl>
            <Textarea 
              {...field} 
              className="h-[150px] min-h-[150px] bg-[#1A1A1A] text-white border-0 rounded-none px-[10px] py-[10px]" 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

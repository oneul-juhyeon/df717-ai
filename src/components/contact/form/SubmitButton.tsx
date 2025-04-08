
import React from "react";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <div className="text-left">
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="bg-[#AAAAAA] text-white hover:bg-[#999999] rounded-none px-[10px] py-[5px] h-auto text-left"
      >
        {isSubmitting ? "Submitting..." : "SUBMIT"}
      </Button>
    </div>
  );
}

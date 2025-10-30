
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import { formSchema, FormValues } from "./form/types";
import { ContactFormHeader } from "./form/ContactFormHeader";
import { ContactFormContent } from "./form/ContactFormContent";
import { SubmitButton } from "./form/SubmitButton";

export function NewContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      introducerName: "",
      message: ""
    }
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `https://xvvfguvqeyymquhihkim.supabase.co/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will contact you soon."
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto px-[30px] py-[30px] bg-black text-left">
      <ContactFormHeader />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[20px] text-left">
          <ContactFormContent control={form.control} />
          
          {/* Submit Button */}
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </div>
  );
}

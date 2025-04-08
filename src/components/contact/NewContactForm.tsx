
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  jobTitle: z.string().min(1, {
    message: "Job title is required."
  }),
  firstName: z.string().min(1, {
    message: "First name is required."
  }),
  lastName: z.string().min(1, {
    message: "Last name is required."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phoneNumber: z.string().min(1, {
    message: "Phone number is required."
  }),
  introducerName: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters."
  })
});

type FormValues = z.infer<typeof formSchema>;

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
      // In a real application, this would be where you send the data
      console.log("Form submitted:", data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      <h1 className="text-white text-[20px] font-bold uppercase text-left">CONTACT INFORMATION</h1>
      <Separator className="w-full h-[1px] bg-white mt-2 mb-6" />
      <p className="text-white text-[16px] mb-6 text-left">What is your contact information?</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[20px] text-left">
          {/* Job Title */}
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-white text-[14px] text-left">
                  Job Title <span className="text-[#D11C36]">*</span>
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

          {/* First Name and Last Name (side by side) */}
          <div className="flex flex-col md:flex-row gap-0 md:gap-[4%] space-y-[20px] md:space-y-0 text-left">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1 w-full md:w-[48%] text-left">
                  <FormLabel className="text-white text-[14px] text-left">
                    First Name <span className="text-[#D11C36]">*</span>
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

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1 w-full md:w-[48%] text-left">
                  <FormLabel className="text-white text-[14px] text-left">
                    Last Name <span className="text-[#D11C36]">*</span>
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
          </div>

          {/* Email and Phone Number (side by side) */}
          <div className="flex flex-col md:flex-row gap-0 md:gap-[4%] space-y-[20px] md:space-y-0 text-left">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 w-full md:w-[48%] text-left">
                  <FormLabel className="text-white text-[14px] text-left">
                    E-mail <span className="text-[#D11C36]">*</span>
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

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex-1 w-full md:w-[48%] text-left">
                  <FormLabel className="text-white text-[14px] text-left">
                    Phone Number <span className="text-[#D11C36]">*</span>
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
          </div>

          {/* Introducer's Name */}
          <FormField
            control={form.control}
            name="introducerName"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-white text-[14px] text-left">
                  Introducer's Name (if any)
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

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-white text-[14px] text-left">
                  Message <span className="text-[#D11C36]">*</span>
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

          {/* Submit Button */}
          <div className="text-left">
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-[#AAAAAA] text-white hover:bg-[#999999] rounded-none px-[10px] py-[5px] h-auto text-left"
            >
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

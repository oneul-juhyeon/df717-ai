
import { z } from "zod";

export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;

import { z } from "zod";

export const userSchema = z
  .object({
    fullname: z
      .string()
      .min(1, { message: "Fullname is required" })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Fullname must only contain letters and spaces",
      }),
    email: z.string().email({ message: "Invalid email format" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmpassword: z
      .string()
      .min(6, { message: "Confirm Password must be at least 6 characters" }),
    contact: z
      .string()
      .min(10, { message: "Contact must be at least 10 digits" })
      .regex(/^\d+$/, { message: "Contact must only contain digits" }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"], // Points the error to the confirmpassword field
  });

export type SignupType = z.infer<typeof userSchema>;

//for login
export const loginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Password atleast 6 character" }),
});

export type logintype = z.infer<typeof loginSchema>;

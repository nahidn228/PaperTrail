import { role } from "@/constants/role";
import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name is too short" })
      .max(50, { message: "Name is too long" }),
    email: z.string().email({ message: "Invalid email address" }),
    // phone: z
    //   .string()
    //   .regex(/^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/, {
    //     message: "Invalid Bangladeshi phone number",
    //   }),
    role: z.enum([role.admin, role.user], {
      message: "Invalid role",
    }),
    password: z.string().min(8, { message: "Password is too short" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password is too short" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

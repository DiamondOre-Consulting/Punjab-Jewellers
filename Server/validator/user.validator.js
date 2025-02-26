import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(3).max(50).trim(),
  email: z.string().email().trim(),
  phoneNumber: z.string().length(10).trim(),
  password: z.string().min(6).trim(),
  role:z.string().trim()
});

export const signinSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(6).trim(),
});
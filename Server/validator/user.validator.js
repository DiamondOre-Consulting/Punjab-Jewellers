import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(3).max(50),
  email: z.string().email(),
  phoneNumber: z.string().length(10),
  password: z.string().min(6),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
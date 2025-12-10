import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as z from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const schema = z
  .object({
    full_name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .regex(/^(\+251|0)[1-9]\d{8}$/, "Valid Ethiopian phone required (+251...)"),
    password: z.string().min(8, "Password must be 8+ characters"),
    confirm_password: z.string(),
    preferred_language: z.enum(["en", "am", "om"]),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

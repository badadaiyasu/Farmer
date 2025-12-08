// src/hooks/useRegister.ts
import { useMutation } from "@tanstack/react-query";
import api from "../lib/api";
import { toast } from "sonner";
import { AxiosError } from "axios";

// Generic register data type - customize based on your API
type RegisterData = Record<string, unknown>;

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await api.post("/api/auth/register/", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Account created! Please check your email/phone to verify.");
    },
    onError: (error: unknown) => {
      // Type-safe error handling
      if (error instanceof AxiosError) {
        const errorData = error.response?.data as {
          detail?: string;
          email?: string[];
          phone?: string[];
        } | undefined;
        
        const msg = errorData?.detail ||
                    errorData?.email?.[0] ||
                    errorData?.phone?.[0] ||
                    "Registration failed. Please try again.";
        toast.error(msg);
      } else {
        toast.error("Registration failed. Please try again.");
      }
    },
  });
};
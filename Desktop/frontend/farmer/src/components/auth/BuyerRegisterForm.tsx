// src/components/auth/BuyerRegisterForm.tsx
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useNavigate } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { useAuth } from "../../hooks/useAuth";
import { schema } from "../../lib/utils";

type FormData = z.infer<typeof schema>;

export function BuyerRegisterForm() {
  const navigate = useNavigate();

  // CORRECT: Use the actual name from the store
  const { registerUser, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      preferred_language: "en",
    },
  });

  const preferredLanguage = useWatch({
    control,
    name: "preferred_language",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const [firstName, ...lastNameParts] = data.full_name.trim().split(" ");
      const lastName = lastNameParts.join(" ") || "";

      await registerUser({
        email: data.email,
        phone: data.phone,
        password: data.password,
        preferred_language: data.preferred_language,
        role: "buyer",
        firstName,
        lastName,
      });

      // Optional: redirect after success
      navigate("/buyer/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
      // You can show a toast here later
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white max-w-2xl mx-auto"
    >
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="full_name">Full Name</Label>
        <Input
          id="full_name"
          {...register("full_name")}
          placeholder="Abebe Kebede"
          className="h-12"
        />
        {errors.full_name && (
          <p className="text-red-500 text-sm mt-1">{errors.full_name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="example@email.com"
          className="h-12"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          {...register("phone")}
          placeholder="+251911223344"
          className="h-12"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Language */}
      <div className="space-y-2">
        <Label>Preferred Language</Label>
        <LanguageSelector
          value={preferredLanguage}
          onChange={(lang) =>
            setValue("preferred_language", lang, {
              shouldValidate: true,
              shouldDirty: true,
            })
          }
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          placeholder="********"
          className="h-12"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <Label htmlFor="confirm_password">Confirm Password</Label>
        <Input
          id="confirm_password"
          type="password"
          {...register("confirm_password")}
          placeholder="********"
          className="h-12"
        />
        {errors.confirm_password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirm_password.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full h-14 text-lg font-bold rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white mt-6"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Creating Account...
          </span>
        ) : (
          "Create Buyer Account"
        )}
      </Button>

      <p className="text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/auth/login")}
          className="text-emerald-600 font-bold hover:underline"
        >
          Log in
        </button>
      </p>
    </form>
  );
}
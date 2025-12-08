// src/components/auth/FarmerRegisterForm.tsx
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useRegister } from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { LanguageSelector, type Language } from "./LanguageSelector";

/* ✅ Zod Schema */
const schema = z
  .object({
    full_name: z.string().min(3, "Name must be at least 3 characters"),
    farm_name: z.string().min(2, "Farm name required"),
    email: z.string().email("Invalid email"),
    phone: z
      .string()
      .regex(/^(\+251|0)[1-9]\d{8}$/, "Valid Ethiopian phone required"),
    location: z.string().min(3, "Location required"),
    password: z.string().min(8, "Password must be 8+ characters"),
    confirm_password: z.string(),
    preferred_language: z.enum(["en", "am", "om"]),
  })
  .refine((d) => d.password === d.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type FormData = z.infer<typeof schema>;

export function FarmerRegisterForm() {
  const { mutate, isPending } = useRegister();
  const navigate = useNavigate();

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

  /* ✅ Safe replacement for watch() */
  const preferredLanguage = useWatch({
    control,
    name: "preferred_language",
  });

  const onSubmit = (data: FormData) => {
    mutate({ ...data, role: "farmer" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Full Name</Label>
          <Input {...register("full_name")} placeholder="Kebede Tadesse" />
          {errors.full_name && (
            <p className="text-red-500 text-sm">{errors.full_name.message}</p>
          )}
        </div>

        <div>
          <Label>Farm / Business Name</Label>
          <Input {...register("farm_name")} placeholder="Kebede's Organic Farm" />
          {errors.farm_name && (
            <p className="text-red-500 text-sm">{errors.farm_name.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label>Location (Woreda, Zone)</Label>
        <Input {...register("location")} placeholder="e.g. Sebeta, Oromia" />
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Email</Label>
          <Input {...register("email")} type="email" />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label>Phone Number</Label>
          <Input {...register("phone")} placeholder="+251933445566" />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label>Preferred Language</Label>
        <LanguageSelector
          value={preferredLanguage}
          onChange={(lang: Language) =>
            setValue("preferred_language", lang, {
              shouldDirty: true,
              shouldValidate: true,
            })
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Password</Label>
          <Input {...register("password")} type="password" />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          <Label>Confirm Password</Label>
          <Input {...register("confirm_password")} type="password" />
          {errors.confirm_password && (
            <p className="text-red-500 text-sm">
              {errors.confirm_password.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg py-7 font-bold rounded-2xl"
        disabled={isPending}
      >
        {isPending ? "Creating Farmer Account..." : "Join as Farmer / Artisan"}
      </Button>

      <p className="text-center text-gray-600">
        Already selling?{" "}
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

// src/components/auth/BuyerRegisterForm.tsx
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

type FormData = z.infer<typeof schema>;

export function BuyerRegisterForm() {
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

  /* ✅ useWatch instead of watch() */
  const preferredLanguage = useWatch({
    control,
    name: "preferred_language",
  });

  const onSubmit = (data: FormData) => {
    mutate({ ...data, role: "buyer" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white"
    >
      <div>
        <Label>Full Name</Label>
        <Input {...register("full_name")} placeholder="Abebe Kebede" />
        {errors.full_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.full_name.message}
          </p>
        )}
      </div>

      <div>
        <Label>Email</Label>
        <Input {...register("email")} type="email" />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label>Phone Number</Label>
        <Input {...register("phone")} placeholder="+251911223344" />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
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

      <div>
        <Label>Password</Label>
        <Input {...register("password")} type="password" />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <Label>Confirm Password</Label>
        <Input {...register("confirm_password")} type="password" />
        {errors.confirm_password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirm_password.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg py-7 font-bold rounded-2xl"
        disabled={isPending}
      >
        {isPending ? "Creating Account..." : "Create Buyer Account"}
      </Button>

      <p className="text-center text-gray-600">
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

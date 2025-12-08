// src/pages/auth/RegisterPage.tsx
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/auth/AuthLayout";
import { RoleSelectionCard } from "../../components/auth/RoleSelectionCard";
import { BuyerRegisterForm } from "../../components/auth/BuyerRegisterForm";
import { FarmerRegisterForm } from "../../components/auth/FarmerRegisterForm";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get("role") as "buyer" | "farmer" | null;

  return (
    <AuthLayout
      title={
        !role
          ? "Welcome to the Marketplace"
          : role === "buyer"
          ? "Join as a Buyer"
          : "Join as a Farmer / Artisan"
      }
      subtitle={
        role
          ? "Create your account in your preferred language"
          : "Choose how you want to join our community"
      }
    >
      {!role ? (
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-10">
          <RoleSelectionCard
            title="I'm a Buyer"
            description="Buy fresh produce, dairy, honey, and crafts directly from farmers"
            icon="shopping-cart"
            onClick={() => navigate("?role=buyer")}
          />
          <RoleSelectionCard
            title="I'm a Farmer / Artisan"
            description="Sell your products directly to buyers across Ethiopia"
            icon="tractor"
            onClick={() => navigate("?role=farmer")}
            highlighted
          />
        </div>
      ) : (
        <>
          <Button
            variant="ghost"
            onClick={() => navigate("/auth/register")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to role selection
          </Button>

          {role === "buyer" ? <BuyerRegisterForm /> : <FarmerRegisterForm />}
        </>
      )}
    </AuthLayout>
  );
}
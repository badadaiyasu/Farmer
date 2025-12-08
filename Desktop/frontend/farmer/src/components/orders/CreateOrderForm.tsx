// src/components/orders/CreateOrderForm.tsx
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { useCreateOrder } from "../../lib/api/orders";
import type { Product } from "../../types/product";

import { useTranslation } from "react-i18next";
import { toast } from "../../components/ui/use-toast";

interface Props {
  product: Product;
  onSuccess?: () => void;
}

export function CreateOrderForm({ product, onSuccess }: Props) {
  const { t } = useTranslation();
  const createOrder = useCreateOrder();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const quantity = Number(formData.get("quantity"));
    const message = formData.get("message")?.toString().trim() || undefined;

    createOrder.mutate(
      { productId: String(product.id), quantity, message },
      {
        onSuccess: () => {
          toast({
            title: t("order.success"),
            description: t("order.sent_to_farmer")
          });
          onSuccess?.();
        },
        onError: () => {
          toast({
            title: t("error"),
            description: t("order.failed"),
            variant: "destructive"
          });
        }
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-8 p-6 bg-muted rounded-lg">
      <h3 className="text-xl font-bold">{t("order.place_order")}</h3>

      <div>
        <Label htmlFor="quantity">{t("order.quantity")}</Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          min="1"
          defaultValue="1"
          required
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="message">
          {t("order.message")} ({t("optional")})
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder={t("order.message_placeholder")}
          className="mt-2"
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={createOrder.isPending}>
        {createOrder.isPending ? t("sending") : t("order.send_request")}
      </Button>
    </form>
  );
}

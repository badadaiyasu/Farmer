// src/pages/buyer/Orders.tsx
import { OrderList } from "../../components/orders/OrderList";
import { useBuyerOrders } from "../../lib/api/orders";
import { useTranslation } from "react-i18next";
import { Loader2 } from "lucide-react";

export default function BuyerOrdersPage() {
  const { t } = useTranslation();
  const { data: orders = [], isLoading } = useBuyerOrders();

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">{t("order.my_orders")}</h1>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <OrderList orders={orders} view="buyer" />
      )}
    </div>
  );
}
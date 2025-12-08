// src/pages/farmer/Orders.tsx
import { OrderList } from "../../components/orders/OrderList";
import { useFarmerOrders } from "../../lib/api/orders";
import { useTranslation } from "react-i18next";
import { Bell } from "lucide-react";

export default function FarmerOrdersPage() {
  const { t } = useTranslation();
  const { data: orders = [] } = useFarmerOrders();
  const pendingCount = orders.filter(o => o.status === "pending").length;

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold">{t("order.incoming_orders")}</h1>
        {pendingCount > 0 && (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <Bell className="h-4 w-4" />
            {pendingCount}
          </span>
        )}
      </div>

      <OrderList orders={orders} view="farmer" />
    </div>
  );
}
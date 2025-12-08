// src/components/orders/OrderList.tsx
import { OrderCard } from "./OrderCard";
import type { Order } from "../../types/order";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { useTranslation } from "react-i18next";

interface Props {
  orders: Order[];
  view: "buyer" | "farmer";
}

export function OrderList({ orders, view }: Props) {
  const { t } = useTranslation();

  if (orders.length === 0) {
    return (
      <Alert>
        <AlertDescription>
          {view === "buyer"
            ? t("order.no_orders_yet")
            : t("order.no_incoming_orders")}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} view={view} />
      ))}
    </div>
  );
}

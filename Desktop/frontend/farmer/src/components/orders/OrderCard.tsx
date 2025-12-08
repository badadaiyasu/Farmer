// src/components/orders/OrderCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { OrderStatusBadge } from "./OrderStatusBadge";
import type { Order } from "../../types/order"; // 改为类型导入
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/ui/button";
import { useUpdateOrderStatus } from "../../lib/api/orders";
import { OrderDetailsDialog } from "./OrderDetailsDialog";
import { useState } from "react";

interface Props {
  order: Order;
  view: "buyer" | "farmer";
}

export function OrderCard({ order, view }: Props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const updateStatus = useUpdateOrderStatus();

  const handleStatus = (status: "accepted" | "rejected") => {
    updateStatus.mutate({ orderId: order.id, status });
  };

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">{order.product.name}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {t("order.id")}: #{order.id.slice(0, 8)}
              </p>
            </div>
            <OrderStatusBadge status={order.status} />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">{t("order.quantity")}</p>
              <p className="font-semibold">{order.quantity} {order.product.unit}</p>
            </div>
            <div>
              <p className="text-muted-foreground">{t("order.total")}</p>
              <p className="font-semibold text-lg">ETB {order.total_price.toLocaleString()}</p>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            {format(new Date(order.created_at), "PPP")}
          </div>

          {view === "farmer" && order.status === "pending" && (
            <div className="flex gap-3 pt-3">
              <Button
                size="sm"
                className="flex-1"
                onClick={() => handleStatus("accepted")}
                disabled={updateStatus.isPending}
              >
                {t("order.accept")}
              </Button>
              <Button
                size="sm"
                variant="destructive"
                className="flex-1"
                onClick={() => handleStatus("rejected")}
                disabled={updateStatus.isPending}
              >
                {t("order.reject")}
              </Button>
            </div>
          )}

          <Button variant="outline" className="w-full" onClick={() => setOpen(true)}>
            {t("order.view_details")}
          </Button>
        </CardContent>
      </Card>

      <OrderDetailsDialog order={order} open={open} onOpenChange={setOpen} view={view} />
    </>
  );
}
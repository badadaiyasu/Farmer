// src/components/orders/OrderDetailsDialog.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import type { Order } from "../../types/order"; // 改为类型导入
import { OrderStatusBadge } from "./OrderStatusBadge";
import { useTranslation } from "react-i18next";
import { Separator } from "../../components/ui/separator";

interface Props {
  order: Order;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  view: "buyer" | "farmer";
}

export function OrderDetailsDialog({ order, open, onOpenChange, view }: Props) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{t("order.order_details")}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Status</span>
            <OrderStatusBadge status={order.status} />
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">{order.product.name}</h4>
            <p className="text-sm text-muted-foreground">
              {order.quantity} × ETB {order.product.price} ={" "}
              <span className="font-bold text-lg">ETB {order.total_price}</span>
            </p>
          </div>

          {order.message && (
            <div>
              <h4 className="font-semibold">{t("order.buyer_message")}</h4>
              <p className="mt-1 text-sm bg-muted p-3 rounded-md">{order.message}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">{view === "buyer" ? t("farmer") : t("buyer")}</p>
              <p className="font-medium">
                {view === "buyer" ? order.farmer.name : order.buyer.name}
              </p>
              <p className="text-muted-foreground">{view === "buyer" ? "" : order.buyer.phone}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
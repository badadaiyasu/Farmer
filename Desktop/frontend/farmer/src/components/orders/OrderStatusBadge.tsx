// src/components/orders/OrderStatusBadge.tsx
import { Badge } from "../../components/ui/badge";
import { useTranslation } from "react-i18next";
import type { OrderStatus } from "../../types/order"; // 改为类型导入

const statusConfig: Record<OrderStatus, { color: string; label: string }> = {
  pending: { color: "bg-yellow-500", label: "order.status.pending" },
  accepted: { color: "bg-green-500", label: "order.status.accepted" },
  rejected: { color: "bg-red-500", label: "order.status.rejected" },
  completed: { color: "bg-blue-600", label: "order.status.completed" },
  cancelled: { color: "bg-gray-500", label: "order.status.cancelled" },
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const { t } = useTranslation();
  const config = statusConfig[status];

  return (
    <Badge className={`${config.color} text-white font-medium`}>
      {t(config.label)}
    </Badge>
  );
}
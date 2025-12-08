// src/lib/api/orders.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Order, CreateOrderData, OrderStatus } from "../../types/order";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  withCredentials: true,
});

export const useCreateOrder = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateOrderData) =>
      api.post<Order>("/orders/", data).then((res) => res.data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useBuyerOrders = () => {
  return useQuery<Order[]>({
    queryKey: ["orders", "buyer"],
    queryFn: () => api.get("/orders/buyer/").then((res) => res.data),
  });
};

export const useFarmerOrders = () => {
  return useQuery<Order[]>({
    queryKey: ["orders", "farmer"],
    queryFn: () => api.get("/orders/farmer/").then((res) => res.data),
  });
};

export const useUpdateOrderStatus = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ orderId, status }: { orderId: string; status: OrderStatus }) =>
      api.patch(`/orders/${orderId}/status/`, { status }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};

// src/types/order.ts
export type OrderStatus = "pending" | "accepted" | "rejected" | "completed" | "cancelled";

export interface Order {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    unit: string;
    language: "en" | "am" | "om";
  };
  buyer: {
    id: string;
    name: string;
    phone: string;
  };
  farmer: {
    id: string;
    name: string;
  };
  quantity: number;
  total_price: number;
  message?: string;
  status: OrderStatus;
  created_at: string;
  updated_at: string;
}

export interface CreateOrderData {
  productId: string;
  quantity: number;
  message?: string;
}
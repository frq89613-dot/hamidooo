export type OrderStatus =
  | "pending"
  | "processing"
  | "completed"
  | "cancelled"
  | string;

export interface Order {
  id: string;
  customer_name: string | null;
  customer_email: string | null;
  product: string | null;
  amount: number | null;
  status: OrderStatus | null;
  created_at: string | null;
}

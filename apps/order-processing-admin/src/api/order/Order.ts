import { OrderItem } from "../orderItem/OrderItem";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  status?: "Option1" | null;
  updatedAt: Date;
  user: string | null;
};

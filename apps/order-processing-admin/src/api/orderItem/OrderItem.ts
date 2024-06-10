import { Order } from "../order/Order";

export type OrderItem = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  price: number | null;
  product: string | null;
  quantity: number | null;
  updatedAt: Date;
};

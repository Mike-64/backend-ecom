import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  user?: string | null;
};

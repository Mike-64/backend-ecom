import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "user";

export const OrderTitle = (record: TOrder): string => {
  return record.user?.toString() || String(record.id);
};

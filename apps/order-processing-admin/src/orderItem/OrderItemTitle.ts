import { OrderItem as TOrderItem } from "../api/orderItem/OrderItem";

export const ORDERITEM_TITLE_FIELD = "product";

export const OrderItemTitle = (record: TOrderItem): string => {
  return record.product?.toString() || String(record.id);
};

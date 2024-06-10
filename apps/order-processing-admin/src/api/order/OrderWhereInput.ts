import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  status?: "Option1";
  user?: StringNullableFilter;
};

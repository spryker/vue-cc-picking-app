/* eslint-disable camelcase */

import { OrderStatus } from "../order-status";

// TODO: Must be refactored according to the contract!!!
export interface Order {
  number_of_items: number;
  order_reference: string;
  created_at: string;
  cusotmer_reference: number;
  id: string;
  grand_total_formatted: string;
  status: OrderStatus;
  cartNote: string;
  products: OrderProduct[];
}

export interface OrderStatusUpdate {
  orderId: string;
  status: OrderStatus;
}

export interface OrderProduct {
  productName: string;
  productType: string;
  count: number;
}

export interface OrderError {
  error: any;
}

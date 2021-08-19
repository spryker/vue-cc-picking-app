import { OrderStatus } from "../order-status";
import { Order } from "./order";

export const mockOrders: Order[] = [
  {
    id: "DE_123456789",
    created_at: "2021-03-23T13:42:00+0000",
    order_reference: "DE_123456789",
    cusotmer_reference: 0,
    number_of_items: 28,
    grand_total_formatted: "$25.41",
    status: OrderStatus.ReadyForPicking,
    products: [
      {
        productName: "string",
        productType: "Frozen",
        count: 10,
      },
      {
        productName: "string",
        productType: "Ambient",
        count: 5,
      },
      {
        productName: "string",
        productType: "Chilled",
        count: 8,
      },
      {
        productName: "string",
        productType: "Fresh",
        count: 5,
      },
    ],
  },
  {
    id: "DE_14242522",
    created_at: "2021-03-30T15:52:20+0000",
    order_reference: "DE_14242522",
    cusotmer_reference: 0,
    number_of_items: 13,
    grand_total_formatted: "$16.30",
    status: OrderStatus.ReadyForDelivery,
    products: [
      {
        productName: "string",
        productType: "Frozen",
        count: 8,
      },
      {
        productName: "string",
        productType: "Ambient",
        count: 5,
      },
    ],
  },
  {
    id: "DE_14542522",
    created_at: "2021-03-30T15:52:20+0000",
    order_reference: "DE_14242522",
    cusotmer_reference: 0,
    number_of_items: 18,
    grand_total_formatted: "$16.30",
    status: OrderStatus.ReadyForDelivery,
    products: [
      {
        productName: "string",
        productType: "Chilled",
        count: 8,
      },
      {
        productName: "string",
        productType: "Fresh",
        count: 10,
      },
    ],
  },
  {
    id: "DE_14242522",
    created_at: "2021-03-30T15:52:20+0000",
    order_reference: "DE_14242522",
    cusotmer_reference: 0,
    number_of_items: 13,
    grand_total_formatted: "$16.30",
    status: OrderStatus.ReadyForDelivery,
    products: [
      {
        productName: "string",
        productType: "Frozen",
        count: 8,
      },
      {
        productName: "string",
        productType: "Ambient",
        count: 5,
      },
    ],
  },
];

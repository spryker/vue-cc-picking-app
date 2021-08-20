/* eslint-disable no-useless-constructor */

import { mockOrders } from "./order-mocks";
import { Order } from "./order";
import { reactive } from "vue";

export class OrderApiClient {
  getOrders(): Order[] {
    const orders: Order[] = mockOrders;

    return reactive(orders);
  }

  getOrder(id: string): Order {
    const currentOrder: Order[] = mockOrders.filter((item) => item.id === id);

    const order = currentOrder[0];

    return reactive(order);
  }
}

import { ApiClient } from "@/features/core/api";

import { Order } from "../entities";

export class OrderApiClient {
  constructor(private api: ApiClient) {}

  async getOrders(): Promise<Order[]> {
    const ordersResponse = await this.api.client.get<any[]>("/orders");
    const orders = ordersResponse.data.map((order) => Order.from(order));
    return orders ?? [];
  }
}

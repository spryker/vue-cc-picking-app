import { apiPlugin } from "@/features/core/api";
import { onlineEntityRepositoryRegistryPlugin } from "@/features/core/entity-repository";
import {
  ExecPluginFactory,
  ProviderPluginFactory,
} from "@/features/core/plugin";

import { Order } from "../entities";
import { OrderApiClient } from "./order";

export * from "./order";

export interface OrdersApiClient {
  order: OrderApiClient;
}

export const ordersApiPlugin = ProviderPluginFactory.create<OrdersApiClient>({
  key: Symbol("OrdersApiClient"),
  defaultFactory: {
    create: () => ({ order: new OrderApiClient(apiPlugin.get()) }),
  },
});

export const ordersApiRegistryPlugin = ExecPluginFactory.fn(() => {
  const { order } = ordersApiPlugin.get();

  onlineEntityRepositoryRegistryPlugin.get().register(Order, {
    getAll: order.getOrders.bind(order),
  });
});

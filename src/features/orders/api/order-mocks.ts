import { mockEntityRepositoryRegistryPlugin } from "@/features/core/entity-repository";
import { ExecPluginFactory } from "@/features/core/plugin";

import { Order } from "../entities";

export const ordersApiMocksRegistryPlugin = ExecPluginFactory.fn(() => {
  mockEntityRepositoryRegistryPlugin.get().register(Order, {
    getAll: async () => [
      Order.from({ id: "1111", type: "order" }),
      Order.from({ id: "2222", type: "order" }),
      Order.from({ id: "3333", type: "order" }),
    ],
  });
});

import { MultiPluginFactory } from "@/features/core/plugin";

import { ordersApiPlugin, ordersApiRegistryPlugin } from "./api";

export * from "./views";
export * from "./api";
export * from "./entities";

export const ordersPlugin = MultiPluginFactory.with({
  ordersApiPlugin,
  ordersApiRegistryPlugin,
  // To enable orders mocks - add orders mocks plugin
  // ordersApiMocksRegistryPlugin,
});

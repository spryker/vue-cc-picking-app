import { ProviderPluginFactory } from "@/features/core/plugin";

import { MockStorage } from "./mock-storage";
import { Storage } from "./storage";

export const storagePlugin = ProviderPluginFactory.create<Storage>({
  key: Symbol("Storage"),
  defaultFactory: { create: () => new MockStorage() },
});

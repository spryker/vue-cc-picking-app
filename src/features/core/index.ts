import { ApiClientOptions, apiPlugin } from "./api";
import {
  entityRepositoryPlugin,
  mockEntityRepositoryRegistryPlugin,
  onlineEntityRepositoryRegistryPlugin,
} from "./entity-repository";
import { MultiPluginFactory } from "./plugin";
import { router } from "./router";
import { storagePlugin } from "./storage/plugin";

export interface CorePluginOptions {
  apiPlugin: ApiClientOptions;
}

export const corePlugin = MultiPluginFactory.with({
  storagePlugin,
  apiPlugin,
  mockEntityRepositoryRegistryPlugin,
  onlineEntityRepositoryRegistryPlugin,
  entityRepositoryPlugin,
  router,
});

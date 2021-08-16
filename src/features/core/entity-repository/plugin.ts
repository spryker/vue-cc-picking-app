import { ProviderPluginFactory } from "@/features/core/plugin";
import { EntityRepository } from "./entity-repository";
import { mockEntityRepositoryRegistryPlugin } from "./mock-entity-repository";
import {
  OnlineEntityRepository,
  onlineEntityRepositoryRegistryPlugin,
} from "./online-entity-repository";

export const entityRepositoryPlugin =
  ProviderPluginFactory.create<EntityRepository>({
    key: Symbol("EntityRepository"),
    defaultFactory: {
      create: () =>
        new OnlineEntityRepository({
          // To enable real API - switch to online registry
          registry: onlineEntityRepositoryRegistryPlugin.get(),
          // To enable mocks - switch to mock registry
          // registry: mockEntityRepositoryRegistryPlugin.get(),
        }),
    },
  });

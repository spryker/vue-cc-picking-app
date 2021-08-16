import {
  createRegistryEntityRepositoryRegistryPlugin,
  RegistryEntityRepository,
  RegistryEntityRepositoryOptions,
} from "./registry-entity-repository";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OnlineEntityRepositoryOptions
  extends RegistryEntityRepositoryOptions {}

export class OnlineEntityRepository extends RegistryEntityRepository {}

export const onlineEntityRepositoryRegistryPlugin =
  createRegistryEntityRepositoryRegistryPlugin(
    Symbol("OnlineEntityRepositoryRegistry")
  );

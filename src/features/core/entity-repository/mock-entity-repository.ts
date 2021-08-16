import {
  createRegistryEntityRepositoryRegistryPlugin,
  RegistryEntityRepository,
  RegistryEntityRepositoryOptions,
} from "./registry-entity-repository";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MockEntityRepositoryOptions
  extends RegistryEntityRepositoryOptions {}

export class MockEntityRepository extends RegistryEntityRepository {}

export const mockEntityRepositoryRegistryPlugin =
  createRegistryEntityRepositoryRegistryPlugin(
    Symbol("MockEntityRepositoryRegistry")
  );

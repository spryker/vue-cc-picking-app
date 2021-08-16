import { ProviderPluginFactory } from "@/features/core/plugin";
import { Type } from "@/utils/types";

import { AnyEntity, Entity } from "./entity";
import {
  EntityRepository,
  RepositoryReadByIdOptions,
  RepositoryReadOptions,
  RepositoryWriteOptions,
} from "./entity-repository";

export interface RegistryEntityRepositoryOptions {
  registry: RegistryEntityRepositoryRegistry;
}

export abstract class RegistryEntityRepository implements EntityRepository {
  private registry = this.options.registry.getMap();

  constructor(private options: RegistryEntityRepositoryOptions) {}

  async getAll<T extends Entity>(
    entity: Type<T>,
    options?: RepositoryReadOptions
  ): Promise<T[]> {
    const api = this.getApi(entity);

    if (!api.getAll) {
      throw new Error(
        `${this.constructor.name}: ${entity.name} does not support getAll API!`
      );
    }

    return api.getAll(options);
  }

  async getById<T extends Entity>(
    entity: Type<T>,
    options: RepositoryReadByIdOptions
  ): Promise<T | null> {
    const api = this.getApi(entity);

    if (!api.getById) {
      throw new Error(
        `${this.constructor.name}: ${entity.name} does not support getById API!`
      );
    }

    return api.getById(options);
  }

  async save<T extends AnyEntity>(
    entity: T,
    options?: RepositoryWriteOptions
  ): Promise<T & Entity> {
    const entityType = entity.constructor as Type<T>;
    const api = this.getApi(entityType);

    if (!api.save) {
      throw new Error(
        `${this.constructor.name}: ${entityType.name} does not support save API!`
      );
    }

    return api.save(entity, options) as Promise<T & Entity>;
  }

  async remove(
    entity: Entity,
    options?: RepositoryWriteOptions
  ): Promise<void> {
    const entityType = entity.constructor as Type<Entity>;
    const api = this.getApi(entityType);

    if (!api.delete) {
      throw new Error(
        `${this.constructor.name}: ${entityType.name} does not support delete API!`
      );
    }

    return api.delete(entity, options);
  }

  private getApi<T extends AnyEntity>(entity: Type<T>): RegistryEntityApi<T> {
    const api = this.registry.get(entity);

    if (!api) {
      throw new Error(
        `${this.constructor.name}: No API registered for entity ${entity.name}!`
      );
    }

    return api as RegistryEntityApi<T>;
  }
}

export interface RegistryEntityApi<T extends AnyEntity> {
  getAll?(options?: RepositoryReadOptions): Promise<T[]>;
  getById?(options?: RepositoryReadByIdOptions): Promise<T | null>;
  save?(entity: T, options?: RepositoryWriteOptions): Promise<T>;
  delete?(entity: T, options?: RepositoryWriteOptions): Promise<void>;
}

export class RegistryEntityRepositoryRegistry {
  private map: Map<Type<AnyEntity>, RegistryEntityApi<AnyEntity>> = new Map();

  register<T extends AnyEntity>(
    entity: Type<T>,
    api: RegistryEntityApi<T>
  ): this {
    this.map.set(entity, api);
    return this;
  }

  getMap(): Map<Type<AnyEntity>, RegistryEntityApi<AnyEntity>> {
    return this.map;
  }
}

export const createRegistryEntityRepositoryRegistryPlugin = (key: symbol) =>
  ProviderPluginFactory.create<RegistryEntityRepositoryRegistry>({
    key,
    defaultFactory: { create: () => new RegistryEntityRepositoryRegistry() },
  });

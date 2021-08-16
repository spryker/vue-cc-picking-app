import {
  StorageReadIdOptions,
  StorageReadOptions,
  StorageWriteOptions,
} from "@/features/core/storage";
import { Type } from "@/utils/types";

import { AnyEntity, Entity } from "./entity";

export interface EntityRepository {
  getAll<T extends Entity>(
    entity: Type<T>,
    options?: RepositoryReadOptions
  ): Promise<T[]>;
  getById<T extends Entity>(
    entity: Type<T>,
    options: RepositoryReadByIdOptions
  ): Promise<T | null>;
  save<T extends AnyEntity>(
    entity: T,
    options?: RepositoryWriteOptions
  ): Promise<T & Entity>;
  remove(entity: Entity, options?: RepositoryWriteOptions): Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RepositoryReadOptions extends StorageReadOptions {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RepositoryReadByIdOptions extends StorageReadIdOptions {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RepositoryWriteOptions extends StorageWriteOptions {}

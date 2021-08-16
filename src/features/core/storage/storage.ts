import { Storable } from "./storable";

export interface Storage {
  getAll<T extends Storable>(
    data: T,
    options?: StorageReadOptions
  ): Promise<T[]>;
  getById<T extends Storable>(
    data: T,
    options: StorageReadIdOptions
  ): Promise<T | null>;
  save<T>(data: T, options?: StorageWriteOptions): Promise<T & Storable>;
  remove(data: Storable, options?: StorageWriteOptions): Promise<void>;
}

export interface StorageReadOptions {
  limit?: number;
  offset?: number;
}

export interface StorageReadIdOptions {
  id: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StorageWriteOptions {}

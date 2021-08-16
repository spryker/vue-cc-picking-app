import { Storable } from "./storable";
import {
  Storage,
  StorageReadIdOptions,
  StorageReadOptions,
  StorageWriteOptions,
} from "./storage";

export class MockStorage implements Storage {
  async getAll<T extends Storable>(
    data: T,
    options?: StorageReadOptions
  ): Promise<T[]> {
    return [];
  }

  async getById<T extends Storable>(
    data: T,
    options: StorageReadIdOptions
  ): Promise<T | null> {
    return data;
  }

  async save<T>(data: T, options?: StorageWriteOptions): Promise<T & Storable> {
    return { ...data, id: "mock" };
  }

  async remove(data: Storable, options?: StorageWriteOptions): Promise<void> {
    return;
  }
}

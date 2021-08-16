import { Storable } from "@/features/core/storage";

export interface Entity extends NewEntity, Storable {
  id: string;
}

export interface NewEntity {
  type: string;
}

export type AnyEntity = Entity | NewEntity;

export class RestorableEntity {
  static from<T>(this: new () => T, data: unknown): T {
    const entity = new this();
    Object.assign(entity, data);
    return entity;
  }
}

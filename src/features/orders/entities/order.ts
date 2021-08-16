import {
  Entity,
  NewEntity,
  RestorableEntity,
} from "@/features/core/entity-repository";

export class NewOrder extends RestorableEntity implements NewEntity {
  type = "order";
}

export class Order extends NewOrder implements Entity {
  type = "order";
  id!: string;
}

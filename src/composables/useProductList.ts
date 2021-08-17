import { filter } from "lodash";
import { OrderProduct } from "@/api";

export default function useProductList(products: OrderProduct[] | undefined) {
  const fresh = filter(products, (item) => {
    return item.productType.toLowerCase() === "fresh";
  })[0];

  const chilled = filter(products, (item) => {
    return item.productType.toLowerCase() === "chilled";
  })[0];

  const frozen = filter(products, (item) => {
    return item.productType.toLowerCase() === "frozen";
  })[0];

  const ambient = filter(products, (item) => {
    return item.productType.toLowerCase() === "ambient";
  })[0];

  return {
    fresh,
    chilled,
    frozen,
    ambient,
  };
}

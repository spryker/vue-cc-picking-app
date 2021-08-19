import { OrderProduct } from "@/api";

export default function useProductList(products: OrderProduct[]) {
  const fresh = products.filter((item) => {
    return item.productType.toLowerCase() === "fresh";
  })[0];

  const chilled = products.filter((item) => {
    return item.productType.toLowerCase() === "chilled";
  })[0];

  const frozen = products.filter((item) => {
    return item.productType.toLowerCase() === "frozen";
  })[0];

  const ambient = products.filter((item) => {
    return item.productType.toLowerCase() === "ambient";
  })[0];

  return {
    fresh,
    chilled,
    frozen,
    ambient,
  };
}

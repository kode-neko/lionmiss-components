import { LMSize, LMColor } from "../LMEnum";
import { LMProduct } from "../LMProduct";

type LMCartProduct = {
  id: string;
  size: LMSize;
  color?: LMColor;
  unds: number;
  product: LMProduct;
};

export { LMCartProduct };

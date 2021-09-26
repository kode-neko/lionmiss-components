import { LMCartProduct } from "./LMCartProduct";
import { LMPromo } from "../LMPromo";

type LMCart = {
  products: LMCartProduct[];
  promo?: LMPromo;
  taxes: number;
};

export { LMCart };

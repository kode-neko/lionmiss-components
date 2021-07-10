import { IconName } from "@fortawesome/fontawesome-svg-core";

interface LMMenuOpt {
  name: string;
  opts?: LMMenuOpt[];
  path?: string[];
  icon?: IconName;
}

type LMProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  unds: number;
};

type LMCartProduct = {
  id: string;
  unds: number;
  product: LMProduct;
};

type LMCart = {
  id: string;
  items: LMCartProduct[];
};

type LMUserInfo = {
  lang: string;
  cart: LMCart;
};

export { LMMenuOpt, LMProduct, LMCartProduct, LMCart, LMUserInfo };

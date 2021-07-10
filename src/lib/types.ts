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

type LMUserInfo = {
  lang: string;
  cart: LMCartProduct[];
};

export { LMMenuOpt, LMProduct, LMCartProduct, LMUserInfo };

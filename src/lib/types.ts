import { IconName } from "@fortawesome/fontawesome-svg-core";
import { LMMainBarProps } from "./LMMainBar/types";
import { LMMainFooterProps } from "./LMMainFooter/types";
interface LMMenuOpt {
  name: string;
  opts?: LMMenuOpt[];
  path?: string[];
  icon?: IconName;
  res?: boolean;
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

type LMMainBarConfig = Omit<LMMainBarProps, "isMobile">;

type LMMainFooterConfig = Omit<LMMainFooterProps, "isMobile">;

export {
  LMMenuOpt,
  LMProduct,
  LMCartProduct,
  LMUserInfo,
  LMMainBarConfig,
  LMMainFooterConfig,
};

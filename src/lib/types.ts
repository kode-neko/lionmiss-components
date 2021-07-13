import { LMMainBarProps } from "./LMMainBar/types";
import { LMMainFooterProps } from "./LMMainFooter/types";
interface LMMenuOpt {
  title: string | JSX.Element;
  submenu?: LMMenuOpt[];
  path?: string[];
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

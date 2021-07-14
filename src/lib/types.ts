import { LMMainBarProps } from "./LMMainBar/types";
import { LMMainFooterProps } from "./LMMainFooter/types";
interface LMMenuOpt {
  title: string | JSX.Element;
  submenu?: LMMenuOpt[];
  path?: string[];
  res?: boolean;
}

enum LMColor {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Green = 'green',
  Aqua = 'aqua',
  Blue = 'blue',
  Purple = 'purple',
  Pink = 'pink',
  White = 'white',
  Black = 'black'
}

type LMProductProps = {
  key: string;
  value: string;
}

type LMProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  details: LMProductProps[];
  colors: LMColor[];
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
  LMColor,
  LMMainBarConfig,
  LMMainFooterConfig,
};

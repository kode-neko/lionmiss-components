import { LMFilterProps } from "./LMFilter/types";
import { LMMainBarProps } from "./LMMainBar/types";
import { LMMainFooterProps } from "./LMMainFooter/types";
interface LMMenuOpt {
  title: string | JSX.Element;
  submenu?: LMMenuOpt[];
  path?: string[];
  res?: boolean;
}

enum LMColor {
  Red = "red",
  Orange = "orange",
  Yellow = "yellow",
  Green = "green",
  Aqua = "aqua",
  Blue = "blue",
  Purple = "purple",
  Pink = "pink",
  White = "white",
  Black = "black",
}

enum LMSize {
  XS = "xs",
  S = "s",
  M = "m",
  L = "l",
  XL = "xl",
  XXL = "xxl",
}

type LMProductProps = {
  key: string;
  value: string;
};

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

type LMFilterPropsSelected = Pick<
  LMFilterProps,
  | "selectedListColor"
  | "selectedListSize"
  | "valMinPrice"
  | "valMaxPrice"
  | "selectedListStyle"
>;


export {
  LMMenuOpt,
  LMProduct,
  LMCartProduct,
  LMUserInfo,
  LMColor,
  LMSize,
  LMMainBarConfig,
  LMMainFooterConfig,
  LMFilterPropsSelected
};

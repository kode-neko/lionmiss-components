import { LMFilterProps } from "./LMFilter/types";
import { LMMainBarProps } from "./LMMainBar/types";
import { LMMainFooterProps } from "./LMMainFooter/types";

type LMMeasures = {
  chest: number;
  waist: number;
  hip: number;
  size: LMSize;
};

type LMUser = {
  username: string;
  avatar: string;
  measures: LMMeasures;
  email: string;
  addresses: LMAddress[];
};

type LMUserInfo = {
  lang: string;
  currency: string;
  cart: LMCart;
  user: LMUser;
};

type LMCart = {
  products: LMCartProduct[];
  promo?: LMPromo;
  taxes: number;
};

type LMProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  details: LMProductProps[];
  colors: LMColor[];
  unds: number;
  isFav: boolean;
  imgs: LMImgAttr[];
};

type LMComment = {
  id: string;
  comment: string;
  date: Date;
  ratting: number;
  measures: LMMeasures;
  user: LMUser;
  imgs: LMImgAttr[];
};

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

interface LMMenuOpt {
  title: string | JSX.Element;
  submenu?: LMMenuOpt[];
  path?: string[];
  res?: boolean;
}

type LMMainBarConfig = Omit<LMMainBarProps, "isMobile">;

type LMMainFooterConfig = Omit<LMMainFooterProps, "isMobile">;

type LMProductProps = {
  key: string;
  value: string;
};

type LMCartProduct = {
  id: string;
  size: LMSize;
  color?: LMColor;
  unds: number;
  product: LMProduct;
};

type LMFilterPropsSelected = Pick<
  LMFilterProps,
  | "selectedListColor"
  | "selectedListSize"
  | "valMinPrice"
  | "valMaxPrice"
  | "selectedListStyle"
>;

type LMPropsBuy = {
  productId: string;
  color?: LMColor;
  size?: LMSize;
  qty: number;
};

type LMImgAttr = {
  key: string;
  src: string;
  title: string;
  alt: string;
  main?: boolean;
};

type LMPathSegment = {
  name?: string;
  href: string;
  title: string;
};

enum LMPromoType {
  Percent,
  Qty,
}

type LMPromo = {
  type: LMPromoType;
  qty: number;
};

type LMAddress = {
  name: string;
  adress: string;
  country: string;
  state: string;
  town: string;
  zip: string;
  phone: string;
  mail: string;
  comments: string;
};

type LMCreditCardObj = {
  creditNumber: number;
  fullName: string;
  month: number;
  year: number;
  cvv: number;
};

export {
  LMProduct,
  LMComment,
  LMUserInfo,
  LMUser,
  LMColor,
  LMSize,
  LMMenuOpt,
  LMMainBarConfig,
  LMMainFooterConfig,
  LMProductProps,
  LMCart,
  LMCartProduct,
  LMFilterPropsSelected,
  LMPropsBuy,
  LMImgAttr,
  LMPathSegment,
  LMPromoType,
  LMPromo,
  LMAddress,
  LMCreditCardObj
};

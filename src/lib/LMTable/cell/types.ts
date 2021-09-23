import { LMColor, LMImgAttr, LMSize } from "../../types";

type LMTableProductDescProps = {
  img: LMImgAttr;
  name: string;
};
type LMTableProductAttrsProps = {
  color?: LMColor;
  size: LMSize;
};
type LMTableProductQtyProps = {
  qty: number;
  min: number;
  max: number;
  onMinus?: (val: number) => void;
  onMax?: (val: number) => void;
};
type LMTableProductPriceProps = {
  price: number;
  lang: string;
  currency: string;
};

export {
  LMTableProductDescProps,
  LMTableProductAttrsProps,
  LMTableProductQtyProps,
  LMTableProductPriceProps,
};

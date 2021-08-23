import { LMColor, LMImgAttr, LMSize } from "../../types";

type LMTableProductDescProps = {
  img: LMImgAttr;
  name: string;
};
type LMTableProductAttrsProps = {
  color: LMColor;
  size: LMSize;
};
type LMTableProductQtyProps = {
  qty: number;
  min: number;
  max: number;
};
type LMTableProductPriceProps = {
  price: number;
  lang: number;
  currency: string;
};

export {
  LMTableProductDescProps,
  LMTableProductAttrsProps,
  LMTableProductQtyProps,
  LMTableProductPriceProps,
};

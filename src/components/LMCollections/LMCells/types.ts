import { LMColor, LMSize, LMAddress, LMImg } from "lionmiss-core";

type LMCellProductDescProps = {
  img: LMImg;
  name: string;
};
type LMCellProductAttrsProps = {
  color?: LMColor;
  size: LMSize;
};
type LMCellProductQtyProps = {
  qty: number;
  min: number;
  max: number;
  onMinus?: (val: number) => void;
  onMax?: (val: number) => void;
};
type LMCellProductPriceProps = {
  price: number;
  lang: string;
  currency: string;
};
type LMCellAddressProps = {
  address: LMAddress;
  checked: boolean;
  onCheck: () => void;
};

export type {
  LMCellProductDescProps,
  LMCellProductAttrsProps,
  LMCellProductQtyProps,
  LMCellProductPriceProps,
  LMCellAddressProps,
};

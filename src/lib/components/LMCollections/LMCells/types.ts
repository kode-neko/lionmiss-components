import { LMColor, LMImgAttr, LMSize } from "../types";
import { LMAddress } from "../types";

type LMCellProductDescProps = {
  img: LMImgAttr;
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
}

export {
  LMCellProductDescProps,
  LMCellProductAttrsProps,
  LMCellProductQtyProps,
  LMCellProductPriceProps,
  LMCellAddressProps
};

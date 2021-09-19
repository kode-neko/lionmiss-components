import { LMProduct, LMPropsBuy } from "../types";

type LMInfoProductProps = {
  product: LMProduct;
  onClickFav: (check: boolean) => void;
  onClickBuy: (buy: LMPropsBuy) => void;
};

export { LMInfoProductProps };

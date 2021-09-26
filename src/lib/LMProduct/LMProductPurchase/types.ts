import { LMProduct, LMPropsBuy } from "../types";

type LMProductPurchaseProps = {
  product: LMProduct;
  onClickFav: (check: boolean) => void;
  onClickBuy: (buy: LMPropsBuy) => void;
};

export { LMProductPurchaseProps };

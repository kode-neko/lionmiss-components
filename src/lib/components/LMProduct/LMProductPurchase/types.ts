import { LMProduct, LMPropsBuy } from "lionmiss-core";

type LMProductPurchaseProps = {
  lang: string;
  currency: string;
  product: LMProduct;
  min: number;
  max: number;
  onClickFav: (check: boolean) => void;
  onClickBuy: (buy: LMPropsBuy) => void;
};

export { LMProductPurchaseProps };

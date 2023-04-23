import { LMProduct, LMPropsBuy } from "lionmiss-core";

type LMProductPurchaseProps = {
  lang: string;
  currency: string;
  product: LMProduct;
  isFav: boolean;
  min: number;
  max: number;
  onClickFav: (check: boolean) => void;
  onClickBuy: (buy: LMPropsBuy) => void;
};

export type { LMProductPurchaseProps };

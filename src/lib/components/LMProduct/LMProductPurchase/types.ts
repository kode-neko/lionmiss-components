import { LMProduct, LMPropsBuy } from "../../../../core/model";

type LMProductPurchaseProps = {
  lang: string;
  currency: string;
  product: LMProduct;
  onClickFav: (check: boolean) => void;
  onClickBuy: (buy: LMPropsBuy) => void;
};

export { LMProductPurchaseProps };

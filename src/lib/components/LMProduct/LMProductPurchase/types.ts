import { LMProduct, LMPropsBuy } from "../../../../core/model";

type LMProductPurchaseProps = {
  product: LMProduct;
  onClickFav: (check: boolean) => void;
  onClickBuy: (buy: LMPropsBuy) => void;
};

export { LMProductPurchaseProps };

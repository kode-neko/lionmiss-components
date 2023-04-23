import { LMProduct } from "lionmiss-core";

type LMProductInfoProps = {
  lang: string;
  currency: string;
  img: string;
  product: LMProduct;
  onClickProduct: () => void;
  onClickAdd: () => void;
  onClickFav: () => void;
};

export default LMProductInfoProps;

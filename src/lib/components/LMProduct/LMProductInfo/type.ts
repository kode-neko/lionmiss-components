import { LMProduct } from "../../../../core/model";

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

import { LMProduct } from "../types";

type LMProductInfoProps = {
  img: string;
  product: LMProduct;
  onClickProduct: () => void;
  onClickAdd: () => void;
  onClickFav: () => void;
};

export default LMProductInfoProps;

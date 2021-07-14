import { LMProduct } from "../types";

type LMProductCardProps = {
  img: string;
  product: LMProduct;
  onClickProduct: () => void;
  onClickAdd: () => void;
  onClickFav: () => void;
};

export default LMProductCardProps;

type LMProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  details: LMProductProps[];
  colors: LMColor[];
  unds: number;
  isFav: boolean;
  imgs: LMImgAttr[];
};

export { LMProduct };

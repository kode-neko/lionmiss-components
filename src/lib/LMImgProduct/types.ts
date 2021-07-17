type LMImgAttr = {
  key: string;
  src: string;
  title: string;
  alt: string;
};

type LMImgProductProps = {
  imgList: LMImgAttr[];
  thumbList: LMImgAttr[];
};

export { LMImgAttr, LMImgProductProps };

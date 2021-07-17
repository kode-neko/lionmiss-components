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

type LMImgProductModalProps = {
  img: LMImgAttr;
  onClose: () => void;
};

export { LMImgAttr, LMImgProductProps, LMImgProductModalProps };

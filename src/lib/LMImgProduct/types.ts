import { LMImgAttr } from "../types";

type LMImgProductProps = {
  imgList: LMImgAttr[];
  thumbList: LMImgAttr[];
};

type LMImgProductModalProps = {
  img: LMImgAttr;
  onClose: () => void;
};

export { LMImgAttr, LMImgProductProps, LMImgProductModalProps };

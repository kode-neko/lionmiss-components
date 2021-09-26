import { LMImgAttr } from "../types";

type LMProductPicsProps = {
  imgList: LMImgAttr[];
  thumbList: LMImgAttr[];
};

type LMProductPicsModalProps = {
  img: LMImgAttr;
  onClose: () => void;
};

export { LMImgAttr, LMProductPicsProps, LMProductPicsModalProps };

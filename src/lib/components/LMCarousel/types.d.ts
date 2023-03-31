type StyleList = {
  right: undefined | string;
  transition: undefined | string;
};

type StyleWidth = {
  cont: number;
  units: string;
};

type ImgCarousel = {
  src: string;
  alt: string;
};

type KNCarouselSlidesProps = {
  imgList: ImgCarousel[];
  imgWidth: string;
  index: index;
  transitionDuration?: string;
  transitionTiming?: string;
};

type useKNCarouselData = [
  number,
  string,
  () => void,
  () => void,
  (index: number) => void
]

export {
  StyleList,
  StyleWidth,
  ImgCarousel,
  // CarouselProps,
  // KNCarouselControlsProps,
  KNCarouselSlidesProps,
  useKNCarouselData
};

type LMCarouselProps = {
  imgList: ImgCarousel[];
  width?: number;
  transitionDuration?: string;
  transitionTiming?: string;
};

type LMCarouselControlsProps = {
  imgList: ImgCarousel[];
  imgWidth: string;
  onClickLeft: () => void;
  onClickRight: () => void;
  onClickPage: (index: number) => void;
};

export { LMCarouselProps, LMCarouselControlsProps };

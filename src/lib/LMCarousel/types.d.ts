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

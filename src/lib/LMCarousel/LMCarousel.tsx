import React from "react";
import { useKNCarousel, KNCarouselSlides } from "kodeneko-react-components/dist";
import LMCarouselControls from "./LMCarouselControls";
import styles from "./styles.module.scss";
import { LMCarouselProps } from "./types";

const LMCarousel: React.FC<LMCarouselProps> = ({
  imgList,
  width,
  transitionDuration = "1s",
  transitionTiming = "ease",
}) => {
  const [index, imgWidth, onClickLeft, onClickRight, onClickPage] =
    useKNCarousel(imgList, width);

  return (
    <div className={styles.mainCont} style={{ width: imgWidth }}>
      <div className={styles.contImgs} style={{ maxWidth: imgWidth }}>
        <KNCarouselSlides
          imgList={imgList}
          imgWidth={imgWidth}
          index={index}
          transitionDuration={transitionDuration}
          transitionTiming={transitionTiming}
        />
      </div>
      <div className={styles.contDisplay} style={{ width: imgWidth }}>
        <LMCarouselControls
          imgList={imgList}
          imgWidth={imgWidth}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
          onClickPage={onClickPage}
        />
      </div>
    </div>
  );
};

export default LMCarousel;

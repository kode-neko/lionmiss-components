import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { KNCarouselSlidesProps, StyleList } from "./types";

const KNCarouselSlides: React.FC<KNCarouselSlidesProps> = ({
  imgList,
  imgWidth,
  index,
  transitionDuration,
  transitionTiming,
}: KNCarouselSlidesProps) => {
  const [movement, setMovement] = useState<StyleList>({
    right: "0",
    transition: "",
  });
  useEffect(() => {
    setMovement({
      right: `calc(${imgWidth} * ${index})`,
      transition: `right ${transitionDuration} ${transitionTiming}`,
    });
  }, [imgWidth, index, transitionDuration, transitionTiming]);

  return (
    <ul
      className={styles.list}
      style={{
        ...movement,
        width: `calc(${imgWidth} * ${imgList.length})`,
      }}
    >
      {imgList.map((img, index) => (
        <li className={styles.elementList} key={index}>
          <img
            className={styles.imgEle}
            style={{ width: imgWidth }}
            src={img.src}
            alt={img.alt}
          />
        </li>
      ))}
    </ul>
  );
};

export default KNCarouselSlides;
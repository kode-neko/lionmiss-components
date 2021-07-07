import React from "react";
import styles from "./styles.module.scss";
import { LMCarouselControlsProps } from "./types";

const LMCarouselControls: React.FC<LMCarouselControlsProps> = ({
  imgList,
  imgWidth,
  onClickLeft,
  onClickRight,
  onClickPage,
}) => {
  return (
    <>
      <div className={styles.left} onClick={onClickLeft}>
        <span className={styles.triangleLeft} />
      </div>
      <div className={styles.center}>
        <ul className={styles.list}>
          {imgList.map((img, indexImg) => (
            <li key={indexImg} className={styles.listElement}>
              <span
                className={styles.dot}
                key={indexImg}
                onClick={() => onClickPage(indexImg)}
              >
                •
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right} onClick={onClickRight}>
        <span className={styles.triangleRight} />
      </div>
    </>
  );
};

export default LMCarouselControls;

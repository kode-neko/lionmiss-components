import React, { useState } from "react";
import { LMBaseCompo } from "../LMBaseCompo";
import styles from "./styles.module.scss";
import { LMImgAttr, LMProductPicsProps } from "./types";
import classNames from "classnames";
import { LMModalImg } from "../LMModalImg";

const LMProductPics: React.FC<LMProductPicsProps> = ({ imgList, thumbList }) => {
  const [mainImg, setMainImg] = useState<LMImgAttr>(imgList[0]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const handleClickThumb = (thumb: LMImgAttr) => {
    const img = imgList.find((img) => img.key === thumb.key) as LMImgAttr;
    setMainImg(img);
  };
  return (
    <>
      {visibleModal && (
        <LMModalImg img={mainImg} onClose={() => setVisibleModal(false)} />
      )}
      <LMBaseCompo
        classNameXtra={styles.cont}
        onClick={() => setVisibleModal(true)}
      >
        <div className={styles.imgMain}>
          <img {...mainImg} />
        </div>
        <div className={styles.gallery}>
          {thumbList.map((thumb) => (
            <img
              key={thumb.key}
              className={classNames(
                styles.thumb,
                thumb.key === mainImg.key && styles.selected
              )}
              onClick={() => handleClickThumb(thumb)}
              onMouseEnter={() => handleClickThumb(thumb)}
              src={thumb.src}
              title={thumb.title}
              alt={thumb.alt}
            />
          ))}
        </div>
      </LMBaseCompo>
    </>
  );
};

export default LMProductPics;

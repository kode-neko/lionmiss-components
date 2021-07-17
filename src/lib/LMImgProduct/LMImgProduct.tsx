import React, { useState } from "react";
import { LMBaseComponent } from "../LMBaseComponent";
import styles from "./styles.module.scss";
import { LMImgAttr, LMImgProductProps } from "./types";
import classNames from "classnames";
import LMImgProductModal from "./LMImgProductModal";

const LMImgProduct: React.FC<LMImgProductProps> = ({ imgList, thumbList }) => {
  const [mainImg, setMainImg] = useState<LMImgAttr>(imgList[0]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  console.log("visibleModal:", visibleModal);
  const handleClickThumb = (thumb: LMImgAttr) => {
    const img = imgList.find((img) => img.key === thumb.key) as LMImgAttr;
    setMainImg(img);
  };
  return (
    <>
      {visibleModal && (
        <LMImgProductModal
          img={mainImg}
          onClose={() => setVisibleModal(false)}
        />
      )}
      <LMBaseComponent
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
      </LMBaseComponent>
    </>
  );
};

export default LMImgProduct;

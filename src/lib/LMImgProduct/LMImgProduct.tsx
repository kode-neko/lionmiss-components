import React, { useState } from "react";
import { LMBaseComponent } from "../LMBaseComponent";
import styles from "./styles.module.scss";
import { LMImgAttr, LMImgProductProps } from "./types";
import classNames from "classnames";
import { LMModal } from "../LMModal";

const LMImgProduct: React.FC<LMImgProductProps> = ({ imgList, thumbList }) => {
  const [mainImg, setMainImg] = useState<LMImgAttr>(imgList[0]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  console.log("visibleModal:", visibleModal);
  const handleClickThumb = (thumb: LMImgAttr) => {
    const img = imgList.find((img) => img.key === thumb.key) as LMImgAttr;
    setMainImg(img);
  };
  return (
    <LMBaseComponent
      classNameXtra={styles.cont}
      onClick={() => setVisibleModal(true)}
    >
      <LMModal
        visible={visibleModal}
        title=""
        content={<img {...mainImg} />}
        ok="Accept"
        cancel="Cancel"
        onClickOk={() => console.log("ok")}
        onClickCancel={() => console.log("cancel")}
        onClickClose={() => setVisibleModal(false)}
      />
      <div className={styles.imgMain}>
        <img {...mainImg} />
      </div>
      <div className={styles.gallery}>
        {thumbList.map((thumb) => (
          <div
            key={thumb.key}
            className={classNames(
              styles.thumb,
              thumb.key === mainImg.key && styles.selected
            )}
            onClick={() => handleClickThumb(thumb)}
            onMouseEnter={() => handleClickThumb(thumb)}
          >
            <img {...thumb} />
          </div>
        ))}
      </div>
    </LMBaseComponent>
  );
};

export default LMImgProduct;

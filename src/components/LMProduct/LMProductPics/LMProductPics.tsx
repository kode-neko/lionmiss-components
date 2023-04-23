import React, { useState } from "react";
import { LMBaseCompo } from "../../LMBase";
import styles from "./styles.module.scss";
import { LMImg } from "lionmiss-core";
import { LMProductPicsProps } from "./types";
import classNames from "classnames";
import { LMModalImg } from "../../LMModal";

const LMProductPics: React.FC<LMProductPicsProps> = ({ imgList, thumbList }) => {
  const [mainImg, setMainImg] = useState<LMImg>(imgList[0]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const handleClickThumb = (thumb: LMImg) => {
    const img = imgList.find((img) => img._id === thumb._id) as LMImg;
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
              key={thumb._id}
              className={classNames(
                styles.thumb,
                thumb._id === mainImg._id && styles.selected
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

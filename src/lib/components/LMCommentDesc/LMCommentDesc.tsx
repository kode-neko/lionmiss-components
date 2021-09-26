import React, { useState } from "react";
import { LMBaseCompo } from "../LMBase";
import { LMCommentDescProps } from "./types";
import styles from "./styles.module.scss";
import { starIconLM } from "../LMIcons";
import classNames from "classnames";
import { LMImg } from "../../../core/model";
import { LMModalImg } from "../LMModal";

const MAX_RATING = 5;

const LMCommentDesc: React.FC<LMCommentDescProps> = ({ comment, userInfo }) => {
  const [img, setImg] = useState<LMImg>();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const { user, measures } = comment;

  const ratingCheck = Array(comment.ratting)
    .fill(0)
    .map((ele) => (
      <div key={ele} className={classNames(styles.check)}>
        {starIconLM}
      </div>
    ));

  const ratingNone = Array(MAX_RATING - comment.ratting)
    .fill(0)
    .map((ele) => (
      <div key={ele} className={classNames(styles.none)}>
        {starIconLM}
      </div>
    ));

  const infoMeasures = Object.entries(measures).map(([key, value]) => (
    <div key={key} className={styles.line}>
      <div className={styles.key}>{key}</div>
      <div className={styles.value}>{value}</div>
    </div>
  ));

  const gallery = comment.imgs.map((img) => (
    <div
      key={img.key}
      className={styles.img}
      onClick={() => {
        setImg(img);
        setVisibleModal(true);
      }}
    >
      <img {...img} />
    </div>
  ));

  return (
    <>
      {visibleModal && (
        <LMModalImg
          img={img as LMImg}
          onClose={() => setVisibleModal(false)}
        />
      )}
      <LMBaseCompo>
        <div className={styles.header}>
          <h3 className={styles.userName}>{user.username}</h3>
          <div className={styles.rating}>
            {ratingCheck}
            {ratingNone}
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.user}>
            <img
              className={styles.avatar}
              src={user.avatar}
              alt="user avatar"
            />
            <div className={styles.info}>{infoMeasures}</div>
          </div>
          <div className={styles.comment}>
            <div className={styles.text}>{comment.comment}</div>
            <div className={styles.gallery}>{gallery}</div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.date}>
            {Intl.DateTimeFormat(userInfo.lang).format(comment.date)}
          </div>
        </div>
      </LMBaseCompo>
    </>
  );
};

export default LMCommentDesc;

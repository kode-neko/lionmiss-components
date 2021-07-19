import React from "react";
import { LMBaseComponent } from "../LMBaseComponent";
import { LMCommentCardProps } from "./types";
import styles from "./styles.module.scss";
import { starIconLM } from "../LMIcons";

const MAX_RATING = 5;

const LMCommentCard: React.FC<LMCommentCardProps> = ({ comment, userInfo }) => {
  const { user, measures } = comment;

  const ratingCheck = Array(comment.ratting).map((ele) => (
    <div key={ele} className={styles.check}>
      {starIconLM}
    </div>
  ));

  const ratingNone = Array(MAX_RATING - comment.ratting).map((ele) => (
    <div key={ele} className={styles.none}>
      {starIconLM}
    </div>
  ));

  const infoMeasures = Object.entries(measures).map(([key, value]) => (
    <div key={key}>
      <div>{key}</div>
      <div>{value}</div>
    </div>
  ));

  const gallery = comment.imgs.map((img) => (
    <div key={img.key}>
      <img {...img} />
    </div>
  ));

  return (
    <LMBaseComponent>
      <div className={styles.header}>
        <h3 className={styles.userName}>{user.username}</h3>
        <div className={styles.rating}>
          {ratingCheck}
          {ratingNone}
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.user}>
          <div className={styles.avatar}>{user.avatar}</div>
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
    </LMBaseComponent>
  );
};

export default LMCommentCard;

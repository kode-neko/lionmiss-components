import React from "react";
import styles from "./styles.module.scss";
import { LMMainTitleProps } from "./types";

export const LMMainTitle: React.FC<LMMainTitleProps> = ({ webTitle }) => {
  return (
    <div className={styles.mainTitle}>
      <h1>
        <a href="/">{webTitle}</a>
      </h1>
    </div>
  );
};

export default LMMainTitle;

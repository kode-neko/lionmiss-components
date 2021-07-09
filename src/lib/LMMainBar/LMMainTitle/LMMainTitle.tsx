import React from "react";
import { WEB_TITLE } from "../../constants";
import styles from "./styles.module.scss";

export const LMMainTitle: React.FC = () => {
  return (
    <div className={styles.mainTitle}>
      <h1>
        <a href="/">{WEB_TITLE}</a>
      </h1>
    </div>
  );
};

export default LMMainTitle;

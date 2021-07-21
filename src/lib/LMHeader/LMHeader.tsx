import React from "react";
import { LMHeaderProps } from "./types";
import styles from "./styles.module.scss";
import { arrowLeftIconLM } from "../LMIcons";

const LMHeader: React.FC<LMHeaderProps> = ({ title, link }) => {
  return (
    <div className={styles.cont}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.link}>
        <a {...link}>
          <span className={styles.arrow}>{arrowLeftIconLM}</span>
          <span className={styles.name}>{link.name}</span>
        </a>
      </div>
    </div>
  );
};

export default LMHeader;

import React from "react";
import { LMTableProductDescProps } from "./types";
import styles from "./styles.module.scss";

const LMTableProductDesc: React.FC<LMTableProductDescProps> = ({ img, name }) => {
  return (
    <div className={styles.contDesc}>
      <img className={styles.img} {...img} />
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default LMTableProductDesc;

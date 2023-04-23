import React from "react";
import { LMCellProductDescProps } from "./types";
import styles from "./styles.module.scss";

const LMCellProductDesc: React.FC<LMCellProductDescProps> = ({ img, name }) => {
  return (
    <div className={styles.contDesc}>
      <img className={styles.img} {...img} />
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default LMCellProductDesc;

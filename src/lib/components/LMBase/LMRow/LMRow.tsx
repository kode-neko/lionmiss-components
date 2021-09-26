import React from "react";
import styles from "./styles.module.scss";
import { LMRowProps } from "./types";

export const LMRow: React.FC<LMRowProps> = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export default LMRow;

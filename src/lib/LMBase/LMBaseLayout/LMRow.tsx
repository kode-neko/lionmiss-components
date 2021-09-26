import React from "react";
import styles from "./styles.module.scss";

export const LMRow: React.FC = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export default LMRow;

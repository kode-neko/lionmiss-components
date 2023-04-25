import React from "react";
import styles from "./styles.module.scss";
import { LMCheckBoxProps } from "./types";

export const LMCheckBox: React.FC<LMCheckBoxProps> = ({
  label,
  id,
  ...props
}) => (
  <div className={styles.cont}>
    <input
      className={styles.checkboxBrowser}
      type="checkbox"
      id={id}
      {...props}
    />
    <span className={styles.checkbox}/>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  </div>
);

export default LMCheckBox;

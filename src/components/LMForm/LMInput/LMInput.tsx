import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { LMInputProps } from "./types";

export const LMInput: React.FC<LMInputProps> = ({
  label,
  infoHint,
  errorHint,
  correctHint,
  ...props
}) => (
  <div className={styles.cont}>
    {label && <label className={styles.label}>{label}</label>}
    <input
      className={styles.input}
      type="text"
      {...props}
    />
    <div
      className={classNames(
        styles.hint,
        infoHint && styles.info,
        errorHint && styles.error,
        correctHint && styles.correct
      )}
    >
      {infoHint}
      {errorHint}
      {correctHint}
    </div>
  </div>
);

export default LMInput;

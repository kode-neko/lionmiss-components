import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { LMInputProps } from "./types";

export const LMInput: React.FC<LMInputProps> = ({
  label,
  value,
  infoHint,
  errorHint,
  correctHint,
  onChange,
  onBlur,
}) => (
  <div className={styles.cont}>
    {label && <label className={styles.label}>{label}</label>}
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
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

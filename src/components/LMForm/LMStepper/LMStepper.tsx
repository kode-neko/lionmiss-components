import React from "react";
import { LMStepperProps } from "./types";
import styles from "./styles.module.scss";

const LMStepper: React.FC<LMStepperProps> = ({
  value,
  min,
  max,
  onMinus,
  onMax,
}) => {
  const handleChangeMinus = () => {
    const cont = value - 1 < min ? value : value - 1;
    onMinus && onMinus(cont);
  };
  const handleChangeMax = () => {
    const cont = value + 1 > max ? value : value + 1;
    onMax && onMax(cont);
  };

  return (
    <div className={styles.cont}>
      <button className={styles.minus} onClick={handleChangeMinus}>
        -
      </button>
      <div className={styles.number}>{value}</div>
      <button className={styles.plus} onClick={handleChangeMax}>
        +
      </button>
    </div>
  );
};
export default LMStepper;

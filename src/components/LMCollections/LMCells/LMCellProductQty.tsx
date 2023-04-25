import React from "react";
import { LMCellProductQtyProps } from "./types";
import styles from "./styles.module.scss";
import { LMStepper } from "../../LMForm";

const LMCellProductQty: React.FC<LMCellProductQtyProps> = ({
  qty,
  min,
  max,
  onMinus,
  onMax,
}) => {
  return (
    <div className={styles.contQty}>
      <LMStepper
        value={qty}
        min={min}
        max={max}
        onMax={onMinus}
        onMinus={onMax}
      />
    </div>
  );
};

export default LMCellProductQty;

import React from "react";
import { LMFilterPriceProps } from "./types";
import styles from "./styles.module.scss";

const LMFilterPrice: React.FC<LMFilterPriceProps> = ({
  min,
  max,
  valMin,
  valMax,
  onChangeMin,
  onChangeMax,
}) => {
  const inputMinPropMax = max - 1;
  const inputMaxPropMin = min + 1;
  return (
    <div className={styles.cont}>
      <div className={styles.min}>
        <label htmlFor="min">Min</label>
        <span className={styles.currency}>€</span>
        <input
          id="min"
          type="number"
          value={valMin}
          min={min}
          max={inputMinPropMax}
          onChange={(e) => onChangeMin(Number(e.target.value))}
        />
      </div>
      <div className={styles.max}>
        <label htmlFor="minmax">Max</label>
        <span className={styles.currency}>€</span>
        <input
          id="max"
          type="number"
          value={valMax}
          min={inputMaxPropMin}
          max={max}
          onChange={(e) => onChangeMax(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default LMFilterPrice;

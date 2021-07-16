import React, { ChangeEvent } from "react";
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
  const handleChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
    const min = Number(e.target.value);
    onChangeMin(min >= valMax ? valMax - 1 : min);
  };
  const handleChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    const max = Number(e.target.value);
    onChangeMax(max <= valMin ? valMin + 1 : max);
  };
  return (
    <div className={styles.cont}>
      <div className={styles.min}>
        <label htmlFor="min">Min</label>
        <span className={styles.currency}>€</span>
        <input
          id="min"
          value={valMin}
          min={min}
          max={inputMinPropMax}
          onChange={handleChangeMin}
        />
      </div>
      <div className={styles.max}>
        <label htmlFor="minmax">Max</label>
        <span className={styles.currency}>€</span>
        <input
          id="max"
          value={valMax}
          min={inputMaxPropMin}
          max={max}
          onChange={handleChangeMax}
        />
      </div>
    </div>
  );
};

export default LMFilterPrice;

import React, { ReactElement } from "react";
import { LMStepperProps } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const LMStepper = <T extends Record<string, unknown>>({
  list,
  selected,
  onSelect,
}: LMStepperProps<T>): ReactElement => (
  <div className={styles.cont}>
    {list.map((ele: T, index: number) => (
      <div
        key={index}
        className={classNames(styles.box, selected && styles.selected)}
        onClick={() => onSelect(ele)}
      >
        {ele}
      </div>
    ))}
  </div>
);

export default LMStepper;

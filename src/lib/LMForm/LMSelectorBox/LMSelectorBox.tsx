import React from "react";
import { LMSelectorBoxProps } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const LMSelectorBox: React.FC<LMSelectorBoxProps> = ({
  options,
  selected,
  onSelect,
}) => (
  <div className={styles.cont}>
    {options.map((opt: string) => (
      <div
        key={opt}
        className={classNames(styles.box, selected === opt && styles.selected)}
        onClick={() => onSelect(opt)}
      >
        {opt}
      </div>
    ))}
  </div>
);

export default LMSelectorBox;

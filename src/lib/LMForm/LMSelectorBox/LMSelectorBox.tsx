import React from "react";
import { LMSelectorBoxProps } from "./types";
import styles from "./styles.module.scss";
import LMBox from "./LMBox";

const LMSelectorBox: React.FC<LMSelectorBoxProps> = ({
  options,
  selected,
  onSelect,
}) => (
  <div className={styles.cont}>
    {options.map((opt: string) => (
      <LMBox
        key={opt}
        option={opt}
        selected={opt === selected}
        onSelect={() => onSelect(opt)}
      />
    ))}
  </div>
);

export default LMSelectorBox;

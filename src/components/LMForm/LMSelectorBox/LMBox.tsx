import React from "react";
import { LMBoxProps } from "./types";
import classNames from "classnames";
import styles from './styles.module.scss'

const LMBox: React.FC<LMBoxProps> = ({
    option,
    selected = false,
    onSelect,
}) => {
  return (
    <div
      key={option}
      className={classNames(styles.box, selected && styles.selected)}
      onClick={onSelect}
    >
      {option}
    </div>
  );
};

export default LMBox;

import classNames from "classnames";
import React from "react";
import { LMColorIconProps } from "./types";
import styles from "./styles.module.scss";

const ColorBook = {
  red: styles.red,
  orange: styles.orange,
  yellow: styles.yellow,
  green: styles.green,
  aqua: styles.aqua,
  blue: styles.blue,
  purple: styles.red,
  pink: styles.pink,
  white: styles.white,
  black: styles.black,
};

export const LMColorIcon: React.FC<LMColorIconProps> = ({
  color,
  isSelectable = false,
  selected,
  classProp,
  onClick,
}) => (
  <div
    className={classNames(
      styles.cont,
      classProp,
      isSelectable && styles.selectable
    )}
  >
    <div
      className={classNames(
        styles.color,
        ColorBook[color],
        selected && styles.selected
      )}
      onClick={onClick}
    />
  </div>
);

export default LMColorIcon;

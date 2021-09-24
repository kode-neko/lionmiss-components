import React, { useState, useEffect } from "react";
import { LMArrowThickProps, LMColorShape } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const LMArrowThick: React.FC<LMArrowThickProps> = ({
  isActivable = true,
  isActive = false,
  className,
  style,
  content,
  color = LMColorShape.Main,
  colorActive = LMColorShape.Second,
  height = "52px",
  width = "100%",
}) => {
  const cursor = isActivable && !isActive ? "pointer" : "none";
  const arrowColor = isActive ? colorActive : color;
  const handlerMouseColorShape = {
    onMouseEnter: () => isActivable && !isActive && setActColor(colorActive),
    onMouseLeave: () => isActivable && !isActive && setActColor(color),
  };
  const [actColor, setActColor] = useState<string>(arrowColor);
  useEffect(() => {
    setActColor(arrowColor);
  }, [isActive]);

  return (
    <div
      className={classNames(styles.cont, className)}
      style={{ height, width, ...style }}
    >
      <div
        className={styles.content}
        style={{ height, cursor }}
        {...handlerMouseColorShape}
      >
        {content}
      </div>
      <div
        className={styles.para01}
        style={{
          height,
          backgroundColor: actColor,
          cursor,
        }}
        {...handlerMouseColorShape}
      />
      <div
        className={styles.para02}
        style={{
          height,
          backgroundColor: actColor,
          cursor,
        }}
        {...handlerMouseColorShape}
      />
      <div
        className={styles.arrow}
        style={{
          left: `calc(40px + ${width})`,
          borderLeftColor: actColor,
          borderTopWidth: `calc(${height} / 2)`,
          borderLeftWidth: `calc(${height} / 2)`,
          borderBottomWidth: `calc(${height} / 2)`,
        }}
        {...handlerMouseColorShape}
      />
      <div
        className={styles.fillArrow}
        style={{
          height,
          width,
          left: `40px`,
          backgroundColor: actColor,
          cursor,
        }}
        {...handlerMouseColorShape}
      />
    </div>
  );
};

export default LMArrowThick;

import React from "react";
import { LMColorIcon } from "../../LMColorIcon";
import { LMColor } from "../../types";
import { LMFilterColorProps } from "./types";
import styles from "./styles.module.scss";

const LMFilterColor: React.FC<LMFilterColorProps> = ({
  selectedList,
  onChange,
}) => {
  return (
    <div className={styles.cont}>
      {Object.keys(LMColor).map((color) => (
        <div key={color} onChange={() => onChange(color as LMColor)}>
          <LMColorIcon
            color={color as LMColor}
            selected={
              (color as LMColor) === selectedList.find((ele) => ele === color)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default LMFilterColor;

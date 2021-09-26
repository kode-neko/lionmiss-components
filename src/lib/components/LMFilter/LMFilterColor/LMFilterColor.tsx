import React from "react";
import { LMColorIcon } from "../../LMColorIcon";
import { LMColor } from "../../../../core/model";
import { LMFilterColorProps } from "./types";
import styles from "./styles.module.scss";

const LMFilterColor: React.FC<LMFilterColorProps> = ({
  selectedList,
  onChange,
}) => {
  return (
    <div className={styles.cont}>
      {Object.values(LMColor).map((color) => (
        <div key={color} onClick={() => onChange(color as LMColor)}>
          <LMColorIcon
            isSelectable
            color={color}
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

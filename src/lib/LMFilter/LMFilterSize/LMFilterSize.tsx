import React from "react";
import { LMFilterSizeProps } from "./types";
import styles from "./styles.module.scss";
import { LMSize } from "../../types";
import { LMCheckBox } from "../../LMForm";

export const LMFilterSize: React.FC<LMFilterSizeProps> = ({
  selectedList,
  onChange,
}) => {
  return (
    <div className={styles.cont}>
      {Object.keys(LMSize).map((size) => (
        <div key={size} onChange={() => onChange(size as LMSize)}>
          <LMCheckBox
            label={size}
            value={size}
            checked={size === selectedList.find(ele => ele === size)}
            id={size}
            name={size}
            onChange={() => onChange(size as LMSize)}
          />
        </div>
      ))}
    </div>
  );
};

export default LMFilterSize;

import React from "react";
import { LMFilterStyleProps } from "./types";
import styles from "./styles.module.scss";
import { LMCheckBox } from "../../LMForm";

export const LMFilterStyle: React.FC<LMFilterStyleProps> = ({
  list,
  selectedList,
  onChange,
}) => {
  return (
    <div className={styles.cont}>
      {list.map((style) => (
        <LMCheckBox
          key={style}
          label={style}
          value={style}
          checked={style === selectedList.find(ele => ele === style)}
          id={style}
          name={style}
          onChange={() => onChange(style)}
        />
      ))}
    </div>
  );
};

export default LMFilterStyle;

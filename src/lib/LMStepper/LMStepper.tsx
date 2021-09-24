import React from "react";
import { LMStepperProps } from "./types";
import styles from "./styles.module.scss";
import { LMArrowThick } from "../LMShape";

const LMStepper: React.FC<LMStepperProps> = ({ options, active, onClick }) => {
  return (
    <div className={styles.list}>
      {options.map((opt) => (
        <LMArrowThick
          key={opt.key}
          isActive={opt.key === active}
          onClick={() => onClick && onClick(opt.key)}
          content={opt.name}
        />
      ))}
    </div>
  );
};

export default LMStepper;

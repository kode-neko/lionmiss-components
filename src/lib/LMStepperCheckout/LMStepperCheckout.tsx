import React from "react";
import { LMStepperCheckoutProps } from "./types";
import styles from "./styles.module.scss";

const LMStepperCheckout: React.FC<LMStepperCheckoutProps> = () => {
  return (
    <div className={styles.arrowStep}>
      <div className={styles.para01}></div>
      <div className={styles.para02}></div>
    </div>
  );
};

export default LMStepperCheckout;

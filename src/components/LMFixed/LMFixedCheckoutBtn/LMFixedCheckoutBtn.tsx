import React from "react";
import styles from "./styles.module.scss";
import { LMButton } from "../../LMForm";
import { cartIconLM } from "../../LMIcons";
import { LMFixedCheckoutBtnProps } from "./types";

const LMFixedCheckoutBtn: React.FC<LMFixedCheckoutBtnProps> = ({
  onClick,
  btnLabel,
}) => {
  return (
    <div className={styles.cont}>
      <LMButton large display="block" main onClick={onClick}>
        {cartIconLM} {btnLabel || <>Checkout</>}
      </LMButton>
    </div>
  );
};

export default LMFixedCheckoutBtn;

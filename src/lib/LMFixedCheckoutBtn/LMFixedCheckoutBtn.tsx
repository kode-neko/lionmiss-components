import React from "react";
import styles from "./styles.module.scss";
import LMButton from "../LMButton/LMButton";
import { cartIconLM } from "../LMIcons/LMIcons";
import { LMFixedCheckoutBtnProps } from "./types";

const LMFixedCheckoutBtn: React.FC<LMFixedCheckoutBtnProps> = ({ onClick }) => {
  return (
    <div className={styles.cont}>
      <LMButton large display="block" main onClick={onClick}>
        {cartIconLM} Checkout
      </LMButton>
    </div>
  );
};

export default LMFixedCheckoutBtn;

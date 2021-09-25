import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

const LMCreditCardFormBack: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.chip}>
        <div className={styles.lineH} style={{ left: "12px" }} />
        <div className={styles.lineH} style={{ left: "24px" }} />
        <div className={styles.lineH} style={{ left: "36px" }} />
        <div className={styles.lineW} style={{ top: "14px" }} />
        <div className={styles.lineW} style={{ top: "28px" }} />
        <div className={styles.lineW} style={{ top: "46px" }} />
      </div>
      <div className={classNames(styles.circle, styles.black)} />
      <div className={classNames(styles.circle, styles.aqua)} />
      <div className={styles.band} />
    </div>
  );
};

export default LMCreditCardFormBack;

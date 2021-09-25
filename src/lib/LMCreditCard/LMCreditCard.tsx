import React from "react";
import { LMCreditCardProps } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const LMCreditCardBack: React.FC = () => {
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

const LMCreditCard: React.FC<LMCreditCardProps> = ({
  creditNumber,
  fullName,
  month,
  year,
  cvv,

  onChangeCreditNumber,
  onChangeFullName,
  onChangeMonth,
  onChangeYear,
  onChangeCvv,
}) => {
  return (
    <div className={styles.cardForm}>
      <LMCreditCardBack />
      <div className={styles.form}>
        <input
          className={styles.creditNumber}
          value={creditNumber}
          onChange={(e) => onChangeCreditNumber(Number(e.target.value))}
        />
        <input
          className={styles.fullName}
          value={fullName}
          onChange={(e) => onChangeFullName(e.target.value)}
        />
        <div className={styles.bandCont}>
          <div className={styles.endDate}>
            <input
              className={styles.month}
              value={month}
              onChange={(e) => onChangeMonth(Number(e.target.value))}
            />
            <div className={styles.slash}>/</div>
            <input
              className={styles.year}
              value={year}
              onChange={(e) => onChangeYear(Number(e.target.value))}
            />
          </div>
          <div className={styles.cvv}>
            <div className={styles.label}>cvv</div>
            <input
              className={styles.value}
              value={cvv}
              onChange={(e) => onChangeCvv(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMCreditCard;

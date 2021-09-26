import React, { ChangeEvent, KeyboardEvent, useRef } from "react";
import LMCreditCardFormBack from "./LMCreditCardFormBack";
import { LMCreditCardFormProps } from "./types";
import styles from "./styles.module.scss";
import {
  checkDeleteKey,
  checkNumberKey,
} from "../utils";

const CREDIT_LENGTH = 16;
const MONTH_LENGTH = 2;
const YEAR_LENGTH = 2;
const CVV_LENGTH = 3;

const LMCreditCardForm: React.FC<LMCreditCardFormProps> = ({
  values,
  placeholder,
  onChange
}) => {
  const refCreditNumber = useRef<HTMLInputElement>(null);
  const refMonth = useRef<HTMLInputElement>(null);
  const refYear = useRef<HTMLInputElement>(null);
  const refCvv = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    const val = e.target.value;
    const newCreditCard = { ...values, [key]: val };
    onChange(newCreditCard);
  };
  const handleKeyDownNumbers = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (checkDeleteKey(key)) return;
    else if (!checkNumberKey(key)) e.preventDefault();
  };

  return (
    <div className={styles.cardForm}>
      <LMCreditCardFormBack />
      <div className={styles.form}>
        <input
          ref={refCreditNumber}
          placeholder={placeholder.creditNumber}
          className={styles.creditNumber}
          value={values.creditNumber}
          onKeyDown={handleKeyDownNumbers}
          onChange={(e) =>
            e.target.value.length <= CREDIT_LENGTH &&
            handleChange(e, "creditNumber")
          }
        />
        <input
          placeholder="Fullname"
          className={styles.fullName}
          value={values.fullName}
          onChange={(e) => handleChange(e, "fullname")}
        />
        <div className={styles.bandCont}>
          <div className={styles.endDate}>
            <input
              ref={refMonth}
              placeholder={placeholder.month}
              className={styles.month}
              value={values.month}
              onKeyDown={handleKeyDownNumbers}
              onChange={(e) =>
                e.target.value.length <= MONTH_LENGTH &&
                handleChange(e, "month")
              }
            />
            <div className={styles.slash}>/</div>
            <input
              ref={refYear}
              placeholder={placeholder.year}
              className={styles.year}
              value={values.year}
              onKeyDown={handleKeyDownNumbers}
              onChange={(e) =>
                e.target.value.length <= YEAR_LENGTH && handleChange(e, "year")
              }
            />
          </div>
          <div className={styles.cvv}>
            <div className={styles.label}>cvv</div>
            <input
              ref={refCvv}
              placeholder={placeholder.cvv}
              className={styles.value}
              value={values.cvv}
              onKeyDown={handleKeyDownNumbers}
              onChange={(e) =>
                e.target.value.length <= CVV_LENGTH && handleChange(e, "cvv")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMCreditCardForm;

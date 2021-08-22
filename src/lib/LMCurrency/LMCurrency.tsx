import React from "react";
import styles from "./styles.module.scss";
import { LMCurrencyProps } from "./types";

const LMCurrency: React.FC<LMCurrencyProps> = ({ qty, lang, currency }) => {
  const formatStr = Number(qty).toLocaleString(lang, {
    style: "currency",
    currency,
  });
  return <span className={styles.currency}>{formatStr}</span>;
};

export default LMCurrency;

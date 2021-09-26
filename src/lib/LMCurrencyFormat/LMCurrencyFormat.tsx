import React from "react";
import styles from "./styles.module.scss";
import { LMCurrencyFormatProps } from "./types";

const LMCurrencyFormat: React.FC<LMCurrencyFormatProps> = ({ qty, lang, currency }) => {
  const formatStr = Number(qty).toLocaleString(lang, {
    style: "currency",
    currency,
  });
  return <span className={styles.currency}>{formatStr}</span>;
};

export default LMCurrencyFormat;

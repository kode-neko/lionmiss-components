import React from "react";
import styles from "./styles.module.scss";
import { LMCurrencyFormatFormatProps } from "./types";

const LMCurrencyFormatFormat: React.FC<LMCurrencyFormatFormatProps> = ({ qty, lang, currency }) => {
  const formatStr = Number(qty).toLocaleString(lang, {
    style: "currency",
    currency,
  });
  return <span className={styles.currency}>{formatStr}</span>;
};

export default LMCurrencyFormatFormat;

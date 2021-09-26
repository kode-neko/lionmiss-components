import React from "react";
import { LMCellProductPriceProps } from "./types";
import styles from "./styles.module.scss";
import { LMCurrencyFormat } from "../LMCurrencyFormat";

const LMCellProductPrice: React.FC<LMCellProductPriceProps> = ({
  price,
  lang,
  currency,
}) => {
  return (
    <div className={styles.contPrice}>
      <LMCurrencyFormat qty={price} lang={lang} currency={currency} />
    </div>
  );
};

export default LMCellProductPrice;

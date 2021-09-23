import React from "react";
import { LMTableProductPriceProps } from "./types";
import styles from "./styles.module.scss";
import { LMCurrency } from "../../LMCurrency";

const LMTableProductPrice: React.FC<LMTableProductPriceProps> = ({
  price,
  lang,
  currency,
}) => {
  return (
    <div className={styles.contPrice}>
      <LMCurrency qty={price} lang={lang} currency={currency} />
    </div>
  );
};

export default LMTableProductPrice;

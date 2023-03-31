import React, { useState } from "react";
import { LMResumeCheckoutProps } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { LMCurrencyFormat } from "../LMCurrencyFormat";

const LMResumeCheckout: React.FC<LMResumeCheckoutProps> = ({
  lang,
  currency,
  promoTitle,
  taxes,
  total,
  promoLabel,
  taxesLabel,
  totalLabel,
  onPromo,
}) => {
  const [promo, setPromo] = useState<string>("");
  const promoTpl: JSX.Element = promoTitle ? (
    <div>{promoTitle}</div>
  ) : (
    <div>
      <input value={promo} onChange={(e) => setPromo(e.target.value)} />
      <button onClick={() => onPromo(promo)}>Check</button>
    </div>
  );

  return (
    <div className={styles.cont}>
      <div className={classNames(styles.block, styles.promo)}>
        <div className={styles.label}>{promoLabel}</div>
        <div className={styles.value}>{promoTpl}</div>
      </div>
      <div className={classNames(styles.block, styles.taxes)}>
        <div className={styles.label}>{taxesLabel}</div>
        <div className={styles.value}>
          <LMCurrencyFormat qty={taxes} lang={lang} currency={currency} />
        </div>
      </div>
      <div className={classNames(styles.block, styles.total)}>
        <div className={styles.label}>{totalLabel}</div>
        <div className={styles.value}>
          <LMCurrencyFormat qty={total} lang={lang} currency={currency} />
        </div>
      </div>
    </div>
  );
};

export default LMResumeCheckout;

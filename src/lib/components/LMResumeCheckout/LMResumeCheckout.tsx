import React, { useState } from "react";
import { LMResumeCheckoutProps } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { LMCurrencyFormat } from "../LMCurrencyFormat";

const LMResumeCheckout: React.FC<LMResumeCheckoutProps> = ({
  promoTitle,
  onPromo,
  taxes,
  total,
  lang,
  currency,
}) => {
  const [promo, setPromo] = useState<string>("");
  const promoTpl = promoTitle ? (
    { promoTitle }
  ) : (
    <div>
      <input value={promo} onChange={(e) => setPromo(e.target.value)} />
      <button onClick={() => onPromo(promo)}>Check</button>
    </div>
  );

  return (
    <div className={styles.cont}>
      <div className={classNames(styles.block, styles.promo)}>
        <div className={styles.label}>Promo</div>
        <div className={styles.value}>{promoTpl}</div>
      </div>
      <div className={classNames(styles.block, styles.taxes)}>
        <div className={styles.label}>Taxes</div>
        <div className={styles.value}>
          <LMCurrencyFormat qty={taxes} lang={lang} currency={currency} />
        </div>
      </div>
      <div className={classNames(styles.block, styles.total)}>
        <div className={styles.label}>Total</div>
        <div className={styles.value}>
          <LMCurrencyFormat qty={total} lang={lang} currency={currency} />
        </div>
      </div>
    </div>
  );
};

export default LMResumeCheckout;

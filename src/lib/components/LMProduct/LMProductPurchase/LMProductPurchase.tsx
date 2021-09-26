import React, { useState } from "react";
import { LMBaseCompo } from "../../LMBase";
import { LMProductPurchaseProps } from "./types";
import styles from "./styles.module.scss";
import { cartIconLM, heartIconLM } from "../../LMIcons";
import { LMColorIcon } from "../../LMColorIcon";
import { LMPropsBuy, LMSize } from "../../../../core/model";
import { LMButton, LMSelectorBox, LMStepper } from "../../LMForm";
import classNames from "classnames";
import { LMCurrencyFormat } from "../../LMCurrencyFormat";

const LMProductPurchase: React.FC<LMProductPurchaseProps> = ({
  lang,
  currency,
  product,
  min,
  max,
  onClickFav,
  onClickBuy,
}) => {
  const [propsBuy, setPropsBuy] = useState<LMPropsBuy>({
    productId: product.id,
    color: product.colors && product.colors[0],
    size: undefined,
    qty: 1,
  });
  return (
    <LMBaseCompo classNameXtra={styles.widthCont}>
      <div className={styles.bloq01}>
        <h2 className={styles.title}>{product.name}</h2>
        <div className={styles.favPrice}>
          <div
            className={classNames(
              styles.fav,
              product.isFav && styles.selectedFav
            )}
            onClick={() => onClickFav(!product.isFav)}
          >
            {heartIconLM}
          </div>
          <div className={styles.price}>
            <LMCurrencyFormat
              qty={product.price}
              lang={lang}
              currency={currency}
            />{" "}
          </div>
        </div>
      </div>

      <div className={styles.bloq02}>
        <div className={styles.colors}>
          {product.colors.map((color) => (
            <LMColorIcon
              key={color}
              color={color}
              isSelectable
              selected={color === propsBuy?.color}
              onClick={() => setPropsBuy({ ...propsBuy, color })}
            />
          ))}
        </div>
        <div className={styles.sizes}>
          <LMSelectorBox
            options={Object.values(LMSize)}
            selected={propsBuy.size}
            onSelect={(size) =>
              setPropsBuy({ ...propsBuy, size: size as LMSize })
            }
          />
        </div>
        <div className={styles.qty}>
          <LMStepper
            value={propsBuy.qty}
            min={min}
            max={max}
            onMinus={(val) => setPropsBuy({ ...propsBuy, qty: val })}
            onMax={(val) => setPropsBuy({ ...propsBuy, qty: val })}
          />
        </div>
      </div>

      <div className={styles.info}>
        {product.details.map((detail) => (
          <div className={styles.line} key={detail.key}>
            <div className={styles.key}>{detail.key} </div>
            <div className={styles.value}>{detail.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.btnBuy}>
        <LMButton medium display="block" onClick={() => onClickBuy(propsBuy)}>
          {cartIconLM} {"buy"}
        </LMButton>
      </div>
    </LMBaseCompo>
  );
};

export default LMProductPurchase;

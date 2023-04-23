import React from "react";
import { LMBaseCompo } from "../../LMBase";
import styles from "./styles.module.scss";
import { bagIconLM, heartIconLM } from "../../LMIcons";
import { LMColorIcon } from "../../LMColorIcon";
import LMProductInfoProps from "./type";
import { LMCurrencyFormat } from "../../LMCurrencyFormat";

const LMProductInfo: React.FC<LMProductInfoProps> = ({
  lang,
  currency,
  img,
  product,
  onClickProduct,
  onClickAdd,
  onClickFav,
}) => {
  const { name, price, colors } = product;
  return (
    <LMBaseCompo classNameXtra={styles.cont} onClick={onClickProduct}>
      <div className={styles.img}>
        <img src={img} />
      </div>
      <div className={styles.infoCont}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.info}>
          <div className={styles.price}>
            <LMCurrencyFormat qty={price} lang={lang} currency={currency} />
          </div>
          <div className={styles.actions}>
            <button
              onClick={(e) => {
                onClickAdd();
                e.stopPropagation();
              }}
            >
              {bagIconLM}
            </button>
            <button
              onClick={(e) => {
                onClickFav();
                e.stopPropagation();
              }}
            >
              {heartIconLM}
            </button>
          </div>
        </div>
        {product.colors && (
          <div className={styles.colors}>
            {colors.map((color) => (
              <LMColorIcon key={color} color={color} />
            ))}
          </div>
        )}
      </div>
    </LMBaseCompo>
  );
};

export default LMProductInfo;

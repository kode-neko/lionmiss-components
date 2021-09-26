import React from "react";
import { LMBaseCompo } from "../LMBaseCompo";
import styles from "./styles.module.scss";
import { bagIconLM, heartIconLM } from "../LMIcons";
import { LMColorIcon } from "../LMColorIcon";
import LMProductInfoProps from "./type";

const LMProductInfo: React.FC<LMProductInfoProps> = ({
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
          <div className={styles.price}>{price} €</div>
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

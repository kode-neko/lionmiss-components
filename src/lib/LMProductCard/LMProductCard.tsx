import React from "react";
import { LMBaseComponent } from "../LMBaseComponent";
import styles from "./styles.module.scss";
import { bagIconLM, heartIconLM } from "../LMIcons";
import { LMColorIcon } from "../LMColorIcon";
import LMProductCardProps from "./type";

const LMProductCard: React.FC<LMProductCardProps> = ({
  img,
  product,
  onClickProduct,
  onClickAdd,
  onClickFav,
}) => {
  const { name, price, colors } = product;
  return (
    <LMBaseComponent classNameXtra={styles.cont} onClick={onClickProduct}>
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
    </LMBaseComponent>
  );
};

export default LMProductCard;

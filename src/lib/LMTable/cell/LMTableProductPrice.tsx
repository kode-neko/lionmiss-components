import React from "react";
import { LMTableProductPriceProps } from "./types";
import styles from "./styles.module.scss";
import { LMCurrency } from "../../LMCurrency";

const LMTableProductPrice: React.FC<LMTableProductPriceProps> = ({price, lang, currency}) => {
  return <div><LMCurrency ></LMCurrency></div>;
};

export default LMTableProductPrice;

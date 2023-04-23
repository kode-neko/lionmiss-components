import React from "react";
import { LMBaseCompo } from "../LMBase";
import { LMFilterColor } from "./LMFilterColor";
import { LMFilterPrice } from "./LMFilterPrice";
import { LMFilterSize } from "./LMFilterSize";
import { LMFilterStyle } from "./LMFilterStyle";
import { LMFilterProps } from "./types";
import styles from "./styles.module.scss";
import { LMButton } from "../LMForm";
import { filterIconLM } from "../LMIcons";

export const LMFilter: React.FC<LMFilterProps> = ({
  selectedListColor,
  onChangeListColor,
  selectedListSize,
  onChangeListSize,
  minPrice,
  maxPrice,
  valMinPrice,
  valMaxPrice,
  onChangeMinPrice,
  onChangeMaxPrice,
  listStyle,
  selectedListStyle,
  onChangeListStyle,
}) => {
  return (
    <LMBaseCompo classNameXtra={styles.cont}>
      <LMFilterColor
        selectedList={selectedListColor}
        onChange={onChangeListColor}
      />
      <LMFilterSize
        selectedList={selectedListSize}
        onChange={onChangeListSize}
      />
      <LMFilterPrice
        min={minPrice}
        max={maxPrice}
        valMin={valMinPrice}
        valMax={valMaxPrice}
        onChangeMin={onChangeMinPrice}
        onChangeMax={onChangeMaxPrice}
      />
      <LMFilterStyle
        list={listStyle}
        selectedList={selectedListStyle}
        onChange={onChangeListStyle}
      />
      <LMButton small>{filterIconLM} Filter</LMButton>
    </LMBaseCompo>
  );
};

export default LMFilter;

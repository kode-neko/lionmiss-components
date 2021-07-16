import React from "react";
import { LMBaseComponent } from "../LMBaseComponent";
import { LMFilterColor } from "./LMFilterColor";
import { LMFilterPrice } from "./LMFilterPrice";
import { LMFilterSize } from "./LMFilterSize";
import { LMFilterStyle } from "./LMFilterStyle";
import { LMFilterProps } from "./types";

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
    <LMBaseComponent>
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
    </LMBaseComponent>
  );
};

export default LMFilter;

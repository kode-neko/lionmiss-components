import React from "react";
import { LMTableProductQtyProps } from "./types";
import styles from "./styles.module.scss";
import { LMStepper } from "../../LMForm";

const LMTableProductQty: React.FC<LMTableProductQtyProps> = ({
  qty,
  min,
  max,
}) => {
  return (
    <div>
      <LMStepper value={qty} min={min} max={max} />
    </div>
  );
};

export default LMTableProductQty;

import React from "react";
import { LMCellAddressProps } from "./types";
import styles from "./styles.module.scss";

const LMCellAddress: React.FC<LMCellAddressProps> = ({
  address,
  checked,
  onCheck,
}) => {
  return (
    <div className={styles.contAddress} onClick={onCheck}>
      <div className={styles.radio}>
        <input type="radio" checked={checked} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{address.name}</h3>
        <div>
          {address.country} {address.state}
        </div>
        <div>
          {address.town} {address.zip}
        </div>
        <div>{address.phone}</div>
        <div>{address.mail}</div>
      </div>
    </div>
  );
};

export default LMCellAddress;

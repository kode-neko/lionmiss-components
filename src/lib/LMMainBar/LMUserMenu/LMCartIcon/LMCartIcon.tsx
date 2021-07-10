import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import styles from "./styles.module.scss";
import { LMCartIconProps } from "./types";

export const LMCartIcon: React.FC<LMCartIconProps> = ({ cont }) => {

  return (
    <div className={styles.cont}>
      <FontAwesomeIcon className={styles.bag} icon={"shopping-bag"} />
      {cont > 0 && <div className={styles.counter}><div className={styles.number}>{cont}</div></div>}
    </div>
  );
};

export default LMCartIcon;

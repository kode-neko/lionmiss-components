import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { LMCartIconProps } from "./types";

export const LMCartIcon: React.FC<LMCartIconProps> = ({ cont }) => {
  const refCounter = useRef<HTMLDivElement>(null);
  const removeAnimation = () => {
    refCounter.current?.classList.remove(styles.addedItem);
  }
  useEffect(() => {
    refCounter.current?.addEventListener("animationend", removeAnimation);
    return () => refCounter.current?.removeEventListener("animationend", removeAnimation)
  }, [refCounter]);
  
  useEffect(() => {
    refCounter.current?.classList.add(styles.addedItem);
  }, [cont]);

  return (
    <div className={styles.cont}>
      <FontAwesomeIcon className={styles.bag} icon={"shopping-bag"} />
      {cont > 0 && (
        <div ref={refCounter} className={styles.counter}>
          <div className={styles.number}>{cont}</div>
        </div>
      )}
    </div>
  );
};

export default LMCartIcon;

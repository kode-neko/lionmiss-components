import React, { useEffect, useRef } from "react";
import { bagIconLM } from "../../../../LMIcons";
import styles from "./styles.module.scss";
import { LMCartIconProps } from "./types";

export const LMCartIcon: React.FC<LMCartIconProps> = ({ cont }) => {
  const refCounter = useRef<HTMLDivElement>(null);
  const removeAnimation = () => {
    refCounter.current?.classList.remove(styles.addedItem);
  }
  useEffect(() => {
    const ele = refCounter.current
    ele?.addEventListener("animationend", removeAnimation);
    return () => ele?.removeEventListener("animationend", removeAnimation)
  }, [refCounter]);
  
  useEffect(() => {
    refCounter.current?.classList.add(styles.addedItem);
  }, [cont]);

  return (
    <div className={styles.cont}>
      <span className={styles.bag}>{bagIconLM}</span>
      {cont > 0 && (
        <div ref={refCounter} className={styles.counter}>
          <div className={styles.number}>{cont}</div>
        </div>
      )}
    </div>
  );
};

export default LMCartIcon;

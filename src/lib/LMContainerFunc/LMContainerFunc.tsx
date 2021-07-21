import React from "react";
import { LMBtnSize, LMContainerFuncBtn, LMContainerFuncProps } from "./types";
import styles from "./styles.module.scss";
import { LMBaseComponent } from "../LMBaseComponent";
import { LMButton } from "../LMButton";

const LMContainerFunc: React.FC<LMContainerFuncProps> = ({
  title,
  btnsHeader,
  btnsFooter,
  children,
}) => {
  const btnsGenerator = (list: LMContainerFuncBtn[], btnsize: LMBtnSize) =>
    list.map(({ name, key, ...attr }) => (
      <LMButton key={key} {...attr} {...btnsize}>
        {name}
      </LMButton>
    ));
  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <div className={styles.contBtns}>
          {btnsGenerator(btnsHeader, { small: true })}
        </div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <LMBaseComponent classNameXtra={styles.base}>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>
          {btnsGenerator(btnsFooter, { medium: true })}
        </div>
      </LMBaseComponent>
    </div>
  );
};

export default LMContainerFunc;

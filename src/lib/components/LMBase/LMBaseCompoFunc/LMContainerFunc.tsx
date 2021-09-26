import React from "react";
import { LMBtnSize, LMBaseCompoFuncBtn, LMBaseCompoFuncProps } from "./types";
import styles from "./styles.module.scss";
import { LMBaseCompo } from "../LMBaseCompo";
import { LMButton } from "../../LMForm";

const LMBaseCompoFunc: React.FC<LMBaseCompoFuncProps> = ({
  title,
  btnsHeader,
  btnsFooter,
  children,
}) => {
  const btnsGenerator = (list: LMBaseCompoFuncBtn[], btnsize: LMBtnSize) =>
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
      <LMBaseCompo classNameXtra={styles.base}>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>
          {btnsGenerator(btnsFooter, { medium: true })}
        </div>
      </LMBaseCompo>
    </div>
  );
};

export default LMBaseCompoFunc;

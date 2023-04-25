import React from "react";
import styles from "./styles.module.scss";
import { LMButton } from "../../LMForm";
import { LMFixedResumeLineInfo, LMFixedResumeProps } from "./types";
import classNames from "classnames";
import { LMCurrencyFormat } from "../../LMCurrencyFormat";

const LMFixedResume: React.FC<LMFixedResumeProps> = ({
  lang,
  currency,
  infoList,
  btnLabelPrev,
  btnLabelNext,
  onClickPrev,
  onClickNext,
}) => {
  const createInfo = (lineInfo: LMFixedResumeLineInfo) => (
    <div className={classNames(styles.line, lineInfo.main && styles.main)}>
      <div className={styles.label}>{lineInfo.label}</div>
      <div className={styles.value}>
        {lineInfo.negative && <span>- </span>}
        {lineInfo.value ? (
          <LMCurrencyFormat
            qty={lineInfo.value}
            lang={lang}
            currency={currency}
          />
        ) : (
          <span>-</span>
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.cont}>
      <div className={styles.info}>{infoList.map(createInfo)}</div>
      <div className={styles.btns}>
        <LMButton onClick={onClickPrev} width={250} medium main>
          {btnLabelPrev}
        </LMButton>
        <LMButton onClick={onClickNext} width={250} medium main>
          {btnLabelNext}
        </LMButton>
      </div>
    </div>
  );
};

export default LMFixedResume;

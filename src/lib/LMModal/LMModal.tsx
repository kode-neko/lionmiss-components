import React from "react";
import { LMModalProps } from "./types";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LMButton from "../LMMainBar/LMButton/LMButton";
import { useTranslation } from "react-i18next";

export const LMModal: React.FC<LMModalProps> = ({
  visible,
  title,
  content,
  ok,
  cancel,
  footer,
  onClickOk,
  onClickCancel,
  onClickClose,
}) => {
  const handleClickClose = () => onClickClose && onClickClose();

  const createButtons = () => (
    <>
      <LMButton second small onClick={onClickCancel}>
        {cancel}
      </LMButton>
      <LMButton main small onClick={onClickOk}>
        {ok}
      </LMButton>
    </>
  );

  return (
    <>
      <div
        className={classnames(
          styles.background,
          visible ? styles.show : styles.hide,
          visible ? styles.fadeIn : styles.fadeOut
        )}
      />
      <div
        className={classnames(
          styles.modal,
          visible ? styles.show : styles.hide,
          visible ? styles.pulse : styles.fadeOut
        )}
      >
        <div className={styles.header}>
          <FontAwesomeIcon
            className={styles.closeBtn}
            icon="window-close"
            onClick={handleClickClose}
          />
        </div>
        <div className={styles.body}>
          <h3 className={styles.subheader}>{title}</h3>
          <div className={styles.content}>{content}</div>
        </div>
        <div className={styles.footer}>{footer || createButtons()}</div>
      </div>
    </>
  );
};

export default LMModal;

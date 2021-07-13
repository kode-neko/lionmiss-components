import React, { useState } from "react";
import { closeLMIcon, downArrowLMIcon, upArrowLMIcon } from "../../LMIcons";
import { LMMainMenuSideProps, LMMainSubMenuSideProps } from "./types";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LMMainSubMenuSide: React.FC<LMMainSubMenuSideProps> = ({ subMenu }) => {
  const { t: tMM } = useTranslation("mainMenu");
  const { t: tP } = useTranslation("paths");
  return (
    <ul className={styles.submenu} style={{ marginLeft: "24px" }}>
      {subMenu.map((opt) => (
        <li key={opt.name} style={{ fontSize: "18px" }}>
          <a>{tMM(opt.name)}</a>
        </li>
      ))}
    </ul>
  );
};

const LMMainMenuSide: React.FC<LMMainMenuSideProps> = ({
  mainMenu,
  columnsInfo,
  socialMedia,
  onClose,
}) => {
  const [visibleSubmenu, setvisibleSubmenu] = useState<string>();
  const { t: tMM } = useTranslation("mainMenu");
  const { t: tP } = useTranslation("paths");

  const handleClickOpt = (name: string) =>
    setvisibleSubmenu(visibleSubmenu !== name ? name : undefined);

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.cont}>
        <div className={styles.close}>
          <button className={styles.btn} onClick={onClose}>
            {closeLMIcon}
          </button>
        </div>
        <ul className={styles.mainMenu}>
          {mainMenu.map((opt) => (
            <li key={opt.name}>
              <a>{tMM(opt.name)}</a>
              {opt.opts && (
                <span
                  className={styles.arrow}
                  onClick={() => handleClickOpt(opt.name)}
                >
                  {visibleSubmenu === opt.name
                    ? upArrowLMIcon
                    : downArrowLMIcon}
                </span>
              )}
              {opt.opts && visibleSubmenu === opt.name && (
                <LMMainSubMenuSide subMenu={opt.opts} />
              )}
            </li>
          ))}
        </ul>
        <div className={styles.divider} />
        <ul className={styles.info}>
          {columnsInfo.map((opt) => (
            <li key={opt.title}>
              <a>{opt.title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.social}>
          {socialMedia.map((ele) => (
            <a key={ele.title} href={ele.path} title={ele.title}>
              <FontAwesomeIcon icon={["fab", ele.icon]} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default LMMainMenuSide;

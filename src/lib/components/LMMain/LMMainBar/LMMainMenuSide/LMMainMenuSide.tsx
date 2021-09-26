import React, { useRef, useState } from "react";
import { closeIconLM, arrowDownIconLM, arrowUpIconLM } from "../../../LMIcons";
import { LMMainMenuSideProps } from "./types";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { createPath } from "../../../../utils";
import classNames from "classnames";
import { LMMenuOpt } from "../../../../types";

const LMMainMenuSide: React.FC<LMMainMenuSideProps> = ({
  visible,
  mainMenu,
  columnsInfo,
  socialMedia,
  onClose,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [visibleSubmenu, setvisibleSubmenu] = useState<string>();
  const { t: tMM } = useTranslation("mainMenu");
  const { t: tMF } = useTranslation("mainFooter");
  const { t: tP } = useTranslation("paths");

  /*
  const handlerAnimationEnd = (e: Event): void => {
    console.log("prueba", e as AnimationEvent);
  };
  useAddEvent(menuRef, "animationend", handlerAnimationEnd);
  */

  const handleClickOpt = (name: string) =>
    setvisibleSubmenu(visibleSubmenu !== name ? name : undefined);

  const createSubMenu = (subMenu: LMMenuOpt[]) => {
    return (
      <ul className={styles.submenu}>
        {subMenu.map((opt) => (
          <li key={opt.title as string}>
            <a href={opt.path && createPath(opt.path, tP)}>
              {tMM(opt.title as string)}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const createOption = (opt: LMMenuOpt) => {
    return (
      <li key={opt.title as string}>
        <a href={opt.path && createPath(opt.path, tP)}>
          {tMM(opt.title as string)}
        </a>
        {opt.submenu && (
          <span
            className={styles.arrow}
            onClick={() => handleClickOpt(opt.title as string)}
          >
            {visibleSubmenu === opt.title ? arrowUpIconLM : arrowDownIconLM}
          </span>
        )}
        {opt.submenu &&
          visibleSubmenu === (opt.title as string) &&
          createSubMenu(opt.submenu)}
      </li>
    );
  };

  return (
    <>
      <div
        className={classNames(
          styles.overlay,
          visible ? styles.show : styles.hide
        )}
      />
      <div
        ref={menuRef}
        className={classNames(styles.cont, visible ? styles.show : styles.hide)}
      >
        <div className={styles.close}>
          <button className={styles.btn} onClick={onClose}>
            {closeIconLM}
          </button>
        </div>
        <ul className={styles.mainMenu}>
          {mainMenu.map((opt) => createOption(opt))}
        </ul>
        <div className={styles.divider} />
        <ul className={styles.info}>
          {columnsInfo.map((opt) => (
            <li key={opt.title as string}>
              <a href={createPath(opt.path || [], tP)}>
                {tMF(opt.title as string)}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.social}>
          {socialMedia.map((ele) => (
            <a
              key={ele.title as string}
              href={createPath(ele.path || [], tP)}
              title={ele.title as string}
            >
              {ele.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default LMMainMenuSide;

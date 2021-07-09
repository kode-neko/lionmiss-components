import React, { useState, useMemo } from "react";
import { mainMenu } from "../../constants";
import { MenuOpt } from "../../types";
import { useTranslation } from "react-i18next";
import { createPath } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";

interface MenuOptPlus extends MenuOpt {
  visible: boolean;
}

export const LMMainMenu: React.FC = () => {
  const { t: tMM } = useTranslation("mainMenu");
  const { t: tP } = useTranslation("paths");
  const createMenuPlus = () =>
    mainMenu.map((opt) => ({ ...opt, visible: false }));
  const [menuPlus, setMenuPlus] = useState<MenuOptPlus[]>(createMenuPlus());

  const handleMouseOverMenuOpt = (name: string) => {
    const newMenuPlus = menuPlus.map((opt) =>
      opt.name === name ? { ...opt, visible: true } : opt
    );
    setMenuPlus(newMenuPlus);
  };

  const handleMouseLeaveMenuOpt = () => {
    const newMenuPlus = menuPlus.map((opt) => ({ ...opt, visible: false }));
    setMenuPlus(newMenuPlus);
  };

  const createSubmenu = (menu: MenuOpt[], visible: boolean) => (
    <div
      className={styles.submenu}
      style={{ display: visible ? "block" : "none" }}
    >
      <ul className={styles.list}>
        {menu.map((opt) => (
          <li key={opt.name}>
            <a href={createPath(opt.path || [], tP)}>{tMM(opt.name)}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  const createMenuOpt = (opt: MenuOptPlus) => {
    const submenu = opt.opts && createSubmenu(opt.opts, opt.visible);
    const link = (
      <a href={createPath(opt.path || [], tP)}>
        {tMM(opt.name)}
        {opt.opts && (
          <span className={styles.arrow}>
            <FontAwesomeIcon icon="caret-down" />
          </span>
        )}
      </a>
    );
    return (
      <li
        className={styles.opt}
        key={opt.name}
        onMouseOver={() => handleMouseOverMenuOpt(opt.name)}
        onMouseLeave={() => handleMouseLeaveMenuOpt()}
      >
        {link}
        {submenu}
      </li>
    );
  };
  return (
    <div className={styles.cont}>
      <ul className={styles.menu}>
        {menuPlus.map((opt) => createMenuOpt(opt))}
      </ul>
    </div>
  );
};

export default LMMainMenu;

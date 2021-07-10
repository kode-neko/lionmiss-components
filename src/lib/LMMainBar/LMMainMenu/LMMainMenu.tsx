import React, { useState } from "react";
import { LMMenuOpt } from "../../types";
import { useTranslation } from "react-i18next";
import { createPath } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LMMainMenuProps, LMMenuOptPlus } from "./types";
import styles from "./styles.module.scss";

export const LMMainMenu: React.FC<LMMainMenuProps> = ({ mainMenu }) => {
  const { t: tMM } = useTranslation("mainMenu");
  const { t: tP } = useTranslation("paths");
  const createMenuPlus = () =>
    mainMenu.map((opt) => ({ ...opt, visible: false }));
  const [menuPlus, setMenuPlus] = useState<LMMenuOptPlus[]>(createMenuPlus());

  const handleMouseOverLMMenuOpt = (name: string) => {
    const newMenuPlus = menuPlus.map((opt) =>
      opt.name === name ? { ...opt, visible: true } : opt
    );
    setMenuPlus(newMenuPlus);
  };

  const handleMouseLeaveLMMenuOpt = () => {
    const newMenuPlus = menuPlus.map((opt) => ({ ...opt, visible: false }));
    setMenuPlus(newMenuPlus);
  };

  const createSubmenu = (menu: LMMenuOpt[], visible: boolean) => (
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

  const createLMMenuOpt = (opt: LMMenuOptPlus) => {
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
        onMouseOver={() => handleMouseOverLMMenuOpt(opt.name)}
        onMouseLeave={() => handleMouseLeaveLMMenuOpt()}
      >
        {link}
        {submenu}
      </li>
    );
  };

  return (
    <ul className={styles.menu}>{menuPlus.map((opt) => createLMMenuOpt(opt))}</ul>
  );
};

export default LMMainMenu;
